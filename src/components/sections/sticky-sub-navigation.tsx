"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StickySubNavigationProps {
  isMobileMenuOpen?: boolean;
  onSignupClick?: () => void;
}

const StickySubNavigation = ({ isMobileMenuOpen, onSignupClick }: StickySubNavigationProps) => {
  const t = useTranslations("StickyNav");
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: t("features"), href: "#features" },
    { label: t("price"), href: "#pricing" },
    { label: t("genres"), href: "#genres" },
    { label: t("popular"), href: "#popular" },
    { label: t("faq"), href: "#faq" },
    { label: t("software"), href: "#integrations" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px 0px 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80; // Changed from 140 to match sticky menu height
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (isMobileMenuOpen) return null;

  return (
    <div className="sticky top-0 z-[11000] w-full pointer-events-none overflow-hidden h-[80px] flex items-center">
      <div className="container pointer-events-auto">
<div className="flex items-center justify-center gap-2 md:gap-8 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full px-3 md:px-6 py-2 w-full max-w-[900px] mx-auto shadow-2xl">
              <nav className="flex items-center space-x-2 md:space-x-6">
              {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                      className={cn(
                        "relative text-[10px] md:text-sm font-bold uppercase tracking-wider transition-colors hover:text-white group py-1 no-underline hover:no-underline",
                        activeSection === item.href.slice(1) ? "text-white" : "text-white/50"
                      )}
                  >
                    {item.label}
                    <span 
                      className={cn(
                        "absolute left-0 bottom-0 h-[1px] bg-purple-500 transition-all duration-300 ease-out",
                        activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
              ))}
            </nav>
            <Button 
              onClick={onSignupClick}
              className="bg-[#5e17eb] hover:bg-[#4c12bd] text-white font-black italic rounded-full px-3 md:px-8 h-9 md:h-11 text-[9px] md:text-xs tracking-tighter"
            >
              {t("cta")}
            </Button>
          </div>
      </div>
    </div>
  );
};

export default StickySubNavigation;
