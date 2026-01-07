'use client';

import { FadeInImage } from '@/components/ui/fade-in-image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresData = [
    {
      key: 'introEdits',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/FeaturesCards1-1767060678993.png?width=8000&height=8000&resize=contain',
      href: '/home',
    },
    {
      key: 'card2',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/FeaturesCards3-1767071230487.png?width=8000&height=8000&resize=contain',
      href: '/exclusives',
    },
    {
      key: 'card3',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Stems-Play3-1767071323493.png?width=8000&height=8000&resize=contain',
      href: '/playlists',
    },
    {
      key: 'downloadsForLife',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/FeaturesCards1-1767060678993.png?width=8000&height=8000&resize=contain',
      href: '/home',
    },
];

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const FeatureCard = ({ title, description, imageUrl, href }: FeatureCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1"
    >
        <div className="aspect-[4/3] md:aspect-[1.3/1] w-full relative overflow-hidden">
          <FadeInImage
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
        
          {/* Play Icon - Absolutely positioned to stay aligned across cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10"
          >
            <span className="flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#5e17eb] text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current ml-0.5" />
            </span>
          </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-4 pb-3 md:p-8 md:pb-5 text-white">
            <div className="flex flex-col min-h-[70px] sm:min-h-[85px] md:min-h-[115px] justify-start">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display text-base sm:text-lg md:text-2xl font-black uppercase text-white tracking-tight leading-tight"
                  >
                    {title}
                  </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-2 md:mt-4 text-[10px] sm:text-xs md:text-sm leading-relaxed text-white/90 line-clamp-2 md:line-clamp-3 whitespace-pre-line"
                >
                  {description}
                </motion.p>
            </div>
        </div>
      </div>
    </Link>
  );
};

const FeaturesCards = () => {
  const t = useTranslations('Features');

    return (
      <section id="features" className="bg-[#101010] py-8 md:py-12">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.key}
              title={t(`${feature.key}.title`)}
              description={t(`${feature.key}.description`)}
              imageUrl={feature.imageUrl}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
