"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeInImage } from "@/components/ui/fade-in-image";

const HeroBanner = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[350px] md:min-h-[500px] overflow-hidden bg-black">
      {/* Parallax Background Image Container */}
      <div
        className="absolute top-[-100px] bottom-[-100px] left-0 right-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
          {/* Mobile Image */}
          <div className="md:hidden w-full h-full relative">
            <FadeInImage
              src="https://www.djcity.jp/assets/images/hero-banner-mobile.jpg"
              alt="Promotional banner showing a DJ at a concert"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block w-full h-full relative">
            <FadeInImage
              src="https://www.djcity.jp/assets/images/hero-banner.jpg"
              alt="Promotional banner showing a DJ at a concert"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center min-h-[350px] md:min-h-[500px]">
        <div className="container">
          <div className="max-w-xl text-left">
            <h1 className="text-white font-bold text-[32px] md:text-[48px] leading-[1.2]">
              UNLIMITED MUSIC FOR DJS
            </h1>
            <p className="mt-4 text-[#cccccc] text-lg">
              Access an unlimited catalog of music from major and independent labels.
            </p>
              <a
                href="#"
                className="inline-block mt-8 bg-[#5e17eb] text-white font-semibold py-4 px-12 rounded-sm text-base tracking-[0.02em] hover:bg-[#4d10c5] transition-colors duration-300"
              >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;