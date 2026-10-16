'use client';

import React from 'react';
import Image from 'next/image';
import {
  Droplet,
  Leaf,
  ShieldCheck,
  Heart,
} from 'lucide-react';

const ENGINEERING_STAGES = [
  {
    num: '01',
    numBg: 'bg-[#fef3c7] text-[#b45309]',
    title: 'Pure Copper Chalice Funnel (Water Input)',
    description:
      'Infuses natural copper ions (Tamra Jal Ayurvedic science), known to balance Doshas and boost digestive and cellular vitality.',
    image: '/images/eng_card_copper.png',
    alt: 'Pure Copper Chalice Funnel with Ayurvedic Water Input',
  },
  {
    num: '02',
    numBg: 'bg-[#e0f2fe] text-[#0369a1]',
    title: 'Dual Neodymium Magnetic Vortex Chambers',
    description:
      'Re-aligns water cluster molecules into hexagonal micro-clusters, improving cellular hydration, water permeability and bioavailability.',
    image: '/images/eng_card_magnetic.png',
    alt: 'Dual Neodymium Magnetic Vortex Chambers Hexagonal Realignment',
  },
  {
    num: '03',
    numBg: 'bg-[#ede9fe] text-[#6d28d9]',
    title: '92.5% Pure Silver Antimicrobial Shield',
    description:
      'Provides natural bacteriostatic and antimicrobial purification without harsh chemical disinfectants or electricity.',
    image: '/images/eng_card_silver.png',
    alt: '92.5% Pure Silver Antimicrobial Shield Ag+ purification',
  },
  {
    num: '04',
    numBg: 'bg-[#dcfce7] text-[#15803d]',
    title: '72+ Natural Mineral Stones (Maifan & Alkaline)',
    description:
      'Enriches water with bio-available Zinc, Magnesium, Calcium, potassium, raising pH to 9.5+ and delivering negative ORP (-500 to -800 mV).',
    image: '/images/eng_card_minerals.png',
    alt: '72+ Natural Mineral Stones Maifan and Alkaline Beads',
  },
];

export function InternalEngineering() {
  return (
    <section
      id="engineering"
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
        
        {/* Top Header Badge & Titles */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">🍃</span>
            <span>Advanced Mineral Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c1b] tracking-tight leading-tight">
            Engineered For Purity.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Healthy Buddy AquaLife+ uses advanced dual magnetic vortex chambers, natural mineral stones, and pure silver &amp; copper to transform ordinary tap water into therapeutic mineral elixir.
          </p>

          {/* 4 Horizontal Trust Sub-Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-4 pb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-2xs text-xs font-semibold text-gray-800">
              <div className="w-5 h-5 rounded-full bg-[#eaf7ee] flex items-center justify-center text-[#0e6231]">
                <Droplet size={12} className="fill-[#0e6231]" />
              </div>
              <span>Pure &amp; Safe Drinking Water</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-2xs text-xs font-semibold text-gray-800">
              <div className="w-5 h-5 rounded-full bg-[#eaf7ee] flex items-center justify-center text-[#0e6231]">
                <Leaf size={12} className="fill-[#0e6231]" />
              </div>
              <span>Rich in Natural Minerals</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-2xs text-xs font-semibold text-gray-800">
              <div className="w-5 h-5 rounded-full bg-[#eaf7ee] flex items-center justify-center text-[#0e6231]">
                <ShieldCheck size={13} />
              </div>
              <span>Better Hydration &amp; Immunity</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-2xs text-xs font-semibold text-gray-800">
              <div className="w-5 h-5 rounded-full bg-[#eaf7ee] flex items-center justify-center text-[#0e6231]">
                <Heart size={12} className="fill-[#0e6231]" />
              </div>
              <span>Supports Overall Wellness</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Master Architecture Card (7 cols) & Right 4 Stage Cards (5 cols) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Master High-Res Blueprint & Waterfall Display (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[1740/1134] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
              <Image
                src="/images/engineering_left_master_highres.png"
                alt="Healthy Buddy AquaLife+ Engineered For Purity Architecture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Column: 4 Scientific Stage Breakdown Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {ENGINEERING_STAGES.map((stage) => (
              <div
                key={stage.num}
                className="bg-white rounded-2xl border border-gray-150 hover:border-emerald-300 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 sm:gap-4 group"
              >
                {/* Number Badge */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${stage.numBg} font-black text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-2xs`}
                >
                  {stage.num}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-gray-900 leading-snug group-hover:text-[#0e6231] transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Visual Window */}
                <div className="relative w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-18 rounded-xl overflow-hidden border border-gray-150 flex-shrink-0 bg-gray-50 group-hover:scale-105 transition-transform shadow-2xs">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
