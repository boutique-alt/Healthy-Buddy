'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Star,
  ShieldCheck,
  Stethoscope,
  Quote,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location?: string;
  isDoctor?: boolean;
  avatarText: string;
  avatarBg: string;
  rating: number;
  highlightTag: string;
  quote: string;
}

const ALL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dr-manoj-chakraborty',
    name: 'Dr. Manoj Chakraborty',
    role: 'Health Consultant',
    isDoctor: true,
    avatarText: 'MC',
    avatarBg: 'from-teal-600 to-emerald-800',
    rating: 5,
    highlightTag: 'Transparent Specs & Warranty',
    quote:
      "I was interested in learning about alkaline-water devices, and Healthy Buddy's Alkaline Water Device listed specifications gave me a starting point for evaluating the product. I also appreciated having the components and warranty information presented together.",
  },
  {
    id: 'vikash-sharma',
    name: 'Vikash Sharma',
    role: 'Verified Buyer',
    location: 'New Delhi',
    avatarText: 'VS',
    avatarBg: 'from-emerald-700 to-green-900',
    rating: 5,
    highlightTag: 'Compact & Practical Design',
    quote:
      "I was looking for a product that could fit into my everyday routine without unnecessary complexity. Healthy Buddy's Alkaline Water Device caught my attention with its compact design and practical concept.",
  },
  {
    id: 'dr-kavita-modi',
    name: 'Dr. Kavita Modi',
    role: 'Health & Wellness Consultant',
    isDoctor: true,
    avatarText: 'KM',
    avatarBg: 'from-emerald-600 to-teal-800',
    rating: 5,
    highlightTag: 'Simple & High Health Value',
    quote:
      "As a doctor, I am always interested in understanding products related to our everyday health and well-being. When I came across Healthy Buddy's Alkaline Water Device, I was curious to learn more about how it works and what it offers. What I liked was that it is simple to use. I believe it is important to understand both the benefits and limitations of any product before using it, and Healthy Buddy is certainly an interesting option to explore.",
  },
  {
    id: 'rajendra-chotia',
    name: 'CS Rajendra Chotia',
    role: 'Business Consultant & Professional CS',
    location: 'Kolkata',
    avatarText: 'RC',
    avatarBg: 'from-emerald-800 to-green-950',
    rating: 5,
    highlightTag: 'No 12-Hour Wait Delay',
    quote:
      "My day is usually packed with work, and I'm always running around doing one thing or another. I honestly don't have time for complicated routines. I started using Healthy Buddy's Alkaline Water Device a few weeks ago, and the best part is that it's so easy to use. I don't have to wait 12 hours or plan everything in advance. It's simple and fits right into my busy schedule. Glad I came across this product.",
  },
  {
    id: 'dr-sujata-agarwal',
    name: 'Dr. Sujata Agarwal',
    role: 'Lifestyle Coach',
    location: 'Kolkata',
    isDoctor: true,
    avatarText: 'SA',
    avatarBg: 'from-teal-700 to-emerald-900',
    rating: 5,
    highlightTag: 'Whole Family Convenience',
    quote:
      "I came across Healthy Buddy and decided to give it a try, and I'm happy I did! As a working woman, managing my job, home, and family keeps me busy throughout the day. I hardly get time to think about these little things, so I like how easy Healthy Buddy's Alkaline Water Device is to use and include in our daily routine. I've also noticed some positive changes in how I feel since I started using it. It's nice to find something that's convenient for the whole family without adding to my daily workload!",
  },
  {
    id: 'navin-joshi',
    name: 'Navin Joshi',
    role: 'Finance Advisor',
    location: 'Kolkata',
    avatarText: 'NJ',
    avatarBg: 'from-green-700 to-emerald-950',
    rating: 5,
    highlightTag: 'Feeling Better Overall',
    quote:
      "I've been using Healthy Buddy's Alkaline Water Device for a few weeks now, and honestly, I'm glad I gave it a try. I've been feeling better overall, and that makes me happy. The best part is that it's so easy to use and doesn't take much effort. So far, it's been a good experience.",
  },
  {
    id: 'sanjay-chaudhary',
    name: 'Sanjay Chaudhary',
    role: 'Cancer Survivor & AI & IT Tech Expert',
    avatarText: 'SC',
    avatarBg: 'from-green-800 to-teal-950',
    rating: 5,
    highlightTag: 'Family Health & Well-being',
    quote:
      "I came across Healthy Buddy's Alkaline Water Device while looking for ways to take better care of my family's health. I thought I'd give it a try, and I'm happy I did. We've started using it at home, and it's quite easy to use as part of our daily routine. As a husband and father, I feel good knowing I'm making an effort to do a little more for my family's well-being. Overall, I'm happy with the decision.",
  },
  {
    id: 'alok-dhanuka',
    name: 'Alok Dhanuka',
    role: 'Verified Buyer',
    avatarText: 'AD',
    avatarBg: 'from-emerald-700 to-teal-900',
    rating: 5,
    highlightTag: 'Friend Recommendation',
    quote:
      "I first saw Healthy Buddy's Alkaline Water Device at a friend's place and got curious about it, so I decided to try it myself. I've been using it for a little while now, and so far, I'm happy with the experience. I've been feeling good since I started using it. Looking forward to using it regularly.",
  },
];

