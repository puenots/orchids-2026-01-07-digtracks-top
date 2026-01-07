'use client';

import { FadeInImage } from '@/components/ui/fade-in-image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Impact = () => {
  const t = useTranslations('Impact');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Card 1: Downloads are Forever */}
        <Link
          href="/home"
          className="block relative aspect-video lg:aspect-[1.3/1] w-full overflow-hidden rounded-lg group bg-card"
        >
          <FadeInImage
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4a30213-a637-46c0-b6d5-4cb7669fabe2/ChatGPT-Image-2026-1-5-15_35_25-1-1767595169114.webp?width=8000&height=8000&resize=contain"
            alt="Vintage Walkman and cassette tapes background"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="z-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-4"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 via-40% to-black/30" />
              <div className="relative z-20 flex flex-col justify-center h-full p-6 lg:p-12 w-full text-white transition-transform duration-500 ease-out group-hover:-translate-y-4">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-2xl lg:text-4xl font-bold uppercase leading-tight text-white transition-colors duration-500 ease-out tracking-tight"
                >
                  {t('edits.title')}
                </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 lg:mt-6 text-base lg:text-lg text-white/80 max-w-[320px] lg:max-w-[440px] transition-all duration-500 ease-out group-hover:text-white whitespace-pre-line leading-relaxed"
              >
                {t('edits.description')}
              </motion.p>
            </div>
        </Link>

        {/* Card 2: Mobile App */}
        <Link
          href="/apps"
          className="block relative aspect-video lg:aspect-[1.3/1] w-full overflow-hidden rounded-lg group bg-card"
        >
          <FadeInImage
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/iphone_dig-1767439431540.png?width=8000&height=8000&resize=contain"
            alt="Mobile App Mockup"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="z-0 transition-transform duration-500 ease-out group-hover:scale-[1.35] group-hover:-translate-y-4 object-[35%_top] lg:object-[35%_75%] scale-[1.3] lg:scale-125"
          />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-purple-600/15 via-40% to-transparent" />

                  <div className="relative z-20 flex flex-col justify-center h-full p-6 lg:p-12 w-full text-white transition-transform duration-500 ease-out group-hover:-translate-y-4">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="font-display text-2xl lg:text-4xl font-bold uppercase leading-tight text-white transition-colors duration-500 ease-out tracking-tight"
                    >
                      {t('mobileApp.title')}
                    </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 lg:mt-6 text-base lg:text-lg text-white/80 max-w-[280px] lg:max-w-[320px] whitespace-pre-line transition-all duration-500 ease-out group-hover:text-white leading-relaxed"
                  >
                  {t('mobileApp.description')}
                </motion.p>
            </div>
        </Link>
    </div>
  );
};

export default Impact;
