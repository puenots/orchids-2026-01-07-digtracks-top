import Image from 'next/image';
import { FadeInImage } from '@/components/ui/fade-in-image';
import { Music, Disc, Headphones, Radio, Mic2, Activity } from 'lucide-react';

const MobileAppsShowcase = () => {
  return (
    <a href="/apps" className="block h-full rounded-lg overflow-hidden bg-black relative group">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8 px-6 py-10 sm:p-10 relative z-10">
        <div className="relative shrink-0">
          {/* Floating Icons Container */}
          <div className="absolute inset-0 -inset-x-20 -inset-y-10 pointer-events-none overflow-visible">
            <div className="opacity-0 animate-in fade-in duration-1000 fill-mode-forwards">
                <Music className="absolute top-[10%] left-[-10%] w-12 h-12 text-[#5e17eb]/20 blur-[1px] animate-float" />
                <Disc className="absolute top-[40%] right-[-15%] w-20 h-20 text-[#5e17eb]/10 blur-[2px] animate-spin-slow" />
                <Headphones className="absolute bottom-[10%] left-[-20%] w-16 h-16 text-[#5e17eb]/15 blur-[3px] animate-float" style={{ animationDelay: '1s' }} />
                <Radio className="absolute top-[60%] left-[-25%] w-14 h-14 text-[#5e17eb]/20 blur-[1.5px] animate-pulse" />
                <Mic2 className="absolute bottom-[20%] right-[-20%] w-12 h-12 text-[#5e17eb]/15 blur-[1px] animate-float" style={{ animationDelay: '2s' }} />
                <Activity className="absolute top-[20%] right-[-10%] w-10 h-10 text-[#5e17eb]/20 blur-[0.5px] animate-pulse" />
              </div>
          </div>

            <FadeInImage
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/marketing_phone_2x-8.png"
              alt="DIGTRACKS mobile app interface on an iPhone mockup"
              width={716}
              height={1444}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-auto h-80 sm:h-96 lg:h-[420px] object-contain relative z-10"
            />
        </div>
        <div className="flex-grow text-center lg:text-right lg:pr-4 relative z-10">
          <h2 className="font-display font-bold text-white text-[2.5rem] lg:text-[2.25rem] xl:text-[3rem] uppercase leading-none">
            Music at your fingertips
          </h2>
          <h3 className="font-display font-bold text-white text-[1.75rem] lg:text-[1.8rem] xl:text-[2.25rem] uppercase leading-none mt-2">
            Optimized digital apps
          </h3>
        </div>
      </div>
    </a>
  );
};

export default MobileAppsShowcase;