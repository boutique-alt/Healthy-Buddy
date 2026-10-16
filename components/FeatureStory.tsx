'use client';

import React from 'react';
import Image from 'next/image';
import { Droplet, HeartPulse, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export function FeatureStory() {
  return (
    <section id="alkaline-device" className="py-16 sm:py-24 bg-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-primary bg-brand-soft px-3.5 py-1.5 rounded-full border border-brand-light/30">
            Advanced Mineral Science
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            The Foundation of Safe, Healthy Water With Natural Minerals
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Transform ordinary drinking water into energized, mineral-rich alkaline elixir in seconds.
          </p>
        </div>

        {/* 2-Column Pinterest Alignment: Left Circular Badges + Right Content Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pinterest-style Circular Graphic with 2 Floating Circular Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Outer Decorative Splash Ring */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-3 bg-gradient-to-tr from-brand-light via-emerald-200 to-copper-light shadow-2xl flex items-center justify-center">
              
              {/* Inner Circle with Image */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-white border-4 border-white shadow-inner">
                <Image
                  src="/images/hydration_lifestyle.jpg"
                  alt="Healthy Buddy Pure Hydration"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
              </div>

              {/* Badge 1 (Top Left): Circular Pill Badge */}
              <div className="absolute -top-4 -left-2 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-primary text-white shadow-xl flex flex-col items-center justify-center text-center p-2 border-4 border-white transition-transform hover:scale-105">
                <span className="text-xs sm:text-sm font-extrabold leading-tight">100%</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wide font-medium text-brand-soft">
                  Natural Minerals
                </span>
              </div>

              {/* Badge 2 (Bottom Right): Circular Pill Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-copper text-white shadow-xl flex flex-col items-center justify-center text-center p-2 border-4 border-white transition-transform hover:scale-105">
                <span className="text-xl sm:text-2xl font-black leading-none">pH 9+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/90 mt-1">
                  Alkaline Body
                </span>
                <span className="text-[9px] text-white/70">Pure Mineral</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mineral Highlights & Health Benefits */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                Why Alkaline Mineral Hydration is Vital for Your Daily Health
              </h3>
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                Most purified waters strip away critical minerals, leaving water acidic. The Healthy Buddy Alkaline Cartridge naturally infuses vital bio-available minerals while neutralizing harmful free radicals.
              </p>
            </div>

            {/* 3 Vital Mineral Blocks (Zn, Mg, Ca) */}
            <div className="space-y-4">
              {/* Zinc Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center flex-shrink-0 text-base border border-blue-100">
                  Zn
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    Zinc (Zn) • Strengthens Natural Immunity
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Crucial for cellular repair, antibody production, and defensive body shielding against seasonal ailments.
                  </p>
                </div>
              </div>

              {/* Magnesium Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-primary font-extrabold flex items-center justify-center flex-shrink-0 text-base border border-emerald-100">
                  Mg
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    Magnesium (Mg) • Supports Cellular Energy
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Reduces chronic fatigue, supports muscle relaxation, and helps maintain a balanced nervous system.
                  </p>
                </div>
              </div>

              {/* Calcium Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-copper font-extrabold flex items-center justify-center flex-shrink-0 text-base border border-amber-100">
                  Ca
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    Calcium (Ca) • Stronger Bones & Joints
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Fortifies bone density, supports cardiovascular contraction, and improves everyday mobility.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Healthy Buddy, I would like to learn more about the Alkaline Water Device.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm shadow-md transition-all"
              >
                <MessageCircle size={17} />
                <span>Enquire on WhatsApp</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#products"
                className="text-sm font-semibold text-brand-primary hover:text-brand-dark hover:underline flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
