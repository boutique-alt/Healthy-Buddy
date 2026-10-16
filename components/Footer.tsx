'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Globe,
  Phone,
  MessageCircle,
  Heart,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#053616] text-white pt-16 pb-12 border-t border-emerald-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-16 w-52 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
              <Image
                src="/images/logo.png"
                alt="Healthy Buddy Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            
            <p className="text-emerald-300 text-sm font-bold tracking-wide">
              {BRAND_INFO.tagline}
            </p>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              &ldquo;{BRAND_INFO.subtagline}&rdquo; — Bringing India&apos;s first non-electrical H2 Magnetic Alkaline Water Device directly to your household.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>100% Purity Guaranteed • ISO &amp; GMP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400" />
                <span>Sonipat, Haryana - 131101, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="#hero" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-emerald-300 transition-colors">
                  Flagship Alkaline Device (₹13,999)
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-emerald-300 transition-colors">
                  Technical Specs &amp; FAQs
                </Link>
              </li>
              <li>
                <a
                  href="https://amzn.in/d/05t8Cr3X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Amazon Store Link</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact &amp; Support
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Globe size={16} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://${BRAND_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  {BRAND_INFO.website}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white hover:underline"
                >
                  {BRAND_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <span>
                  {BRAND_INFO.contactPerson}: {BRAND_INFO.phoneDisplay}
                </span>
              </li>

              <li className="pt-2">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Social Media & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.name} ({BRAND_INFO.company}). All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-gray-300">
            <a
              href="https://www.facebook.com/share/1GWsY5m3RM/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Facebook
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/adherbalnest?igsh=amFlcXJxb2J1bW80"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://youtube.com/@herbalnest?si=HsbrY5u0oyoD-2sZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
