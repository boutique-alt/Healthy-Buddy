'use client';

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartBar() {
  const { count, subtotal, openCart, isCartOpen } = useCart();

  // Hide if cart is empty or drawer is already open
  if (count === 0 || isCartOpen) return null;

  return (
    <div className="fixed bottom-5 inset-x-4 max-w-xl mx-auto z-40 animate-bounce-subtle">
      <div className="bg-brand-dark/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-brand-light/30 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <ShoppingBag size={20} />
          </div>
          <div>
            <div className="text-xs text-brand-soft uppercase tracking-wider font-semibold">
              {count} {count === 1 ? 'item' : 'items'} in your cart
            </div>
            <div className="text-base sm:text-lg font-black text-white">
              ₹{subtotal.toLocaleString('en-IN')}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={openCart}
          className="px-5 py-2.5 rounded-xl bg-brand-light hover:bg-white hover:text-brand-dark text-brand-dark font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
        >
          <span>View Cart & Order</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
