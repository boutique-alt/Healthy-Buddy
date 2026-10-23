'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function MovingAnnouncementBar() {
  const { openCart } = useCart();

  const announcementText = (
    <div className="flex items-center gap-8 text-xs font-bold tracking-wide uppercase">
      <span className="flex items-center gap-2">
        <Sparkles size={13} className="text-amber-300 fill-amber-300 animate-pulse" />
        <span className="text-amber-300 font-extrabold">SPECIAL WELCOME OFFER:</span>
        <span className="text-white">GET 10% OFF ON YOUR FIRST ORDER!</span>
      </span>
      <span className="text-emerald-300 opacity-60">•</span>
      <span className="text-emerald-100">FREE HOME DELIVERY ACROSS ALL INDIA</span>
      <span className="text-emerald-300 opacity-60">•</span>
      <span className="text-white">100% NATURAL MINERALS &amp; ZERO CHEMICALS</span>
      <span className="text-emerald-300 opacity-60">•</span>
      <span className="text-amber-200">NO ELECTRICITY NEEDED • 60,000 GLASSES CAPACITY</span>
      <span className="text-emerald-300 opacity-60">•</span>
      <button
        type="button"
        onClick={openCart}
        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/30 hover:bg-emerald-400 text-white font-extrabold text-[11px] transition-colors border border-emerald-400/40"
      >
        <span>Claim 10% Off in Cart</span>
        <ArrowRight size={11} />
      </button>
      <span className="text-emerald-300 opacity-60">•</span>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-r from-[#043615] via-[#094d21] to-[#043615] text-white py-2 overflow-hidden border-b border-emerald-800/40 z-40 select-none shadow-sm">
      <div className="flex w-max animate-marquee space-x-8">
        {announcementText}
        {announcementText}
        {announcementText}
      </div>
    </div>
  );
}
