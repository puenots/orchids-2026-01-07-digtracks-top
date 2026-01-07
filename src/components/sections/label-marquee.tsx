"use client";

import { useRef, useEffect, useState } from 'react';
import { FadeInImage } from '@/components/ui/fade-in-image';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useSpring,
  wrap
} from 'framer-motion';

const labelLogos = [
  { name: "Strictly Rhythm", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/Frame-15663-1767407992137.png?width=400&resize=contain" },
  { name: "FFRR", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/ffrr-1767407992156.png?width=400&resize=contain" },
  { name: "Musical Freedom", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/Frame-15665-1767407992136.png?width=400&resize=contain" },
  { name: "Dim Mak", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/dim-mak-1767407992147.png?width=400&resize=contain" },
  { name: "Tactical Records", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/Frame-15664-1-1767407992149.png?width=400&resize=contain" },
  { name: "Hi-Bias", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/hi-bias-1767407992186.png?width=400&resize=contain" },
  { name: "Ultra Records", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/ultra-records-1767407992261.png?width=400&resize=contain" },
  { name: "Universal Music", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/universal-1767407992160.png?width=400&resize=contain" },
  { name: "Defected", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/defected-1767490655796.png?width=400&resize=contain" },
  { name: "Warner Music Group", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/warner-1767490655734.png?width=400&resize=contain" },
  { name: "Armada", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/armada-1767490655905.png?width=400&resize=contain" },
  { name: "Atlantic", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/atlantic-1767490655736.png?width=400&resize=contain" },
  { name: "Republic Records", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/republic-records-1767490655740.png?width=400&resize=contain" },
  { name: "Spinnin' Records", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/spinnin-records-1767490655742.png?width=400&resize=contain" },
  { name: "Def Jam Recordings", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/def-jam-1767490655747.png?width=400&resize=contain" },
  { name: "Mad Decent", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/mad-decent-1767490655748.png?width=400&resize=contain" },
  { name: "Big Beat", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/big-beat-1767490655750.png?width=400&resize=contain" },
  { name: "Toolroom", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fa0ef551-c7a1-4a13-9e51-a851e242c718/toolroom-1767490655752.png?width=400&resize=contain" },
];

export default function LabelMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  
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

  useAnimationFrame((t, delta) => {
    const v = smoothVelocity.get();
    const baseMove = -1.2 * (delta / 16);
    const flickMove = (v / 60) * 1.5;
    baseX.set(baseX.get() + baseMove + flickMove);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth / 2);
      }
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);
    updateWidth();

    // Re-check after a short delay
    const timeoutId = setTimeout(updateWidth, 500);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="bg-[#111111] py-16 overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

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
          <div ref={containerRef} className="flex flex-nowrap">
            {[...labelLogos, ...labelLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-4 flex-shrink-0"
              >
                  <div className="flex items-center justify-center h-32 w-56 bg-[#1A1A1A] rounded-lg p-6 transition-all duration-300 group overflow-hidden">
                    <FadeInImage
                      src={logo.src}
                      alt={logo.name}
                      width={224}
                      height={128}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                      showSkeleton={false}
                    />
                  </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
