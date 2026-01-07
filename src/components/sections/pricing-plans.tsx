import React from 'react';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

interface PricingPlansProps {
  onSignupClick?: () => void;
}

const PricingPlans = ({ onSignupClick }: PricingPlansProps) => {
  const t = useTranslations('Pricing');
  const features = t.raw('features') as string[];

  return (
    <section id="pricing" className="bg-[#111111] py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center font-display text-4xl font-bold uppercase text-white lg:text-5xl">
          {t('title')}
        </h2>
        <div className="mx-auto max-w-md">
          <div className="group relative">
            {/* Glow Effect Background */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
            
            <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border-2 border-yellow-400 bg-gradient-to-b from-zinc-900 to-black p-10 text-center transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] shadow-[0_0_15px_rgba(250,204,21,0.1)]">
              <div className="w-full">
                {t('planName') && (
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-yellow-400">
                    {t('planName')}
                  </h3>
                )}
                
                <div className={`flex flex-col items-center justify-center ${t('planName') ? 'my-8' : 'mb-8'}`}>
                  <p className="font-display text-7xl font-bold text-white flex items-baseline justify-center">
                    <span className="text-2xl font-semibold text-zinc-400 mr-2">{t('prefix')}</span>
                    {t('price')}
                    <span className="text-3xl ml-1">{t('currency')}</span>
                  </p>
                </div>

                {/* Features List */}
                <ul className="mb-10 space-y-4 text-left">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start text-zinc-300">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={onSignupClick}
                    className="w-full rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.02] active:scale-95 shadow-[0_4px_15px_rgba(250,204,21,0.3)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.4)]"
                  >
                    {t('cta')}
                  </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
