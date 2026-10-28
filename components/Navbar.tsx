'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  Search,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Sparkles,
  Headphones,
  Leaf,
  Menu,
  X,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/products';

export function Navbar() {
  const { count, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('products');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] font-sans select-none">
      {/* 1. TOP ANNOUNCEMENT BAR (Dark Forest Green #084e32 matching reference) */}
      <div className="bg-[#084e32] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Desktop full bar with exact 5 trust & service points from reference */}
          <div className="hidden md:flex items-center justify-center gap-3 lg:gap-5 flex-wrap text-white/95 font-medium">
            <div className="flex items-center gap-1.5">
              <Leaf size={14} className="text-[#34d399] fill-current" />
              <span>100% Natural Minerals &amp; Chemical-Free Hydration</span>
            </div>
            <span className="text-white/35 font-light select-none">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#34d399]" />
              <span>Trusted by 10,000+ Happy Families</span>
            </div>
            <span className="text-white/35 font-light select-none">|</span>
            <div className="flex items-center gap-1.5">
              <Truck size={14} className="text-[#34d399]" />
              <span>Free Shipping on Orders Above ₹999</span>
            </div>
            <span className="text-white/35 font-light select-none">|</span>
            <div className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#34d399]" />
              <span>Hope • Health • Happiness</span>
            </div>
            <span className="text-white/35 font-light select-none">|</span>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Headphones size={13} className="text-[#34d399]" />
              <span>Quick Support</span>
            </a>
          </div>

          {/* Mobile responsive condensed bar */}
          <div className="flex md:hidden items-center justify-between w-full text-[10.5px] font-medium text-white/95">
            <div className="flex items-center gap-1">
              <Leaf size={12} className="text-[#34d399] fill-current" />
              <span>100% Natural Minerals</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck size={12} className="text-[#34d399]" />
              <span>Free Shipping Above ₹999</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-[84px] gap-4">
          
          {/* Left section: Original Brand Logo Asset & Tagline + Main Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-12 xl:gap-14">
            <Link
              href="/"
              className="flex-shrink-0 group block transition-opacity hover:opacity-95"
              aria-label="Healthy Buddy - Hope Health Happiness"
            >
              <div className="relative h-14 sm:h-[62px] w-[86px] sm:w-[94px]">
                <Image
                  src="/images/logo.png"
                  alt="Healthy Buddy Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links: ONLY Home, All Products, Contact */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px]">
              {/* Active Home item with deep forest-green underline indicator */}
              <div className="relative flex flex-col items-center">
                <Link
                  href="#hero"
                  className="font-bold text-[#085432] transition-colors"
                >
                  Home
                </Link>
                <span className="absolute -bottom-2.5 -left-1 -right-1 h-[3px] bg-[#085432] rounded-full" />
              </div>

              {/* All Products */}
              <Link
                href="#products"
                className="font-semibold text-gray-700 hover:text-[#085432] transition-colors"
              >
                All Products
              </Link>

              {/* Testimonials */}
              <Link
                href="#testimonials"
                className="font-semibold text-gray-700 hover:text-[#085432] transition-colors"
              >
                Testimonials
              </Link>

              {/* Contact */}
              <Link
                href="#contact"
                className="font-semibold text-gray-700 hover:text-[#085432] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right section: Search Bar + Mobile Icon Button + Cart Icon Button */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            {/* Search Input Field */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center relative w-52 lg:w-64 xl:w-72"
            >
              <Search
                size={16}
                className="absolute left-4 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#f4f6f8] text-sm text-gray-800 placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#085432] focus:bg-white focus:ring-1 focus:ring-[#085432]/20 transition-all shadow-2xs"
              />
            </form>

            {/* Phone Contact Icon Button */}
            <a
              href={`tel:${BRAND_INFO.phoneDisplay.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Support ${BRAND_INFO.phoneDisplay}`}
              title={`Call Support: ${BRAND_INFO.phoneDisplay}`}
              className="flex items-center justify-center w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#eef9ef] border border-[#c6e7d0] text-[#085432] hover:bg-[#e2f5e8] hover:border-[#a3dcaf] transition-all duration-200 active:scale-95 shadow-xs"
            >
              <PhoneCall size={18} strokeWidth={2.2} />
            </a>

            {/* WhatsApp Contact Icon Button */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Connect with Healthy Buddy on WhatsApp"
              className="flex items-center justify-center w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#ebfaef] border border-[#b8ecc6] text-[#25D366] hover:bg-[#def7e4] hover:border-[#25D366] transition-all duration-200 active:scale-95 shadow-xs"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
              </svg>
            </a>

            {/* Shopping Cart Button with Dynamic Badge */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Open Shopping Cart"
              title="Open Shopping Cart"
              className="relative flex items-center justify-center w-11 sm:w-12 h-10 sm:h-11 rounded-2xl bg-[#085432] hover:bg-[#064227] text-white transition-all duration-200 active:scale-95 shadow-sm shadow-[#085432]/25"
            >
              <ShoppingCart size={19} strokeWidth={2.2} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[11px] font-black flex items-center justify-center shadow-sm border-2 border-white animate-in zoom-in-50 duration-200">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#085432] rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE MENU DROPDOWN (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-3">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#f4f6f8] text-sm text-gray-800 placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#085432] focus:bg-white"
            />
          </form>

          {/* Mobile Links: ONLY Home, All Products, Contact */}
          <Link
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#085432] font-bold text-base py-2 border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold text-base py-2 hover:text-[#085432] border-b border-gray-50"
          >
            All Products
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold text-base py-2 hover:text-[#085432] border-b border-gray-50"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold text-base py-2 hover:text-[#085432]"
          >
            Contact
          </Link>

          {/* Quick contact actions in drawer */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#085432]">
            <a
              href={`tel:${BRAND_INFO.phoneDisplay.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <PhoneCall size={15} />
              <span>Call Support</span>
            </a>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Headphones size={15} />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
