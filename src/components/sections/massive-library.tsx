'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FadeInImage } from '@/components/ui/fade-in-image';

const albumArts = [
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1460667262436-cf19894f4774?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1445375011782-2384686778a0?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=300&h=300&fit=crop',
];

export default function MassiveLibrary() {
  const t = useTranslations('MassiveLibrary');

  return (
    <section className="relative min-h-[500px] lg:min-h-[550px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8">
        {albumArts.map((src, i) => (
          <div key={i} className="relative aspect-square">
            <FadeInImage
              src={src}
              alt=""
              fill
              className="object-cover brightness-[0.4]"
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 16vw, 12.5vw"
            />
          </div>
        ))}
      </div>
  
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-[800px] px-6 py-12 text-center backdrop-blur-[2px] bg-black/10 rounded-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {t('description')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white font-bold tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-white/90 text-base sm:text-lg md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {t('throwbackSubheadline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/pricing"
              className="rounded-[6px] bg-[#5e17eb] px-9 py-4 font-display text-base font-bold uppercase tracking-wider text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-[#4d10c5]"
            >
              {t('cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
