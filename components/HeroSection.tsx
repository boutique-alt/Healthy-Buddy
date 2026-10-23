'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
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

          {/* Feature Badges Interactive Polish Layer */}
          <div className="absolute left-[8.0%] top-[52.0%] w-[38.0%] h-[13.0%] grid grid-cols-6 gap-1 z-20 pointer-events-auto">
            {[
              { label: '100% Natural Minerals', desc: 'Infused with 72+ bio-available trace minerals' },
              { label: 'Chemical Free', desc: 'No synthetic binders or harsh chemicals' },
              { label: 'No Electricity Needed', desc: 'Zero power consumption & eco-friendly' },
              { label: 'Lab Certified Quality', desc: 'Tested & certified for pure alkaline water' },
              { label: 'Safe for Whole Family', desc: 'Healthy hydration for children, adults & seniors' },
              { label: 'Zero Maintenance', desc: 'Long-lasting natural mineral core' },
            ].map((f, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center cursor-pointer rounded-2xl hover:bg-emerald-50/30 transition-all"
                title={`${f.label} • ${f.desc}`}
              >
                <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 group-hover:border-emerald-500/50 group-hover:shadow-md group-hover:shadow-emerald-900/10 transition-all pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Button 1: Explore Products (Real Ultra-Premium Glowing Button) */}
          <Link
            href="#products"
            className="absolute left-[8.2%] top-[67.2%] w-[14.8%] h-[7.4%] rounded-full bg-gradient-to-r from-[#033615] via-[#065f28] to-[#033615] text-white font-extrabold text-[11px] sm:text-xs lg:text-sm xl:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/30 hover:shadow-2xl hover:shadow-emerald-900/50 hover:scale-[1.03] active:scale-[0.98] transition-all z-20 group border border-emerald-400/40 overflow-hidden select-none"
            title="Explore Healthy Buddy Products"
          >
            {/* Shimmer light sweep reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <span className="tracking-wide">Explore Products</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Button 2: Order Alkaline Device • ₹13,999 (Real Glassmorphic Button with Correct ₹13,999 Price) */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute left-[23.7%] top-[67.2%] w-[22.2%] h-[7.4%] rounded-full bg-white hover:bg-[#f6fcf8] border-2 border-[#065f28] text-gray-900 font-extrabold text-[11px] sm:text-xs lg:text-sm xl:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/15 hover:shadow-2xl hover:shadow-emerald-900/30 hover:scale-[1.03] active:scale-[0.98] transition-all z-20 group select-none"
            title="Order Alkaline Device • ₹13,999"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[#065f28] flex-shrink-0 group-hover:scale-110 transition-transform">
              <ShoppingCart size={15} className="text-[#065f28]" />
            </div>
            <span className="text-gray-900 tracking-tight">Order Alkaline Device</span>
            <span className="text-[#065f28] font-black tracking-tight">₹13,999</span>
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

          {/* Mobile Button 1: Explore Products (Real Glowing Button) */}
          <Link
            href="#products"
            className="absolute left-[5.5%] top-[83.0%] w-[89.0%] h-[6.0%] rounded-full bg-gradient-to-r from-[#033615] via-[#065f28] to-[#033615] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/30 active:scale-[0.97] transition-all z-20 border border-emerald-400/40 select-none overflow-hidden"
          >
            <span>Explore Products</span>
            <ArrowRight size={17} />
          </Link>

          {/* Mobile Button 2: Order Alkaline Device • ₹13,999 (Real Button with Correct ₹13,999 Price) */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute left-[5.5%] top-[89.8%] w-[89.0%] h-[6.0%] rounded-full bg-white border-2 border-[#065f28] text-gray-900 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/15 active:scale-[0.97] transition-all z-20 select-none"
          >
            <ShoppingCart size={17} className="text-[#065f28]" />
            <span>Order Alkaline Device • <strong className="text-[#065f28] font-black">₹13,999</strong></span>
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
