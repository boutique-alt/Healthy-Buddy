import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const now = new Date().toISOString();
    const orderRecord = {
      phone,
      name: body.name || 'Anonymous',
      address: body.address || '',
      pincode: body.pincode || '',
      discountClaimed: Boolean(body.discountClaimed),
      discountAmount: Number(body.discountAmount) || 0,
      totalAmount: Number(body.totalAmount) || 0,
      date: now,
    };

    if (existingIndex >= 0) {
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

    return NextResponse.json({
      success: true,
      message: 'Order recorded successfully',
    });
  } catch (error) {
    console.error('API record-customer error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
