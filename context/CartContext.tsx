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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'hb_cart_items_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [toast, setToast] = useState<CartToastData | null>(null);

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

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const sendWhatsAppOrder = useCallback(
    (customer: OrderCustomerDetails) => {
      if (items.length === 0) return;

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

      message += `\n*ORDER ITEMS (${count}):*\n`;
      items.forEach((item, index) => {
        const lineTotal = item.price * item.qty;
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.qty} × ₹${item.price} = ₹${lineTotal}\n`;
      });

      message += `\n──────────────────\n`;
      message += `💰 *TOTAL PAYABLE: ₹${subtotal.toLocaleString('en-IN')}*\n`;
      message += `──────────────────\n`;
      message += `_Sent via Healthy Buddy Official Landing Page_`;

      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMsg}`;

      window.open(url, '_blank');
    },
    [items, count, subtotal]
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
