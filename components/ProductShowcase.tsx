'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  Droplet,
  Zap,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Users,
  Play,
  X,
  ExternalLink,
  PowerOff,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, BRAND_INFO } from '../data/products';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  isVideo?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Pure Alkaline Water - Healthy Buddy AquaLife+',
    subtitle: '100% Natural • Official Client Asset',
    url: '/images/showcase_left_exact_highres.png',
  },
  {
    id: 2,
    title: 'Verified Technical Specifications',
    subtitle: '60,000 Glasses • pH 9.5+ • 11 Inch',
    url: '/images/tech_specs_sheet.png',
  },
  {
    id: 3,
    title: 'Engineered For Purity Architecture',
    subtitle: 'Copper Funnel & 72+ Trace Minerals',
    url: '/images/engineered_for_purity_diagram.png',
  },
  {
    id: 4,
    title: 'Family Wellness & Daily Vitality',
    subtitle: 'Safe for All Ages & Better Health',
    url: '/images/family_wellness_lifestyle.jpg',
  },
  {
    id: 5,
    title: 'Watch Product Video & Demonstration',
    subtitle: 'Ad Herbalnest Official Demonstration',
    url: '/images/product_copper_device.png',
    isVideo: true,
  },
];

export function ProductShowcase() {
  const { addItem, openCart } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const product = PRODUCTS[0];
  const selectedItem = GALLERY_ITEMS[selectedIndex];

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectThumbnail = (index: number) => {
    if (GALLERY_ITEMS[index].isVideo) {
      setShowVideoModal(true);
    } else {
      setSelectedIndex(index);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I want to order the Healthy Buddy AquaLife+ H2 Magnetic Alkaline Water Device (MRP ₹13,999). Please share the best rate and offer details.`
  );

  return (
    <section id="products" className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f9fdfa] via-white to-[#f4fbf6] font-sans scroll-mt-20 overflow-hidden">
      
      {/* Decorative Botanical Corner Leaves Matching Exact Mockup */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0 opacity-80 sm:opacity-100">
        <Image
          src="/images/corner_leaves_tl_alpha.png"
          alt=""
          width={160}
          height={150}
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none select-none z-0 opacity-80 sm:opacity-100">
        <Image
          src="/images/corner_leaves_tr_alpha.png"
          alt=""
          width={140}
          height={130}
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none select-none z-0 opacity-80 sm:opacity-100">
        <Image
          src="/images/corner_leaves_bl_alpha.png"
          alt=""
          width={150}
          height={130}
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0 opacity-80 sm:opacity-100">
        <Image
          src="/images/corner_leaves_br_alpha.png"
          alt=""
          width={150}
          height={130}
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. TOP TRUST BADGES BAR + HANDWRITTEN DOODLE (EXACT MATCH) */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-between gap-3 sm:gap-4 pb-8 pt-1 border-b border-emerald-100/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eaf7ee] border border-[#c4e9cf] flex items-center justify-center text-[#0e6231] shadow-xs">
              <Leaf size={18} className="fill-[#0e6231]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                PREMIUM QUALITY
              </div>
              <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                Pure Water, Better Life
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eaf7ee] border border-[#c4e9cf] flex items-center justify-center text-[#0e6231] shadow-xs">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                100% Natural &amp; Safe
              </div>
              <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                No Harmful Chemicals
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eaf7ee] border border-[#c4e9cf] flex items-center justify-center text-[#0e6231] shadow-xs">
              <Droplet size={18} className="fill-[#0e6231]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                pH Balanced
              </div>
              <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                For Better Health
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eaf7ee] border border-[#c4e9cf] flex items-center justify-center text-[#0e6231] shadow-xs">
              <Users size={18} />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                Trusted by 10,000+
              </div>
              <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                Happy Families
              </div>
            </div>
          </div>

          {/* Far Right: Cursive Script Note "Healthy Living Starts Here ♡" */}
          <div className="hidden lg:block select-none transform hover:scale-105 transition-transform">
            <Image
              src="/images/healthy_living_handwritten_doodle_alpha.png"
              alt="Healthy Living Starts Here"
              width={120}
              height={80}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* 2. SECTION HEADER (EXACT MATCH) */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-10">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800/80 mb-2">
            CLEANER WATER &nbsp;•&nbsp; HEALTHIER YOU
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Transform Your Water, <br />
            Transform Your Life.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Engineered with 3 natural mineral stones and 7 therapeutic metals. Delivering 60,000 glasses of pH 9.5+ antioxidant, hydrogen-rich alkaline water directly in your home.
          </p>
        </div>

        {/* 3. MAIN PRODUCT SHOWCASE (2 EQUAL COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* ============ LEFT COLUMN: VISUAL DISPLAY & THUMBNAILS ============ */}
          <div className="space-y-4">
            
            {/* Main Stage Display (Aspect ~ 430/327 with rounded-3xl and subtle border) */}
            <div className="relative w-full aspect-[430/327] rounded-3xl overflow-hidden shadow-md border border-gray-200/90 bg-white group select-none">
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                fill
                className={`${
                  selectedItem.id === 1
                    ? 'object-cover'
                    : 'object-contain p-3'
                } transition-transform duration-500 group-hover:scale-[1.01]`}
                priority
                unoptimized
              />

              {/* If not showing main art image, provide the back to product badge */}
              {selectedItem.id !== 1 && (
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-20">
                  {selectedItem.title}
                </div>
              )}
            </div>

            {/* Thumbnail Row with Prev/Next Controls */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition-colors flex-shrink-0"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="grid grid-cols-5 gap-2 flex-1">
                {GALLERY_ITEMS.map((item, index) => {
                  const isActive = selectedIndex === index;

                  if (item.isVideo) {
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectThumbnail(index)}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#eaf7ee] hover:bg-[#ddf4e4] flex flex-col items-center justify-center text-[#0e6231] shadow-xs group ${
                          isActive
                            ? 'border-[#0e6231] ring-2 ring-[#0e6231]/30'
                            : 'border-[#c4e9cf]'
                        }`}
                        title="Watch Official Video"
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0e6231] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                          <Play size={12} className="fill-white ml-0.5" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-extrabold mt-1 text-[#0e6231] tracking-tight text-center leading-tight">
                          Watch Video
                        </span>
                      </button>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectThumbnail(index)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white shadow-xs ${
                        isActive
                          ? 'border-[#0e6231] ring-2 ring-[#0e6231]/30 scale-[1.02]'
                          : 'border-gray-200 hover:border-emerald-400 opacity-80 hover:opacity-100'
                      }`}
                      title={item.title}
                    >
                      <Image
                        src={item.url}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition-colors flex-shrink-0"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          {/* ============ RIGHT COLUMN: EXACT BUY BOX & SPECIFICATIONS ============ */}
          <div className="relative bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 shadow-sm space-y-5">
            
            {/* Hanging Ribbon Tab at Top-Right Edge (25% OFF) */}
            <div className="absolute top-0 right-6 sm:right-8 bg-[#156b37] text-white text-[10px] sm:text-[11px] font-black px-2.5 pt-1.5 pb-2 rounded-b-md shadow-md text-center leading-tight tracking-wider z-20 flex flex-col items-center justify-center">
              <span className="text-[8px] tracking-widest opacity-60 leading-none">●●●</span>
              <span className="mt-0.5">25%</span>
              <span>OFF</span>
            </div>

            {/* Stars & Social Proof */}
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-amber-400 text-sm tracking-wider">★★★★★</span>
              <span className="text-xs font-semibold text-gray-700">
                4.9 / 5.0 (10,000+ Happy Families)
              </span>
            </div>

            {/* Product Title & Subtitle */}
            <div className="-mt-1">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                Healthy Buddy AquaLife+
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
                H2 Magnetic Alkaline Water Treatment Device • 11 Inch
              </p>
            </div>

            {/* Pricing Section with Mint Background and Diagonal Corner Banner */}
            <div className="relative bg-[#ecf9f1] border border-[#c3edd1] rounded-2xl p-4 sm:p-5 overflow-hidden">
              
              {/* Diagonal Ribbon: 25% OFF */}
              <div className="absolute -top-1 -right-8 w-28 bg-[#188c44] text-white text-[9px] font-black uppercase py-0.5 text-center rotate-45 shadow-xs tracking-wider z-10">
                25% OFF
              </div>

              <div className="text-[11px] font-bold text-[#0e6231] uppercase tracking-wider mb-1">
                MAXIMUM RETAIL PRICE (MRP)
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#0e6231] tracking-tight">
                    ₹13,999/-
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    (Inclusive of all taxes)
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0e6231] text-white text-xs font-bold shadow-xs whitespace-nowrap">
                  <Sparkles size={13} className="text-yellow-300 fill-yellow-300" />
                  <span>Special Launch Offer</span>
                </div>
              </div>
            </div>

            {/* 6 Key Technical Specs Grid (3 Cols × 2 Rows on Desktop, 2 Cols on Mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              
              {/* Item 1: Water Capacity */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231]">
                  <Droplet size={17} className="fill-[#0e6231]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    Water Capacity
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    60,000 Glasses
                  </span>
                </div>
              </div>

              {/* Item 2: pH Level */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231] font-black text-xs">
                  pH
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    pH Level
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    pH 9.5+ Alkaline
                  </span>
                </div>
              </div>

              {/* Item 3: Antioxidant ORP */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231]">
                  <Zap size={17} className="fill-[#0e6231]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    Antioxidant ORP
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    -500 to -800 mV
                  </span>
                </div>
              </div>

              {/* Item 4: Hydrogen Level */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231] font-black text-xs">
                  H₂
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    Hydrogen Level
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    +700 PPB H2
                  </span>
                </div>
              </div>

              {/* Item 5: Official Warranty */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231]">
                  <ShieldCheck size={17} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    Official Warranty
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    12 Months (1 Year)
                  </span>
                </div>
              </div>

              {/* Item 6: Power / Maintenance */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-gray-150 flex items-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ebf8f0] flex items-center justify-center flex-shrink-0 text-[#0e6231]">
                  <PowerOff size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 font-semibold block truncate leading-tight">
                    Power / Maintenance
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 block truncate leading-tight mt-0.5">
                    Zero Electricity
                  </span>
                </div>
              </div>

            </div>

            {/* Complete Premium Package Includes Box */}
            <div className="bg-[#f4fbf6] border border-[#d6f0dd] rounded-2xl p-4 sm:p-5 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e6231]">
                COMPLETE PREMIUM PACKAGE INCLUDES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x 11-inch 304 Steel Cartridge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x Pure Copper Chalice Funnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x Alkaline pH Testing Drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x Positive/Negative ORP Drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x 12-Month Warranty Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#0e6231] fill-[#eaf7ee] flex-shrink-0" />
                  <span>1x User Guide &amp; Installation Manual</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons Side-by-Side */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0e6231] hover:bg-[#0a4823] text-white font-bold text-sm shadow-md shadow-emerald-900/10 transition-all active:scale-[0.98]"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart &amp; Order • ₹13,999</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#f6fcf8] text-gray-800 font-bold text-sm border border-gray-200 hover:border-emerald-500 shadow-xs transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Buy via WhatsApp</span>
              </a>
            </div>

            {/* Delivery & Direct Contact Row */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Truck size={15} className="text-[#0e6231]" />
                <span>Free Home Delivery Across India</span>
              </div>
              <a
                href={`tel:${BRAND_INFO.phoneDisplay.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 text-gray-700 hover:text-[#0e6231] transition-colors"
              >
                <PhoneCall size={14} className="text-[#0e6231]" />
                <span>
                  Direct Contact: <strong className="text-gray-900 font-semibold">{BRAND_INFO.contactPerson} ({BRAND_INFO.phoneDisplay})</strong>
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* 4. BOTTOM SECTION DIVIDER (EXACT MATCH) */}
        <div className="w-full clear-both mt-16 sm:mt-24 pt-6 pb-2 flex items-center justify-center relative z-10 select-none">
          <div className="h-px bg-emerald-200/70 flex-1 max-w-[120px] sm:max-w-[160px]" />
          <div className="px-4 text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#0e6231] uppercase flex items-center gap-2">
            <span>HEALTHY WATER</span>
            <span className="text-[#0e6231] text-sm">🌿</span>
            <span>HAPPY LIFE</span>
          </div>
          <div className="h-px bg-emerald-200/70 flex-1 max-w-[120px] sm:max-w-[160px]" />
        </div>

      </div>

      {/* Video Demonstration Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-emerald-150 space-y-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="w-10 h-10 rounded-full bg-[#eaf7ee] flex items-center justify-center text-[#0e6231] flex-shrink-0">
                <Play size={18} className="fill-[#0e6231]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                  Healthy Buddy Alkaline Water Device Demonstration
                </h3>
                <p className="text-xs text-gray-500">Official Ad Herbalnest Testing Video &amp; Product Guide</p>
              </div>
            </div>

            {/* Embedded YouTube Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-black border border-gray-200">
              <iframe
                src="https://www.youtube-nocookie.com/embed/5qSuRVO20fc?autoplay=1&rel=0"
                title="Healthy Buddy Alkaline Device Video Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              <p className="text-xs text-gray-600">
                Watch official demonstrations of <strong>pH 9.5+ color change</strong> and antioxidant ORP activity.
              </p>

              <a
                href={BRAND_INFO?.socialLinks?.youtube || 'https://youtube.com/@herbalnest?si=HsbrY5u0oyoD-2sZ'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold text-xs shadow-md transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Play size={14} className="fill-white" />
                <span>Visit YouTube Channel</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
