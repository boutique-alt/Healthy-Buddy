'use client';

import React from 'react';
import Image from 'next/image';

export function WhyUs() {
  return (
    <section
      id="why-us"
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
          
          {/* Top-Right Handwritten Cursive Note */}
          <div className="hidden lg:block absolute -right-24 -top-2 select-none transform hover:scale-105 transition-transform">
            <Image
              src="/images/happier_families_doodle_alpha.png"
              alt="Pure Water Better Health Happier Families"
              width={145}
              height={75}
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">🛡️</span>
            <span className="uppercase tracking-wider">TRUSTED QUALITY. PROVEN RESULTS.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Verified Specifications &amp; Trust
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Certified quality standards manufactured by Ad Herbalnest Private Limited.
          </p>
        </div>

        {/* ================= 1. TWO EQUAL-HEIGHT CARDS (LEFT: SPECS, RIGHT: FAMILY WELLNESS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[496fr_438fr] gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Official Technical Specifications */}
          <div className="relative w-full aspect-[496/435] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
            <Image
              src="/images/specs_left_card_3x.png"
              alt="Healthy Buddy Official Technical Specifications"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.008]"
              priority
              unoptimized
            />
          </div>

          {/* Right Column: Family Wellness Lifestyle */}
          <div className="relative w-full aspect-[438/435] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
            <Image
              src="/images/specs_right_family_3x.png"
              alt="For The Ones Who Matter Most - Family Wellness"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.008]"
              priority
              unoptimized
            />
          </div>

        </div>

        {/* ================= 2. QUALITY YOU CAN TRUST - FULL WIDTH CERTIFICATION BAR ================= */}
        <div className="mt-6 sm:mt-8 max-w-6xl mx-auto">
          {/* Desktop/Tablet Full Width Bar */}
          <div className="hidden md:block relative w-full aspect-[2844/255] rounded-2xl overflow-hidden shadow-md border border-gray-200/90 bg-white select-none group">
            <Image
              src="/images/specs_bottom_cert_bar_3x.png"
              alt="Quality You Can Trust - ISO, GMP, BPA Free, Lab Tested, Made In India"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.005]"
              priority
              unoptimized
            />
          </div>

          {/* Mobile Tailored Certification Cards (< md) */}
          <div className="block md:hidden bg-white rounded-3xl border border-gray-200 p-5 shadow-sm space-y-3.5">
            <div className="text-center">
              <h4 className="text-sm font-black text-gray-900">Quality You Can Trust</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Third-party tested and certified for your family&apos;s safety.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold text-gray-800">
              <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center gap-2">
                <span className="text-blue-700 font-black text-xs px-1.5 py-0.5 bg-blue-100 rounded">ISO</span>
                <span className="text-[11px]">ISO Certified</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-center gap-2">
                <span className="text-[#0e6231] font-black text-xs px-1.5 py-0.5 bg-emerald-100 rounded">GMP</span>
                <span className="text-[11px]">GMP Certified</span>
              </div>
              <div className="p-2.5 rounded-xl bg-green-50/70 border border-green-100 flex items-center justify-center gap-2">
                <span>🌿</span>
                <span className="text-[11px]">BPA Free</span>
              </div>
              <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center justify-center gap-2">
                <span>🧪</span>
                <span className="text-[11px]">Lab Tested</span>
              </div>
              <div className="col-span-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-center gap-2 text-xs">
                <span>🇮🇳</span>
                <span className="font-bold text-gray-900">Made in India</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">Manufactured in Haryana</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
