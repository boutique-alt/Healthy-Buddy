'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Plus, Minus, Check, ZoomIn, X, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, increment, decrement, openCart } = useCart();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const cartItem = items.find((i) => i.id === product.id);
  const isInCart = Boolean(cartItem && cartItem.qty > 0);
  const qty = cartItem ? cartItem.qty : 0;

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <div className="group relative bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-3">
          {discountPercent > 0 ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-50 text-red-600 border border-red-100">
              {discountPercent}% OFF
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-soft text-brand-dark">
              Organic
            </span>
          )}

          {product.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-copper/10 text-copper border border-copper/20 uppercase tracking-wider">
              <Sparkles size={11} />
              Best Seller
            </span>
          )}
        </div>

        {/* Product Image with Image Zoom Trigger */}
        <div
          onClick={() => setImageModalOpen(true)}
          className="relative h-48 sm:h-56 w-full rounded-2xl bg-gradient-to-b from-gray-50/80 to-emerald-50/30 overflow-hidden cursor-pointer group-hover:bg-emerald-50/50 transition-colors flex items-center justify-center p-3"
          title="Click to zoom image"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Quick Zoom Icon Overlay */}
          <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            <ZoomIn size={14} />
          </div>
        </div>

        {/* Product Details */}
        <div className="pt-4 flex-1 flex flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">
            {product.categoryLabel}
          </span>
          <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-brand-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500">
            {product.weightOrUnit}
          </p>

          <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Pricing Row */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-2">
            <span className="text-xl font-black text-brand-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Action Button: Add to Cart / Qty Stepper */}
        <div className="mt-4 pt-2">
          {isInCart ? (
            <div className="flex items-center justify-between bg-brand-soft/70 border border-brand-light/30 rounded-full p-1 shadow-inner">
              <button
                type="button"
                onClick={() => decrement(product.id)}
                className="w-8 h-8 rounded-full bg-white hover:bg-red-50 hover:text-red-600 text-gray-700 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Decrease quantity"
              >
                <Minus size={15} strokeWidth={2.5} />
              </button>

              <span className="font-extrabold text-brand-dark text-sm px-2">
                {qty} in Cart
              </span>

              <button
                type="button"
                onClick={() => increment(product.id)}
                className="w-8 h-8 rounded-full bg-brand-primary hover:bg-brand-dark text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Increase quantity"
              >
                <Plus size={15} strokeWidth={2.5} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                addItem(product);
                // Optional: openCart();
              }}
              className="w-full py-2.5 px-4 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-brand-primary/15 hover:shadow-lg active:scale-98 transition-all"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>

      {/* Swornim-styled High Resolution Image Zoom Modal */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-zoomIn flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative h-72 w-full mt-2">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center mt-4">
              <span className="text-xs uppercase font-extrabold text-brand-primary tracking-wider">
                {product.categoryLabel}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.weightOrUnit}</p>
              <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                {product.description}
              </p>

              {product.benefits && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {product.benefits.map((b, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-brand-primary"
                    >
                      <Check size={12} />
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="text-2xl font-black text-brand-primary">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    addItem(product);
                    setImageModalOpen(false);
                    openCart();
                  }}
                  className="px-6 py-2.5 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm shadow-md"
                >
                  Add to Cart & Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
