'use client';

import React from 'react';
import Image from 'next/image';

export function ThreeWeeksTransformation() {
  return (
    <section
      id="transformation"
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
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">🍃</span>
            <span>Real People. Real Results.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            6 Benefits — <span className="text-[#0e6231]">Felt Within 3 Weeks.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Backed by the science of alkaline hydration and thousands of verified users globally. Experience noticeable physical improvements within 21 days.
          </p>
        </div>

        {/* 2-Column Exact Equal-Height Layout (Left 411fr : Right 510fr, both height 484) */}
        <div className="grid grid-cols-1 lg:grid-cols-[411fr_510fr] gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Master High-Res 6 Benefits Showcase Card */}
          <div className="relative w-full aspect-[411/484] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
            <Image
              src="/images/three_weeks_left_exact_3x.png"
              alt="Healthy Buddy AquaLife+ 6 Benefits Felt Within 3 Weeks"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
              unoptimized
            />
          </div>

          {/* Right Column: Master High-Res 21-Day Transformation Journey & Vital Mineral Trio */}
          <div className="relative w-full aspect-[510/484] rounded-3xl overflow-hidden group select-none">
            <Image
              src="/images/three_weeks_right_exact_3x.png"
              alt="Your 21-Day Transformation Journey and The Vital Mineral Trio"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              priority
              unoptimized
            />
          </div>

        </div>

      </div>
    </section>
  );
}
