"use client";

import { FadeInImage } from "@/components/ui/fade-in-image";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSignupClick?: () => void;
}

const HeroSection = ({ onSignupClick }: HeroSectionProps) => {
  const t = useTranslations("Hero");

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="signup"
      className="relative w-full text-white overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
            <FadeInImage
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/digHere-1766888370796.webp"
              alt="DJ hands on a turntable"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100vw"
              quality={100}
              className="opacity-20"
              priority
            />
          </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 container flex items-center justify-center min-h-[70dvh] lg:min-h-[600px] py-12 lg:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-6">
            <div 
              className="w-[60px] h-[60px] bg-[#5e17eb]"
              style={{
                maskImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DIGTRACKS-NEW-LOGO_square-1766839886728.png?width=8000&height=8000&resize=contain)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DIGTRACKS-NEW-LOGO_square-1766839886728.png?width=8000&height=8000&resize=contain)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
              aria-label="DIGTRACKS logo icon"
            />
            <span className="font-sans text-xl font-medium tracking-tight">
              {t("badge")}
            </span>
          </motion.div>
          <motion.div variants={itemVariants} className="font-sans font-semibold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mx-auto">
            <h1>
              {t.rich("title", {
                br: () => <br />
              })}
            </h1>
          </motion.div>
            <motion.div variants={itemVariants} className="mt-10">
              <Button 
                size="lg" 
                onClick={onSignupClick}
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-7 text-xl font-bold transition-transform hover:scale-105 active:scale-95"
              >
                無料でアカウントを作成
              </Button>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
