'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ProductShowcase } from '../components/ProductShowcase';
import { InternalEngineering } from '../components/InternalEngineering';
import { HealthBenefitsStory } from '../components/HealthBenefitsStory';
import { ThreeWeeksTransformation } from '../components/ThreeWeeksTransformation';
import { FirstDrinkComparison } from '../components/FirstDrinkComparison';
import { WhyUs } from '../components/WhyUs';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { CartAlertToast } from '../components/CartAlertToast';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 0. Floating Alert Toast for Add to Cart */}
      <CartAlertToast />

      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* 2. 3K Nature Master Hero Showcase */}
      <HeroSection />

      {/* 3. Flagship Product Showcase & Buy Box (MRP ₹13,999) */}
      <ProductShowcase />

      {/* 4. Engineered For Purity (Multi-Stage Cross-Section Architecture) */}
      <InternalEngineering />

      {/* 5. 10 Proven Health Benefits & Doctor Reagent Testing Drops */}
      <HealthBenefitsStory />

      {/* 6. 6 Benefits Felt Within 3 Weeks & Mineral Trio (Zn, Mg, Ca) */}
      <ThreeWeeksTransformation />

      {/* 7. Morning Lifestyle Comparison (Tea vs Coffee vs Alkaline Water) */}
      <FirstDrinkComparison />

      {/* 8. Verified Specifications Table, Family Trust & Quality Certifications */}
      <WhyUs />

      {/* 9. Frequently Asked Questions & Customer Helpdesk */}
      <FAQSection />

      {/* 10. Official Footer with Manufacturer Info & Social Contacts */}
      <Footer />

      {/* 11. Slide-over Cart Drawer with WhatsApp Checkout */}
      <CartDrawer />
    </main>
  );
}
