import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function normalizePhone(rawPhone: string): string {
  if (!rawPhone) return '';
  // Remove all non-digits
  const digits = rawPhone.replace(/\D/g, '');
  // Extract last 10 digits (standard Indian mobile format)
  return digits.length >= 10 ? digits.slice(-10) : digits;
}

function getCustomers(): Array<{ phone: string; name?: string; orderDate?: string }> {
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawPhone = body?.phone || '';
    const phone = normalizePhone(rawPhone);

    if (!phone || phone.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a valid 10-digit phone number',
          isFirstTime: false,
        },
        { status: 400 }
      );
    }

    const customers = getCustomers();
    const existing = customers.find((c) => normalizePhone(c.phone) === phone);

    if (existing) {
      return NextResponse.json({
        success: true,
        exists: true,
        isFirstTime: false,
        message: 'This phone number has ordered previously. First-time buyer discount is only available on 1st orders.',
      });
    }

    return NextResponse.json({
      success: true,
      exists: false,
      isFirstTime: true,
      discountPercent: 10,
      message: 'Verified First-Time Buyer! You are eligible for 10% discount on your order.',
    });
  } catch (error) {
    console.error('API check-customer error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
