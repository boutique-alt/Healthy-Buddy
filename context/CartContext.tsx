'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Product, CartItem, OrderCustomerDetails } from '../types';
import { BRAND_INFO } from '../data/products';

interface CartToastData {
  show: boolean;
  productName: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clearCart: () => void;
  count: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  sendWhatsAppOrder: (customer: OrderCustomerDetails) => void;
  toast: CartToastData | null;
  dismissToast: () => void;
  // First-Time Customer Discount Checkbox System
  isFirstTimeCustomer: boolean | null;
  isCheckingCustomer: boolean;
  applyFirstTimeDiscount: boolean;
  setApplyFirstTimeDiscount: (apply: boolean) => void;
  checkPhoneNumber: (phone: string) => Promise<{ exists: boolean; isFirstTime: boolean; message: string }>;
  discountAmount: number;
  finalTotal: number;
  customerStatusMessage: string;
  resetCustomerCheck: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'hb_cart_items_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [toast, setToast] = useState<CartToastData | null>(null);

  // First-Time Buyer state
  const [isFirstTimeCustomer, setIsFirstTimeCustomer] = useState<boolean | null>(null);
  const [isCheckingCustomer, setIsCheckingCustomer] = useState(false);
  const [applyFirstTimeDiscount, setApplyFirstTimeDiscount] = useState(true);
  const [customerStatusMessage, setCustomerStatusMessage] = useState('');

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  // Auto-dismiss toast after 3.5 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load cart from storage', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }, [items, isHydrated]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    setToast({
      show: true,
      productName: product.name,
      price: product.price,
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const increment = useCallback((productId: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }, []);

  const decrement = useCallback((productId: string) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
      );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const count = useMemo(() => {
    return items.reduce((total, item) => total + item.qty, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.qty, 0);
  }, [items]);

  // 10% Discount on subtotal
  const discountAmount = useMemo(() => {
    if (subtotal <= 0) return 0;
    return Math.round(subtotal * 0.10);
  }, [subtotal]);

  // Final total: if first-time and checked, subtract 10%
  const finalTotal = useMemo(() => {
    if (isFirstTimeCustomer === true && applyFirstTimeDiscount) {
      return Math.max(0, subtotal - discountAmount);
    }
    return subtotal;
  }, [subtotal, isFirstTimeCustomer, applyFirstTimeDiscount, discountAmount]);

  // Real-time phone check function
  const checkPhoneNumber = useCallback(async (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setIsFirstTimeCustomer(null);
      setCustomerStatusMessage('');
      return { exists: false, isFirstTime: false, message: '' };
    }

    setIsCheckingCustomer(true);
    try {
      const res = await fetch('/api/check-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: digits }),
      });
      const data = await res.json();

      if (data.exists) {
        // Returning customer: disable discount
        setIsFirstTimeCustomer(false);
        setApplyFirstTimeDiscount(false);
        setCustomerStatusMessage('Returning Customer: Number previously registered. 1st-time discount not applicable.');
      } else {
        // First-time customer: enable discount
        setIsFirstTimeCustomer(true);
        setApplyFirstTimeDiscount(true);
        setCustomerStatusMessage('Verified 1st-Time Customer! You are eligible for 10% discount.');
      }
      return data;
    } catch (e) {
      console.error('Failed to check phone number:', e);
      // Fallback: allow discount if network fails
      setIsFirstTimeCustomer(true);
      setApplyFirstTimeDiscount(true);
      return { exists: false, isFirstTime: true, message: 'Verified 1st time customer' };
    } finally {
      setIsCheckingCustomer(false);
    }
  }, []);

  const resetCustomerCheck = useCallback(() => {
    setIsFirstTimeCustomer(null);
    setCustomerStatusMessage('');
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const sendWhatsAppOrder = useCallback(
    async (customer: OrderCustomerDetails) => {
      if (items.length === 0) return;

      const isDiscountClaimed = isFirstTimeCustomer === true && applyFirstTimeDiscount;
      const actualDiscount = isDiscountClaimed ? discountAmount : 0;
      const payableAmount = subtotal - actualDiscount;

      // Asynchronously record the order in background
      try {
        const itemsSummary = items
          .map((item) => `${item.name} (Qty: ${item.qty})`)
          .join(', ');

        const customerTypeStr = isDiscountClaimed
          ? 'First-Time Buyer (10% Off Claimed)'
          : isFirstTimeCustomer === false
          ? 'Returning Customer'
          : 'First-Time Customer';

        fetch('/api/record-customer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: customer.phone.replace(/\D/g, ''),
            name: customer.name.trim(),
            address: customer.address.trim(),
            pincode: customer.pincode.trim(),
            notes: customer.notes?.trim() || '',
            items: itemsSummary,
            customerType: customerTypeStr,
            discountClaimed: isDiscountClaimed,
            discountAmount: actualDiscount,
            totalAmount: payableAmount,
          }),
        }).catch((err) => console.error('Error saving order record:', err));
      } catch (e) {
        // Non-blocking
      }

      const dateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      let message = `🌿 *NEW ORDER - HEALTHY BUDDY*\n`;
      message += `📅 Date: ${dateStr}\n`;
      message += `──────────────────\n\n`;

      message += `*CUSTOMER DETAILS:*\n`;
      message += `👤 Name: *${customer.name.trim()}*\n`;
      message += `📞 Phone: *${customer.phone.trim()}*\n`;
      message += `📍 Address: *${customer.address.trim()}*\n`;
      message += `📮 Pincode: *${customer.pincode.trim()}*\n`;
      if (customer.notes && customer.notes.trim()) {
        message += `📝 Note: ${customer.notes.trim()}\n`;
      }

      message += `\n*SYSTEM VERIFICATION:*\n`;
      if (isDiscountClaimed) {
        message += `🏷️ Status: ✅ *FIRST-TIME BUYER (10% DISCOUNT CLAIMED)*\n`;
        message += `🎁 Discount: -₹${discountAmount.toLocaleString('en-IN')}\n`;
      } else if (isFirstTimeCustomer === false) {
        message += `🏷️ Status: 👤 *RETURNING CUSTOMER (No 1st-Time Discount)*\n`;
      } else {
        message += `🏷️ Status: 📦 Standard Order\n`;
      }

      message += `\n*ORDER ITEMS (${count}):*\n`;
      items.forEach((item, index) => {
        const lineTotal = item.price * item.qty;
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.qty} × ₹${item.price.toLocaleString('en-IN')} = ₹${lineTotal.toLocaleString('en-IN')}\n`;
      });

      message += `\n──────────────────\n`;
      message += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
      if (isDiscountClaimed) {
        message += `1st Order Discount (10%): -₹${discountAmount.toLocaleString('en-IN')}\n`;
      }
      message += `Delivery: FREE Direct Delivery\n`;
      message += `💰 *TOTAL PAYABLE: ₹${payableAmount.toLocaleString('en-IN')}*\n`;
      message += `──────────────────\n`;
      message += `_Sent via Healthy Buddy Verified Checkout System_`;

      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMsg}`;

      window.open(url, '_blank');
    },
    [items, count, subtotal, isFirstTimeCustomer, applyFirstTimeDiscount, discountAmount]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
        count,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        sendWhatsAppOrder,
        toast,
        dismissToast,
        isFirstTimeCustomer,
        isCheckingCustomer,
        applyFirstTimeDiscount,
        setApplyFirstTimeDiscount,
        checkPhoneNumber,
        discountAmount,
        finalTotal,
        customerStatusMessage,
        resetCustomerCheck,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
