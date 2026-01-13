"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import HeaderNavigation from "@/components/sections/header-navigation";
import StickySubNavigation from "@/components/sections/sticky-sub-navigation";
import HeroSection from "@/components/sections/hero-section";
import FeaturesCards from "@/components/sections/features-cards";
import Impact from "@/components/sections/impact";
import FinalCtaSection from "@/components/sections/final-cta";
import { RegistrationModal } from "@/components/registration-modal";
import { BackToTop } from "@/components/back-to-top";

const EveryGenreSection = dynamic(() => import("@/components/sections/every-genre"));
const GenreRanking = dynamic(() => import("@/components/sections/genre-ranking"));
const MassiveLibrary = dynamic(() => import("@/components/sections/massive-library"));
const PricingPlans = dynamic(() => import("@/components/sections/pricing-plans"));
const SoftwareLogos = dynamic(() => import("@/components/sections/software-logos"));
const FaqSection = dynamic(() => import("@/components/sections/faq-section"));
const LabelMarquee = dynamic(() => import("@/components/sections/label-marquee"));
const Footer = dynamic(() => import("@/components/sections/footer"));

export function LandingPageClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-black">
      <HeaderNavigation 
        onSignupClick={openModal} 
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuOpenChange={setIsMobileMenuOpen}
      />
      
        <main>
          <StickySubNavigation isMobileMenuOpen={isMobileMenuOpen} onSignupClick={openModal} />
          <HeroSection onSignupClick={openModal} />
        
        <FeaturesCards />
        
        <section className="bg-black py-8 md:py-12">
          <div className="container">
            <Impact />
          </div>
        </section>

        <EveryGenreSection />
        
        <GenreRanking />
        
        <SoftwareLogos />
        
        <MassiveLibrary />
        
        <PricingPlans onSignupClick={openModal} />
        
        <FaqSection />

        <LabelMarquee />

        <FinalCtaSection onSignupClick={openModal} />
      </main>
      
      <Footer />

      <BackToTop />

      <RegistrationModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
}
