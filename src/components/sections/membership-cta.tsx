import React from 'react';
import Image from 'next/image';

const MembershipCtaSection = () => {
  const features = [
    'Unlimited downloads',
    'Exclusive content',
    'Early access',
    'Mobile app',
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#5e17eb] to-[#450cb0] py-[60px] md:py-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <Image
          src="https://www.djcity.jp/assets/images/pattern-overlay.png"
          alt="Geometric pattern overlay"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      <div className="relative container mx-auto px-6 max-w-[1000px] text-center flex flex-col items-center">
        <h2 className="font-black text-[32px] md:text-[42px] leading-tight tracking-tight">
          BECOME A MEMBER
        </h2>
        
        <p className="mt-4 max-w-[680px] text-lg font-normal text-white/80 leading-[1.6]">
          Join djcity to get unlimited access to our record pool with the latest tracks, remixes, and exclusive content. Download everything you need for your DJ sets.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-full max-w-xl">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="https://www.djcity.jp/assets/icons/checkmark.svg"
                alt="Checkmark icon"
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <span className="text-base font-normal">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold tracking-[0.02em] py-[18px] px-14 rounded-[50px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
          >
            START FREE TRIAL
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipCtaSection;