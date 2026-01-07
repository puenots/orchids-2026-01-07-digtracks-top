"use client";

import Image from 'next/image';
import { Play, Download } from 'lucide-react';

interface FeaturedItem {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
}

const featuredData: FeaturedItem[] = [
  {
    id: 1,
    title: "Live at Tokyo Dome",
    genre: "LIVE SET",
    imageUrl: "https://www.djcity.jp/assets/images/featured-1.jpg",
  },
  {
    id: 2,
    title: "Neon Dreams",
    genre: "SYNTHWAVE",
    imageUrl: "https://www.djcity.jp/assets/images/featured-2.jpg",
  },
  {
    id: 3,
    title: "Urban Groove",
    genre: "HIP HOP",
    imageUrl: "https://www.djcity.jp/assets/images/featured-3.jpg",
  },
  {
    id: 4,
    title: "Summer Vibes",
    genre: "HOUSE",
    imageUrl: "https://www.djcity.jp/assets/images/featured-4.jpg",
  },
];

const FeaturedContent = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 min-[1440px]:max-w-[1440px]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-[2px] text-white">
            Featured
          </h2>
            <div className="mt-2 h-1 w-[60px] bg-[#5e17eb]"></div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredData.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-md transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="rounded-md"
                    />
                </div>

                <span className="absolute top-3 left-3 rounded-full bg-[#5e17eb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {item.genre}
              </span>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="truncate text-lg font-bold text-white">{item.title}</h3>
                <div className="mt-2 flex items-center space-x-3">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white/80 backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                    <Play className="h-4 w-4 fill-current pl-0.5" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white/80 backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;