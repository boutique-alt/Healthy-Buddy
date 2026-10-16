'use client';

import React from 'react';
import Image from 'next/image';
import {
  Heart,
  Activity,
  Flame,
  Bone,
  Sparkles,
  Shield,
  Filter,
  Droplet,
  Smile,
  Brain,
} from 'lucide-react';

const BENEFITS = [
  {
    num: '01',
    title: 'High Blood Pressure Support',
    desc: 'Helps improve blood circulation and supports cardiovascular health.',
    icon: Heart,
    iconColor: 'text-red-500',
    image: '/images/benefit_img_01.png',
  },
  {
    num: '02',
    title: 'Diabetes Support',
    desc: 'Aids metabolic balance and helps neutralize oxidative stress.',
    icon: Activity,
    iconColor: 'text-emerald-600',
    image: '/images/benefit_img_02.png',
  },
  {
    num: '03',
    title: 'Acidity & Heartburn Relief',
    desc: 'pH 9.5+ alkalinity helps neutralize excess stomach acids.',
    icon: Flame,
    iconColor: 'text-orange-500',
    image: '/images/benefit_img_03.png',
  },
  {
    num: '04',
    title: 'Joint Pain & Stiffness',
    desc: 'Reduces acid buildup and supports joint flexibility.',
    icon: Bone,
    iconColor: 'text-teal-600',
    image: '/images/benefit_img_04.png',
  },
  {
    num: '05',
    title: 'Skin Glow & Health',
    desc: 'Antioxidants help fight free radicals for youthful, hydrated and clear skin.',
    icon: Sparkles,
    iconColor: 'text-pink-500',
    image: '/images/benefit_img_05.png',
  },
  {
    num: '06',
    title: 'Stronger Immunity',
    desc: 'Rich in bio-active minerals like Zinc & Silver to boost natural defense.',
    icon: Shield,
    iconColor: 'text-emerald-700',
    image: '/images/benefit_img_06.png',
  },
  {
    num: '07',
    title: 'Fatty Liver Support',
    desc: 'Supports detoxification pathways and helps reduce hepatic burden.',
    icon: Filter,
    iconColor: 'text-red-600',
    image: '/images/benefit_img_07.png',
  },
  {
    num: '08',
    title: 'Kidney Health & Detox',
    desc: 'Helps flush out toxins naturally and supports kidney function.',
    icon: Droplet,
    iconColor: 'text-emerald-600',
    image: '/images/benefit_img_08.png',
  },
  {
    num: '09',
    title: 'Better Digestion',
    desc: 'Smooth molecular penetration helps maintain healthy bowel regularity.',
    icon: Smile,
    iconColor: 'text-orange-600',
    image: '/images/benefit_img_09.png',
  },
  {
    num: '10',
    title: 'Stress & Anxiety Relief',
    desc: 'Alkaline minerals help calm nervous tension and support restful sleep.',
    icon: Brain,
    iconColor: 'text-blue-600',
    image: '/images/benefit_img_10.png',
  },
];

export function HealthBenefitsStory() {
  return (
    <section
      id="benefits"
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">🍃</span>
            <span>Healthier Today, Brighter Tomorrow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            10 Proven Health Benefits <br />
            <span className="text-[#0e6231]">In Every Single Drop.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everyday drinking water enriched with 72+ trace minerals works at the cellular level to restore your body&apos;s natural alkaline equilibrium.
          </p>
        </div>

        {/* 2-Column Showcase: Left Official Composite Card (5 cols), Right 10-Grid (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Master High-Res Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[1206/1344] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
              <Image
                src="/images/benefits_left_master_highres.png"
                alt="Healthy Buddy AquaLife+ 10 Proven Health Benefits Master Card"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right: 10 Benefits Clinical Cards (7 cols in 2 sub-columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.num}
                  className="bg-white rounded-2xl border border-gray-150 hover:border-emerald-300 p-3 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-2.5 group"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#0e6231] font-black text-[11px] sm:text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      {b.num}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Icon size={13} className={`${b.iconColor} flex-shrink-0`} />
                        <h4 className="text-xs sm:text-[13px] font-bold text-gray-900 leading-snug truncate group-hover:text-[#0e6231] transition-colors">
                          {b.title}
                        </h4>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
                        {b.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-12 h-14 sm:w-14 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
