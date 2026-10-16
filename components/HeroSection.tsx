'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export function HeroSection() {
  const { addItem, openCart } = useCart();

  const heroProduct = PRODUCTS.find((p) => p.id === 'hb-alkaline-device') || PRODUCTS[0];

  const handleAddToCart = () => {
    addItem(heroProduct);
    openCart();
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#eef7f1] via-[#f8fbf9] to-[#e4f4ea] font-sans select-none"
    >
      {/* ================= 1. DESKTOP / TABLET: 100vw FULL-BLEED NATURE MASTER 3K HERO SHOWCASE ================= */}
      <div className="hidden md:block relative w-full">
        <div className="relative w-full aspect-[1024/501] select-none">
          <Image
            src="/images/hero_nature_master_ultra_clean.png"
            alt="Healthy Buddy Hero Banner - Pure Water. Better Health. Brighter Tomorrow."
            fill
            className="object-cover w-full h-full"
            priority
            unoptimized
            sizes="100vw"
          />

          {/* Hotspot 1: Explore Products Link Button */}
          <Link
            href="#products"
            className="absolute left-[8.4%] top-[68.0%] w-[14.5%] h-[7.0%] rounded-full cursor-pointer z-20 group transition-transform hover:scale-[1.02] active:scale-[0.98]"
            title="Explore Healthy Buddy Products"
            aria-label="Explore Products"
          >
            <span className="sr-only">Explore Products</span>
          </Link>

          {/* Hotspot 2: Order Alkaline Device Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute left-[23.9%] top-[68.0%] w-[21.8%] h-[7.0%] rounded-full cursor-pointer z-20 group transition-transform hover:scale-[1.02] active:scale-[0.98]"
            title="Order Alkaline Device • ₹13,999"
            aria-label="Order Alkaline Device"
          >
            <span className="sr-only">Order Alkaline Device • ₹13,999</span>
          </button>

          {/* Hotspot 3: Alkaline Product on Mossy Rock */}
          <div
            onClick={handleAddToCart}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAddToCart();
              }
            }}
            className="absolute left-[57.1%] top-[18.0%] w-[22.5%] h-[60.0%] rounded-3xl cursor-pointer z-20 group transition-transform hover:scale-[1.01] active:scale-[0.99]"
            title="Click to Add Flagship Alkaline Device to Cart & Checkout"
            aria-label="Flagship Alkaline Water Device - Add to Cart & Checkout"
          >
            <span className="sr-only">Add Flagship Alkaline Device to Cart</span>
          </div>

          {/* Hotspot 4: Benefit Cards on Right */}
          <div
            onClick={handleAddToCart}
            role="button"
            tabIndex={0}
            className="absolute left-[84.0%] top-[27.0%] w-[13.5%] h-[45.0%] rounded-2xl cursor-pointer z-20"
            title="Alkaline Water Benefits - Click to Order"
          />

          {/* Hotspot 5: 100% Natural Seal */}
          <div
            onClick={handleAddToCart}
            role="button"
            tabIndex={0}
            className="absolute left-[78.0%] top-[68.0%] w-[7.5%] h-[15.0%] rounded-full cursor-pointer z-20"
            title="100% Natural Minerals"
          />
        </div>
      </div>

      {/* ================= 2. MOBILE RESPONSIVE HERO SHOWCASE (< md): EXACT 1ST IMAGE MATCH ================= */}
      <div className="block md:hidden relative w-full">
        <div className="relative w-full aspect-[576/944] select-none">
          <Image
            src="/images/hero_mobile_exact_2x.png"
            alt="Healthy Buddy Hero Banner - Pure Water. Better Health. Brighter Tomorrow."
            fill
            className="object-cover w-full h-full"
            priority
            unoptimized
            sizes="100vw"
          />

          {/* Hotspot 1: Explore Products Button */}
          <Link
            href="#products"
            className="absolute left-[6.0%] top-[83.5%] w-[88.0%] h-[5.7%] rounded-full cursor-pointer z-20 group transition-transform active:scale-[0.98]"
            title="Explore Healthy Buddy Products"
            aria-label="Explore Products"
          >
            <span className="sr-only">Explore Products</span>
          </Link>

          {/* Hotspot 2: Order Alkaline Device Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute left-[6.0%] top-[90.0%] w-[88.0%] h-[5.5%] rounded-full cursor-pointer z-20 group transition-transform active:scale-[0.98]"
            title="Order Alkaline Device • ₹13,999"
            aria-label="Order Alkaline Device"
          >
            <span className="sr-only">Order Alkaline Device • ₹13,999</span>
          </button>

          {/* Hotspot 3: Alkaline Product on Mossy Rock */}
          <div
            onClick={handleAddToCart}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAddToCart();
              }
            }}
            className="absolute left-[40.0%] top-[38.0%] w-[52.0%] h-[32.0%] rounded-2xl cursor-pointer z-20"
            title="Click to Add Flagship Alkaline Device to Cart & Checkout"
            aria-label="Flagship Alkaline Water Device - Add to Cart & Checkout"
          >
            <span className="sr-only">Add Flagship Alkaline Device to Cart</span>
          </div>

          {/* Hotspot 4: 100% Natural Seal */}
          <div
            onClick={handleAddToCart}
            role="button"
            tabIndex={0}
            className="absolute left-[81.0%] top-[65.0%] w-[16.0%] h-[10.0%] rounded-full cursor-pointer z-20"
            title="100% Natural Minerals"
          />
        </div>
      </div>
    </section>
  );
}
