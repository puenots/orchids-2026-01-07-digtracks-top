import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Smartphone, Download, Zap, Music, Disc3, Headphones, Radio, AudioLines } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppsPage() {
    const t = useTranslations('Impact.mobileApp');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
              {/* Floating Music Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Music className="absolute top-[15%] right-[12%] w-16 h-16 text-primary/20 blur-[2px] animate-pulse" style={{ animationDuration: '4s' }} />
                <Disc3 className="absolute top-[25%] right-[25%] w-24 h-24 text-white/10 blur-[3px] animate-spin" style={{ animationDuration: '12s' }} />
                <Headphones className="absolute top-[45%] right-[8%] w-20 h-20 text-primary/15 blur-[2px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                <Radio className="absolute top-[60%] right-[20%] w-14 h-14 text-white/15 blur-[1px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
                <AudioLines className="absolute top-[35%] right-[5%] w-12 h-12 text-primary/25 blur-[1px] animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                <Music className="absolute top-[70%] right-[30%] w-10 h-10 text-white/10 blur-[2px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
                <Disc3 className="absolute top-[10%] right-[35%] w-8 h-8 text-primary/15 blur-[1px] animate-spin" style={{ animationDuration: '15s' }} />
              </div>

              <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7791b4c9-fd6f-4a5b-9047-d1e474a73773/iphone_dig-1767439431540.png?width=8000&height=8000&resize=contain"
              alt="Background"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="opacity-60 md:opacity-80 scale-[1.9] md:scale-[1.7] object-[10%_82%]"
            />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider uppercase text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Optimized</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              {t('title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground whitespace-pre-line leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {t('description')}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group">
                Download on App Store
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold bg-white/5 hover:bg-white/10 border-white/10 group">
                Get it on Google Play
                <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <div className="space-y-1">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">User Rating</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Downloads</div>
              </div>
              <div className="hidden md:block space-y-1">
                <div className="text-3xl font-bold">Free</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">For Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for the booth and the commute</h2>
            <p className="text-muted-foreground text-lg">
              Manage your library, preview tracks, and prep your sets without being tied to your laptop.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote Download",
                description: "Add tracks to your download queue from anywhere. They'll be waiting on your laptop when you get home.",
                icon: Download
              },
              {
                title: "Smart Preview",
                description: "Optimized waveforms and high-quality streaming let you hear exactly what you're digging.",
                icon: Smartphone
              },
              {
                title: "Offline Ready",
                description: "Save your favorite playlists offline for when you're traveling between gigs or at venues with bad reception.",
                icon: Zap
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
