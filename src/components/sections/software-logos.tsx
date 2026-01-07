"use client";

import * as React from 'react';
import { FadeInImage } from '@/components/ui/fade-in-image';
import { useTranslations } from 'next-intl';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useSpring,
  wrap
} from 'framer-motion';

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/serato_logo-9.png",
    alt: "Serato",
    width: 154,
    height: 39,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/rekordbox_logo-10.png",
    alt: "Rekordbox",
    width: 220,
    height: 28,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/traktor_logo-12-1767585552030.png?width=400&resize=contain",
    alt: "Traktor",
    width: 209,
    height: 48,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/virtualdj_logo-12.png",
    alt: "VirtualDJ",
    width: 220,
    height: 30,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/djay_logo-13.png",
    alt: "DJAY",
    width: 121,
    height: 53,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4a30213-a637-46c0-b6d5-4cb7669fabe2/pioneerdj_logo-1767592262967.png?width=400&resize=contain",
    alt: "Pioneer DJ",
    width: 220,
    height: 32,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4a30213-a637-46c0-b6d5-4cb7669fabe2/algoriddim-1-1767592262973.png?width=400&resize=contain",
    alt: "Algoriddim",
    width: 200,
    height: 32,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4a30213-a637-46c0-b6d5-4cb7669fabe2/denon_dj-1767592262981.png?width=400&resize=contain",
    alt: "Denon DJ",
    width: 200,
    height: 16,
  }
];

const SoftwareLogos = () => {
  const t = useTranslations('SoftwareLogos');
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);

  const baseX = useMotionValue(0);
  const scrollVelocity = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return 0;
    return wrap(-contentWidth, 0, v);
  });

  useAnimationFrame((time, delta) => {
    const v = smoothVelocity.get();
    const baseMove = -0.8 * (delta / 16);
    const flickMove = (v / 60) * 1.5;
    baseX.set(baseX.get() + baseMove + flickMove);
  });

  const updateWidth = React.useCallback(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);
    updateWidth();

    const timeoutId = setTimeout(updateWidth, 1000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [updateWidth]);

  return (
    <section id="integrations" className="bg-black py-20 lg:py-24 overflow-hidden select-none">
      <div className="container mx-auto px-6 md:px-10 lg:px-[60px]">
        <motion.div 
          className="text-center max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4 transition-colors">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('description')}
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <motion.div
              className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={(e, info) => {
                baseX.set(baseX.get() + info.delta.x);
                scrollVelocity.set(info.velocity.x);
              }}
              onDragEnd={() => {
                scrollVelocity.set(0);
              }}
            >
              <div ref={containerRef} className="flex flex-nowrap py-4">
                {[...logos, ...logos].map((logo, index) => (
                  <div key={`${logo.alt}-${index}`} className="mx-12 lg:mx-20 flex items-center justify-center flex-shrink-0">
                      <FadeInImage
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        showBlur={false}
                        showSkeleton={false}
                        priority={index < logos.length}
                        onLoad={updateWidth}
                        style={{ height: logo.alt === 'Denon DJ' ? '16px' : '32px', width: 'auto' }}
                        className="brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300 object-contain pointer-events-none"
                      />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLogos;