// Duplicate list 3 times for a seamless infinite scroll loop
const LOOP_ITEMS = [...ALL_TESTIMONIALS, ...ALL_TESTIMONIALS, ...ALL_TESTIMONIALS];

function CompactTestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-[235px] xs:w-[255px] sm:w-[410px] flex-shrink-0 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 shadow-[0_4px_20px_rgba(3,54,21,0.06)] hover:shadow-[0_12px_36px_rgba(3,54,21,0.12)] border border-emerald-100/90 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between select-none">
      <div>
        {/* Top Header: Star Rating & Verified/Doctor Tag */}
        <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-[15px] sm:h-[15px]" />
            ))}
          </div>

          {item.isDoctor ? (
            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[9px] sm:text-[11px] font-bold">
              <Stethoscope className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-700" />
              Doctor Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[9px] sm:text-[11px] font-semibold">
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600" />
              Verified Buyer
            </span>
          )}
        </div>

        {/* Feature/Topic Pill */}
        <div className="mb-1.5 sm:mb-3">
          <span className="inline-block px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-emerald-50 text-[#073b19] font-bold text-[9px] sm:text-xs tracking-tight">
            {item.highlightTag}
          </span>
        </div>

        {/* Review Quote: Ultra-compact on mobile, spacious on desktop */}
        <p className="text-gray-700 text-[11px] sm:text-[13px] sm:leading-relaxed leading-snug relative line-clamp-4 sm:line-clamp-6">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* User Info Footer */}
      <div className="pt-2.5 sm:pt-4 mt-2.5 sm:mt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-black text-[10px] sm:text-xs flex items-center justify-center shadow-sm flex-shrink-0`}
          >
            {item.avatarText}
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
              {item.name}
            </h4>
            <p className="text-[9px] sm:text-[11px] text-gray-500 font-medium">
              {item.role}
              {item.location ? ` • ${item.location}` : ''}
            </p>
          </div>
        </div>

        <Quote className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-200/80 flex-shrink-0" />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth continuous requestAnimationFrame infinite auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    const speed = 0.65; // Ultra-smooth readable speed

    const step = () => {
      if (!isPaused && !isInteractingRef.current && container) {
        container.scrollLeft += speed;

        // Infinite loop wrap: when reaching 1/3 of the triplicated track, wrap seamlessly
        const maxScroll = container.scrollWidth - container.clientWidth;
        const singleSetWidth = container.scrollWidth / 3;

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isPaused]);

  // Handle native touch / swipe wrap-around
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleSetWidth;
    }
  }, []);

  // Pause on touch and resume after 1.5s of inactivity
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    isInteractingRef.current = false;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Manual arrow navigation helpers
  const handleScrollManual = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    setIsPaused(true);
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-gradient-to-b from-[#f7fcf8] via-white to-[#f7fcf8] relative overflow-hidden border-y border-emerald-100/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/50 text-[#043615] text-[11px] sm:text-xs font-black tracking-wide uppercase shadow-sm mb-3">
          <Sparkles size={12} className="text-emerald-700" />
          <span>Real Stories • Doctors, Families &amp; Professionals</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-3">
          Trusted by <span className="text-[#065f28]">Doctors &amp; Everyday Families</span> Across India
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-2">
          Experience natural pH 9.5+ alkaline mineral hydration that seamlessly integrates into busy daily routines with zero complexity.
        </p>

        {/* Trust Stats Metric Pill */}
        <div className="mt-5 sm:mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white border border-emerald-100 shadow-sm text-xs sm:text-sm font-bold text-gray-700">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong>4.9/5</strong> Rating</span>
          </div>

          <span className="hidden sm:inline text-gray-300">•</span>

          <div className="flex items-center gap-1.5 text-teal-900">
            <Stethoscope size={14} className="text-teal-700" />
            <span><strong>3 Medical Doctors</strong> Feedback</span>
          </div>

          <span className="hidden sm:inline text-gray-300">•</span>

          <div className="flex items-center gap-1.5 text-emerald-900">
            <ShieldCheck size={15} className="text-emerald-600" />
            <span><strong>100% Genuine</strong> Experiences</span>
          </div>
        </div>
      </div>

      {/* Single Continuous Infinite Moving Row */}
      <div className="relative w-full overflow-hidden select-none group">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#f7fcf8] via-[#f7fcf8]/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#f7fcf8] via-[#f7fcf8]/90 to-transparent z-10" />

        {/* Desktop Arrow Controls (Visible on hover on desktop) */}
        <button
          type="button"
          onClick={() => handleScrollManual('left')}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-emerald-200 text-emerald-900 shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => handleScrollManual('right')}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-emerald-200 text-emerald-900 shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* The Single Scroll Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-auto no-scrollbar space-x-3 sm:space-x-6 py-3 sm:py-5 px-3 sm:px-8 cursor-grab active:cursor-grabbing will-change-scroll"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
          }}
        >
          {LOOP_ITEMS.map((item, index) => (
            <CompactTestimonialCard
              key={`${item.id}-loop-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* Helpful Hint for Mobile & Desktop */}
      <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-4 font-medium px-4">
        <span className="sm:hidden">👈 Swipe left or right with your finger • Touch to pause</span>
        <span className="hidden sm:inline">Hover with cursor to pause • Drag or swipe to scroll manually</span>
      </p>
    </section>
  );
}
