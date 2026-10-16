'use client';

import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartAlertToast() {
  const { toast, dismissToast, openCart, count } = useCart();

  if (!toast?.show) return null;

  const handleOpenCart = () => {
    dismissToast();
    openCart();
  };

  return (
    <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-md animate-in slide-in-from-top-4 duration-300 select-none">
      <div className="bg-white border-2 border-[#0e6231] rounded-2xl p-3 sm:p-3.5 shadow-2xl shadow-[#0e6231]/20 flex items-center justify-between gap-3">
        {/* Left Icon & Text */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-full bg-[#dcfce7] text-[#0e6231] flex items-center justify-center flex-shrink-0 shadow-2xs">
            <CheckCircle2 size={20} className="fill-[#dcfce7]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-[#0e6231] tracking-tight">
                Added to Cart!
              </span>
              <span className="text-xs">🌿</span>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-700 font-semibold truncate leading-tight mt-0.5">
              {toast.productName}
            </p>
            <p className="text-[10px] font-bold text-gray-500 leading-tight">
              MRP ₹{toast.price.toLocaleString('en-IN')} (Free Delivery)
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={handleOpenCart}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#0e6231] hover:bg-[#094622] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
          >
            <ShoppingBag size={13} />
            <span>View Cart ({count})</span>
          </button>

          <button
            type="button"
            onClick={dismissToast}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
