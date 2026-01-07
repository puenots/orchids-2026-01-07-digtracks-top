'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface FinalCtaSectionProps {
  onSignupClick?: () => void;
}

const FinalCtaSection = ({ onSignupClick }: FinalCtaSectionProps) => {
  const t = useTranslations("FinalCta");

  return (
    <section
      className="relative w-full bg-cover bg-center py-24 md:py-32 lg:py-40"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/crowd_2x-25.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-[56px] font-bold uppercase leading-[1.1] tracking-tight md:text-[80px]"
        >
          {t("title")}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-lg text-xl font-normal md:text-2xl"
        >
          {t("subtitle")}
        </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={onSignupClick}
              className="mt-8 inline-block transform rounded-md bg-[#5e17eb] px-12 py-4 text-base font-bold uppercase text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-[#4d10c5] md:text-lg"
            >
              {t("button")}
            </button>
          </motion.div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
