import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.GOOGLE_SHEET_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycby7ObldzkYRIeHlnJYEBC4EYQo_NPONuof5ugZ6ykyBYhAowuKqQpsz4Jq5PGlL3PPg/exec';

function normalizePhone(rawPhone: string): string {
  if (!rawPhone) return '';
  const digits = rawPhone.replace(/\D/g, '');
  return digits.length >= 10 ? digits.slice(-10) : digits;
}

function getCustomers(): Array<any> {
  try {
    const isVercel = Boolean(process.env.VERCEL);
    const filePath = isVercel
      ? path.join('/tmp', 'customers.json')
      : path.join(process.cwd(), 'data', 'customers.json');

    if (!fs.existsSync(filePath)) {
      return [];
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (error) {
    console.error('Error reading customers.json:', error);
    return [];
  }
}

function saveCustomers(customers: Array<any>): boolean {
  try {
    const isVercel = Boolean(process.env.VERCEL);
    const dirPath = isVercel ? '/tmp' : path.join(process.cwd(), 'data');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, 'customers.json');
    fs.writeFileSync(filePath, JSON.stringify(customers, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving customers.json:', error);
    return false;
  }
}

async function forwardToGoogleSheet(orderData: {
  date: string;
  name: string;
  phone: string;
  address: string;
  pincode: string;
  items: string;
  customerType: string;
  discount: string;
  totalAmount: string;
  notes: string;
}) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) {
    console.warn('GOOGLE_SHEET_WEBHOOK_URL is not defined');
    return null;
  }
  try {
    console.log('Sending order to Google Sheet:', GOOGLE_SHEET_WEBHOOK_URL);
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
      redirect: 'follow',
      cache: 'no-store',
    });

    const text = await response.text();
    console.log('Google Sheet response status:', response.status, 'body:', text);
    return text;
  } catch (err) {
    console.error('Failed to forward order to Google Sheet:', err);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawPhone = body?.phone || '';
    const phone = normalizePhone(rawPhone);

    if (!phone || phone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Valid 10-digit phone number is required' },
        { status: 400 }
      );
    }

    const customers = getCustomers();
    const existingIndex = customers.findIndex((c) => normalizePhone(c.phone) === phone);
    const isReturning = existingIndex >= 0;

    const now = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const orderRecord = {
      phone,
      name: body.name || 'Anonymous',
      address: body.address || '',
      pincode: body.pincode || '',
      notes: body.notes || '',
      items: body.items || 'Healthy Buddy Alkaline Device (Qty: 1)',
      discountClaimed: Boolean(body.discountClaimed),
      discountAmount: Number(body.discountAmount) || 0,
      totalAmount: Number(body.totalAmount) || 0,
      customerType: body.customerType || (isReturning ? 'Returning Customer' : 'First-Time Buyer'),
      date: now,
    };

    if (isReturning) {
      customers[existingIndex].ordersCount = (customers[existingIndex].ordersCount || 1) + 1;
      customers[existingIndex].lastOrder = now;
      if (!customers[existingIndex].orders) {
        customers[existingIndex].orders = [];
      }
      customers[existingIndex].orders.push(orderRecord);
    } else {
      customers.push({
        phone,
        name: body.name || 'Anonymous',
        firstOrderDate: now,
        lastOrder: now,
        ordersCount: 1,
        firstTimeDiscountClaimed: Boolean(body.discountClaimed),
        orders: [orderRecord],
      });
    }

    saveCustomers(customers);

    const discountText = Boolean(body.discountClaimed)
      ? `Yes (-₹${(Number(body.discountAmount) || 0).toLocaleString('en-IN')})`
      : 'No';

    const sheetPayload = {
      date: formattedDate,
      name: body.name || 'Anonymous',
      phone,
      address: body.address || '',
      pincode: body.pincode || '',
      items: body.items || 'Healthy Buddy Alkaline Device (Qty: 1)',
      customerType: body.customerType || (isReturning ? 'Returning Customer' : 'First-Time Buyer'),
      discount: discountText,
      totalAmount: `₹${(Number(body.totalAmount) || 0).toLocaleString('en-IN')}`,
      notes: body.notes || '',
    };

    // CRITICAL FOR VERCEL SERVERLESS: Must AWAIT so Lambda container does not terminate before sync finishes!
    const sheetSyncResult = await forwardToGoogleSheet(sheetPayload);

    return NextResponse.json({
      success: true,
      sheetSynced: Boolean(sheetSyncResult),
      message: 'Order recorded and synced to Google Sheets successfully',
    });
  } catch (error) {
    console.error('API record-customer error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
