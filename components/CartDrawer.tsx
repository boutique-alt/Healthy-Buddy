'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  AlertCircle,
  Truck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderCustomerDetails } from '../types';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    clearCart,
    subtotal,
    count,
    sendWhatsAppOrder,
    isFirstTimeCustomer,
    isCheckingCustomer,
    applyFirstTimeDiscount,
    setApplyFirstTimeDiscount,
    checkPhoneNumber,
    discountAmount,
    finalTotal,
  } = useCart();

  const [customer, setCustomer] = useState<OrderCustomerDetails>({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<string | null>(null);

  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  // Handle phone change & check eligibility
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomer((prev) => ({ ...prev, phone: val }));
    const digits = val.replace(/\D/g, '');
    if (digits.length >= 10) {
      checkPhoneNumber(digits);
    }
  };

  const handlePhoneBlur = () => {
    const digits = customer.phone.replace(/\D/g, '');
    if (digits.length >= 10) {
      checkPhoneNumber(digits);
    }
  };

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name.trim() || !customer.phone.trim() || !customer.address.trim()) {
      setFormErrors('Please fill in your Name, Phone Number, and Address to proceed.');
      return;
    }
    if (customer.phone.replace(/\D/g, '').length < 10) {
      setFormErrors('Please enter a valid 10-digit phone number.');
      return;
    }

    setFormErrors(null);
    sendWhatsAppOrder(customer);
  };

  const phoneDigits = customer.phone.replace(/\D/g, '');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full justify-end">
        <div className="w-full max-w-md bg-white shadow-2xl flex flex-col h-full overflow-hidden">
          
          {/* Header */}
          <div className="px-4 py-3.5 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-[#f8fcf9]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#0e6231] flex items-center justify-center flex-shrink-0">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">Your Wellness Cart</h2>
                <p className="text-xs text-gray-500">
                  {count} {count === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-base font-bold text-gray-800">Your cart is empty</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Browse our natural alkaline water device and organic wellness products.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-5 px-6 py-2.5 rounded-full bg-brand-primary text-white font-semibold text-xs shadow-md hover:bg-brand-dark transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-colors"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1 border border-gray-100 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-gray-500">{item.weightOrUnit}</p>
                        <p className="text-xs font-black text-brand-primary mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>
                      </div>

                      {/* Stepper & Trash */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white border border-gray-200 rounded-full px-1.5 py-0.5">
                          <button
                            type="button"
                            onClick={() => decrement(item.id)}
                            className="p-1 hover:text-red-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={2.5} />
                          </button>
                          <span className="text-xs font-bold px-2 text-gray-800">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => increment(item.id)}
                            className="p-1 hover:text-brand-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={2.5} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery & Address Form */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-gray-700 mb-3 flex items-center gap-1.5">
                    <Truck size={14} className="text-brand-primary" />
                    Delivery Information &amp; Instant Offer
                  </h3>

                  {formErrors && (
                    <div className="mb-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle size={15} className="flex-shrink-0" />
                      <span>{formErrors}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                      required
                    />

                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="WhatsApp / Phone Number (10 digits) *"
                        value={customer.phone}
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary pr-9"
                        required
                      />
                      {isCheckingCustomer && (
                        <div className="absolute right-3 top-3 text-emerald-600 animate-spin">
                          <Loader2 size={16} />
                        </div>
                      )}
                    </div>

                    {/* ============ AUTOMATIC 1ST-TIME BUYER DISCOUNT BOX ============ */}
                    {phoneDigits.length < 10 ? (
                      <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-dashed border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-2">
                        <Sparkles size={14} className="text-emerald-600 flex-shrink-0 animate-pulse" />
                        <span>
                          Enter 10-digit WhatsApp number above to check <strong>10% First-Time Buyer Discount</strong>!
                        </span>
                      </div>
                    ) : isFirstTimeCustomer === true ? (
                      /* ELIGIBLE: CHECKBOX ENABLED & CLICKABLE */
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-50 via-[#f0fbf4] to-emerald-50 border border-emerald-300 shadow-2xs">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="firstTimeDiscountToggle"
                            checked={applyFirstTimeDiscount}
                            onChange={(e) => setApplyFirstTimeDiscount(e.target.checked)}
                            className="mt-0.5 w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer accent-[#065f28]"
                          />
                          <label htmlFor="firstTimeDiscountToggle" className="cursor-pointer flex-1 select-none">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-black text-gray-900">
                                Apply 1st Time Order Discount (10% OFF)
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-[#065f28] text-white text-[10px] font-extrabold uppercase shadow-2xs">
                                Save ₹{discountAmount.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <p className="text-[11px] text-emerald-800 mt-1 leading-snug">
                              🎉 <strong>Verified New Customer!</strong> Click checkbox to apply 10% instant savings on your first purchase.
                            </p>
                          </label>
                        </div>
                      </div>
                    ) : isFirstTimeCustomer === false ? (
                      /* RETURNING CUSTOMER: CHECKBOX DISABLED */
                      <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 shadow-2xs">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="firstTimeDiscountDisabled"
                            checked={false}
                            disabled
                            className="mt-0.5 w-4 h-4 text-gray-400 rounded border-gray-300 cursor-not-allowed opacity-50"
                          />
                          <div className="flex-1 select-none">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-bold text-gray-700">
                                1st Time Order Discount (10% OFF)
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-bold">
                                Returning Customer
                              </span>
                            </div>
                            <p className="text-[11px] text-amber-800 mt-1 leading-snug">
                              ⚠️ This phone number has already ordered previously. 1st-time discount is applicable for your first order only.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <textarea
                      placeholder="Delivery Address (House/Street/City) *"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      rows={2}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary resize-none"
                      required
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Pincode *"
                        value={customer.pincode}
                        onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                      />
                      <input
                        type="text"
                        placeholder="Notes (Optional)"
                        value={customer.notes}
                        onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & WhatsApp Checkout Button */}
          {items.length > 0 && (
            <div className="px-4 py-4 sm:p-5 border-t border-gray-100 bg-gray-50/80 space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* 1st Time Order Discount Row */}
                {isFirstTimeCustomer === true && applyFirstTimeDiscount && (
                  <div className="flex justify-between text-emerald-800 font-bold bg-emerald-100/70 px-2.5 py-1.5 rounded-xl border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-emerald-700" />
                      1st Order Discount (10% OFF)
                    </span>
                    <span className="text-[#065f28]">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="flex items-center gap-1 text-brand-primary font-medium">
                    <CheckCircle size={12} /> Direct Brand Delivery
                  </span>
                  <span className="font-semibold text-brand-primary">Free Delivery</span>
                </div>

                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200 items-baseline">
                  <span>Total Payable:</span>
                  <div className="text-right">
                    {isFirstTimeCustomer === true && applyFirstTimeDiscount && (
                      <span className="text-xs text-gray-400 line-through mr-2 font-normal">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-brand-primary text-xl font-black">
                      ₹{finalTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Order Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm shadow-xl shadow-brand-primary/25 hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle size={18} />
                <span>Place Order via WhatsApp • ₹{finalTotal.toLocaleString('en-IN')}</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span>🔒 Safe &amp; Direct Order Booking</span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-red-500 hover:underline"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
