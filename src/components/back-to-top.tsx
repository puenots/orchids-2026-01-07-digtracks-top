"use client";

import * as React from "react";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";

export function BackToTop() {
  const t = useTranslations("Footer");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#5e17eb] px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#4c12c0] focus:outline-none focus:ring-2 focus:ring-[#5e17eb] focus:ring-offset-2 focus:ring-offset-black"
          aria-label={t("scrollToTop")}
        >
          <ChevronUp className="h-4 w-4" />
          <span>{t("scrollToTop")}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
