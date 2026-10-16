'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function FirstDrinkComparison() {
  return (
    <section
      id="first-drink"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f8fdfa] via-white to-[#f4fbf7] font-sans scroll-mt-20 overflow-hidden"
    >
      {/* Soft Floating Leaves on Background Margins */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0 opacity-80">
        <Image
          src="/images/corner_leaves_tl_alpha.png"
          alt=""
          width={160}
          height={150}
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none select-none z-0 opacity-80">
        <Image
          src="/images/corner_leaves_tr_alpha.png"
          alt=""
          width={150}
          height={130}
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Doodle */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          {/* Top-Left Handwritten Cursive Note */}
          <div className="hidden lg:block absolute -left-20 -top-2 select-none transform hover:scale-105 transition-transform">
            <Image
              src="/images/small_changes_doodle_alpha.png"
              alt="Small Changes, Healthier Tomorrows"
              width={130}
              height={140}
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">💧</span>
            <span className="uppercase tracking-wider">ELEVATE YOUR MORNING HYDRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            What&apos;s Your <span className="text-[#0e6231]">First Drink</span> <br />
            Of The Day?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every choice you make shapes your day. See how ordinary morning beverages compare with pure alkaline mineral hydration.
          </p>
        </div>

        {/* ================= 1. DESKTOP / TABLET (>= md): UNIFIED 3-CARD SHOWCASE ================= */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto select-none">
          <div className="relative w-full aspect-[2730/1092] rounded-3xl overflow-hidden group">
            <Image
              src="/images/first_drink_three_cards_3x.png"
              alt="Morning Beverage Comparison - Tea vs Coffee vs Alkaline Water"
              fill
              className="object-contain"
              priority
              unoptimized
            />

            {/* Interactive Clickable Hotspot over Alkaline Water Card */}
            <Link
              href="#products"
              className="absolute right-[0.5%] top-[0.5%] w-[36.5%] h-[99%] rounded-3xl cursor-pointer z-20 group transition-transform hover:scale-[1.008]"
              title="Click to Order Alkaline Device & Experience 72+ Trace Minerals"
              aria-label="Order Alkaline Water Device"
            >
              <span className="sr-only">Order Flagship Alkaline Water Device</span>
            </Link>
          </div>
        </div>

        {/* ================= 2. MOBILE (< md): 3 VERTICAL STACKED CARDS ================= */}
        <div className="block md:hidden space-y-5 max-w-md mx-auto">
          {/* Card 1: Tea */}
          <div className="relative w-full aspect-[275/348] rounded-3xl overflow-hidden shadow-sm border border-gray-150 bg-[#fefcf8]">
            <Image
              src="/images/first_drink_card_tea_3x.png"
              alt="Tea Morning Comparison"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Card 2: Coffee */}
          <div className="relative w-full aspect-[260/348] rounded-3xl overflow-hidden shadow-sm border border-gray-150 bg-[#fdfaf7]">
            <Image
              src="/images/first_drink_card_coffee_3x.png"
              alt="Coffee Morning Comparison"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Card 3: Alkaline Water */}
          <div className="relative w-full aspect-[336/362] rounded-3xl overflow-hidden shadow-md border-2 border-emerald-500 bg-white">
            <Image
              src="/images/first_drink_card_alkaline_3x.png"
              alt="Alkaline Water - The Best Choice"
              fill
              className="object-contain"
              unoptimized
            />
            <Link
              href="#products"
              className="absolute inset-0 cursor-pointer z-20"
              title="Order Alkaline Water Device"
            />
          </div>

          <div className="pt-1 text-center">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#0e6231] hover:bg-[#0a4823] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <span>Switch to Healthy Buddy Alkaline Water • ₹13,999</span>
            </Link>
          </div>
        </div>

        {/* ================= 3. BOTTOM BANNER: LIFESTYLE & PANORAMIC DISPLAY ================= */}
        <div className="mt-8 sm:mt-10 max-w-6xl mx-auto">
          {/* Desktop/Tablet Panoramic Banner */}
          <div className="hidden md:block relative w-full aspect-[2760/354] rounded-3xl overflow-hidden shadow-md select-none group">
            <Image
              src="/images/first_drink_bottom_banner_3x.png"
              alt="Water is not just a drink, it's a lifestyle - Start your mornings with Healthy Buddy pH 9.5+ alkaline mineral hydration."
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.008]"
              priority
              unoptimized
            />
          </div>

          {/* Mobile Optimized Lifestyle Card (< md) */}
          <div className="block md:hidden relative rounded-3xl overflow-hidden shadow-md bg-gradient-to-br from-[#0c4026] via-[#105634] to-[#08301c] p-6 text-white text-center space-y-4 border border-emerald-800">
            <div className="space-y-1.5">
              <h3 className="text-xl font-black text-white leading-tight">
                Water is not just a drink, it&apos;s a lifestyle.
              </h3>
              <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                Start your mornings with Healthy Buddy pH 9.5+ alkaline mineral hydration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-center gap-2 border border-white/15">
                <span className="text-sm">💧</span>
                <span className="text-xs font-bold text-white">Pure &amp; Clean</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-center gap-2 border border-white/15">
                <span className="text-sm">🌿</span>
                <span className="text-xs font-bold text-white">pH 9.5+ Balance</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-center gap-2 border border-white/15">
                <span className="text-sm">⚡</span>
                <span className="text-xs font-bold text-white">All-Day Vitality</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-center gap-2 border border-white/15">
                <span className="text-sm">❤️</span>
                <span className="text-xs font-bold text-white">Better Immunity</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
