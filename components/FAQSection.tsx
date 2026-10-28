'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface FaqItem {
  num: string;
  q: string;
  a: string;
  hasVisual?: boolean;
}

const FAQS_DATA: FaqItem[] = [
  {
    num: '01',
    q: 'How does the Healthy Buddy H2 Magnetic Alkaline Water Device work?',
    a: 'The device contains 3 types of natural mineral stones and 7 therapeutic metals including a pure copper funnel, 92.5% pure silver antibacterial layer, and dual neodymium magnetic vortex chambers. As water passes through, it naturally restructures the water clusters, infuses 72+ essential trace minerals, elevates the pH to 9.5+, and produces negative antioxidant ORP (-500 to -800 mV) and +700 PPB molecular hydrogen without any electricity or chemicals.',
    hasVisual: true,
  },
  {
    num: '02',
    q: 'Does it require any electricity, batteries, or complex plumbing?',
    a: 'No! It is 100% non-electrical and portable. It requires zero electricity, no wiring, and zero plumbing connections. You can use it conveniently with your existing kitchen water, bottles, jugs, or dispensers at home or while traveling.',
  },
  {
    num: '03',
    q: 'How long does the device last and what is the output capacity?',
    a: 'The device is clinically engineered for a massive capacity of 60,000 glasses of mineral alkaline water. It comes with a 12-Month (1 Year) official warranty from Healthy Buddy / Ad Herbalnest Private Limited.',
  },
  {
    num: '04',
    q: 'What is included in the package and is a testing kit provided?',
    a: 'Yes! Every unit comes as a complete box including the 11-inch 304 medical-grade steel cartridge, pure copper chalice funnel, two free liquid testing reagent dropper bottles (Alkaline Water pH test drops and Positive/Negative ORP test drops), a 12-month official warranty card, and a user guide.',
  },
  {
    num: '05',
    q: 'Is this alkaline water safe for children, seniors, and daily cooking?',
    a: 'Yes, 100%. The water is infused only with natural dietary minerals (Calcium, Magnesium, Zinc) and operates within optimal biological pH ranges. It is loved and trusted by over 10,000 families across India for daily drinking, making tea, baby food, and cooking.',
  },
  {
    num: '06',
    q: 'How can I order and what are the delivery options?',
    a: 'You can order directly on our website by clicking "Add to Cart" or chat with our team on WhatsApp at +91 98300 22991. We offer free express doorstep delivery across India with full order tracking.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Healthy Buddy Team, I want to inquire about the Alkaline Water Device offers.'
  )}`;

  return (
    <section
      id="faq"
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
          <div className="hidden lg:block absolute -right-20 -top-2 select-none transform hover:scale-105 transition-transform">
            <Image
              src="/images/clear_answers_doodle_alpha.png"
              alt="Clear Answers Healthier Choices"
              width={140}
              height={70}
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef9f2] border border-[#c6ebd4] text-[#0e6231] text-xs font-bold shadow-2xs mb-3">
            <span className="text-sm">🎧</span>
            <span>Customer Helpdesk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Healthy Buddy AquaLife+
          </p>
        </div>

        {/* ================= 1. TWO COLUMNS (LEFT: DEVICE VISUAL SHOWCASE, RIGHT: ACCORDION) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[355fr_625fr] gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Device Showcase with 5 Badges */}
          <div className="relative w-full aspect-[1065/1095] rounded-3xl overflow-hidden select-none group">
            <Image
              src="/images/faq_left_device_3x.png"
              alt="Healthy Buddy Pure Water Happier Families Device Showcase"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              priority
              unoptimized
            />
          </div>

          {/* Right Column: 6 Interactive FAQ Accordion Items */}
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-4 sm:p-6 space-y-3">
            {FAQS_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.num}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-[#f4fcf7] border-[#d8f3e2] shadow-2xs'
                      : 'bg-white hover:bg-gray-50/70 border-gray-150'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#0e6231] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">
                        {item.q}
                      </span>
                    </div>

                    <div className="flex-shrink-0 text-gray-500">
                      {isOpen ? (
                        <ChevronUp size={18} className="text-[#0e6231]" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-4 pt-1 border-t border-[#d8f3e2]/60">
                      {item.hasVisual ? (
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                          <div className="relative w-32 sm:w-36 aspect-[396/324] rounded-xl overflow-hidden shadow-2xs flex-shrink-0 bg-white border border-emerald-100">
                            <Image
                              src="/images/faq_item1_mineral_layers.png"
                              alt="Multi-stage mineral stones and copper vortex cross section"
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed flex-1">
                            {item.a}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed pt-1">
                          {item.a}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= 2. BOTTOM CONTACT & HELPDESK BANNER ================= */}
        <div className="mt-8 sm:mt-10 max-w-6xl mx-auto">
          {/* Desktop/Tablet Panoramic Banner (>= md) */}
          <div className="hidden md:block relative w-full aspect-[2910/261] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white select-none group">
            <Image
              src="/images/faq_bottom_support_banner_3x.png"
              alt="Connect with Healthy Buddy - WhatsApp Support"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.005]"
              priority
              unoptimized
            />

            {/* Clickable WhatsApp Hotspot */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[34%] top-[50%] w-[32%] h-[40%] rounded-full cursor-pointer z-20 group"
              title="Connect with Healthy Buddy on WhatsApp"
            >
              <span className="sr-only">Contact on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Tailored Support Card (< md) */}
          <div className="block md:hidden bg-[#f3f9f5] border border-[#cbe6d5] rounded-3xl p-5 shadow-sm space-y-4 text-center select-none">
            {/* Avatar & Online Badge */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#167d40] shadow-sm bg-white">
                  <Image
                    src="/images/faq_support_avatar.png"
                    alt="Healthy Buddy Support Team"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Online" />
              </div>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#c4e9cf] text-[#0e6231] text-[11px] font-bold shadow-2xs">
                <span>🍃</span>
                <span>Customer Helpdesk</span>
              </div>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-900 tracking-tight leading-snug">
                Still have questions? We&apos;re here to help!
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                Connect directly with <strong className="text-gray-900 font-bold">{BRAND_INFO.contactPerson}</strong> for instant answers, orders, and personalized advice.
              </p>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-sm shadow-md shadow-[#25D366]/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle size={18} className="fill-white" />
                <span>Chat on WhatsApp (+91 98300 22991)</span>
              </a>
            </div>

            {/* 3 Trust Points */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#cbe6d5]/70 text-[10px] font-bold text-gray-700">
              <div className="flex flex-col items-center gap-1">
                <Zap size={14} className="text-[#0e6231] fill-[#0e6231]" />
                <span>Fast Response</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck size={14} className="text-[#0e6231]" />
                <span>Trusted Support</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Sparkles size={14} className="text-[#0e6231]" />
                <span>Personal Guidance</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
