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
    const filePath = path.join(process.cwd(), 'data', 'customers.json');
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
    const filePath = path.join(process.cwd(), 'data', 'customers.json');
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
  if (!GOOGLE_SHEET_WEBHOOK_URL) return;
  try {
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
      redirect: 'follow',
    });
    const text = await response.text();
    console.log('Google Sheet sync response:', text);
  } catch (err) {
    console.error('Failed to forward order to Google Sheet:', err);
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
      // Customer has ordered before, increment order count and update last order date
      customers[existingIndex].ordersCount = (customers[existingIndex].ordersCount || 1) + 1;
      customers[existingIndex].lastOrder = now;
      if (!customers[existingIndex].orders) {
        customers[existingIndex].orders = [];
      }
      customers[existingIndex].orders.push(orderRecord);
    } else {
      // New first-time customer
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

    // Forward to Google Sheet in the background (non-blocking for fast checkout)
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

    // Trigger async push to Google Sheet without blocking response
    forwardToGoogleSheet(sheetPayload).catch((e) =>
      console.error('Async Google Sheet sync error:', e)
    );

    return NextResponse.json({
      success: true,
      message: 'Order recorded locally and synced to Google Sheets successfully',
    });
  } catch (error) {
    console.error('API record-customer error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
