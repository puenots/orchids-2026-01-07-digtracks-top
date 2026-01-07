"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInImage } from "@/components/ui/fade-in-image";
import { cn } from "@/lib/utils";

const GENRES = [
  "HIP HOP",
  "R&B",
  "DANCE",
  "REGGAE",
  "LATIN",
  "INTERNATIONAL",
  "MAINSTREAM"
];

const RANKING_DATA: Record<string, Array<{
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key: string;
  artwork: string;
}>> = {
    "HIP HOP": [
      { id: "h1", title: "Rich Flex", artist: "Drake & 21 Savage", bpm: 154, key: "12A", artwork: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop" },
        { id: "h2", title: "Just Wanna Rock", artist: "Lil Uzi Vert", bpm: 150, key: "4A", artwork: "https://images.unsplash.com/photo-1514525253344-f8570094d81b?w=400&h=400&fit=crop" },
      { id: "h3", title: "Superhero", artist: "Metro Boomin", bpm: 117, key: "5A", artwork: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop" },
      { id: "h4", title: "Creepin'", artist: "Metro Boomin, The Weeknd & 21 Savage", bpm: 98, key: "1A", artwork: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop" },
      { id: "h5", title: "Shirt", artist: "SZA", bpm: 120, key: "8A", artwork: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
    ],
    "R&B": [
      { id: "r1", title: "Kill Bill", artist: "SZA", bpm: 89, key: "11A", artwork: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop" },
      { id: "r2", title: "Cuff It", artist: "Beyoncé", bpm: 115, key: "8A", artwork: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=400&h=400&fit=crop" },
        { id: "r3", title: "Under The Influence", artist: "Chris Brown", bpm: 116, key: "6A", artwork: "https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=400&h=400&fit=crop" },
        { id: "r4", title: "Snooze", artist: "SZA", bpm: 143, key: "2B", artwork: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop" },
        { id: "r5", title: "Wait For U", artist: "Future, Drake & Tems", bpm: 84, key: "1A", artwork: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=400&fit=crop" },
    ],
    "DANCE": [
      { id: "d1", title: "I'm Good (Blue)", artist: "David Guetta & Bebe Rexha", bpm: 128, key: "6A", artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop" },
        { id: "d2", title: "Unholy", artist: "Sam Smith & Kim Petras", bpm: 131, key: "9A", artwork: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop" },
        { id: "d3", title: "Forget Me", artist: "Lewis Capaldi", bpm: 126, key: "2A", artwork: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop" },
        { id: "d4", title: "B.O.T.A.", artist: "Eliza Rose", bpm: 137, key: "10A", artwork: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" },
      { id: "d5", title: "Deep Down", artist: "Alok, Ella Eyre & Kenny Dope", bpm: 124, key: "4B", artwork: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop" },
    ],
    "REGGAE": [
      { id: "re1", title: "Last Last", artist: "Burna Boy", bpm: 125, key: "4A", artwork: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop" },
      { id: "re2", title: "Calm Down", artist: "Rema", bpm: 107, key: "2A", artwork: "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?w=400&h=400&fit=crop" },
      { id: "re3", title: "Essence", artist: "Wizkid ft. Tems", bpm: 102, key: "11B", artwork: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=400&fit=crop" },
      { id: "re4", title: "Free Mind", artist: "Tems", bpm: 95, key: "10A", artwork: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=400&h=400&fit=crop" },
      { id: "re5", title: "Rush", artist: "Ayra Starr", bpm: 102, key: "8A", artwork: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop" },
    ],
    "LATIN": [
      { id: "l1", title: "Tití Me Preguntó", artist: "Bad Bunny", bpm: 111, key: "9A", artwork: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop" },
      { id: "l2", title: "Me Porto Bonito", artist: "Bad Bunny & Chencho Corleone", bpm: 92, key: "10A", artwork: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=400&fit=crop" },
      { id: "l3", title: "Bzrp Music Sessions, Vol. 52", artist: "Bizarrap & Quevedo", bpm: 128, key: "1B", artwork: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop" },
      { id: "l4", title: "Provenza", artist: "Karol G", bpm: 125, key: "5A", artwork: "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=400&h=400&fit=crop" },
      { id: "l5", title: "Despechá", artist: "Rosalía", bpm: 130, key: "12A", artwork: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop" },
    ],
    "INTERNATIONAL": [
      { id: "i1", title: "Ditto", artist: "NewJeans", bpm: 134, key: "8B", artwork: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=400&h=400&fit=crop" },
      { id: "i2", title: "OMG", artist: "NewJeans", bpm: 127, key: "10B", artwork: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop" },
      { id: "i3", title: "Anti-Hero", artist: "Taylor Swift", bpm: 97, key: "1B", artwork: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop" },
      { id: "i4", title: "Unholy", artist: "Sam Smith & Kim Petras", bpm: 131, key: "5A", artwork: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&h=400&fit=crop" },
      { id: "i5", title: "Star Walkin'", artist: "Lil Nas X", bpm: 142, key: "12A", artwork: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop" },
    ],
    "MAINSTREAM": [
      { id: "m1", title: "As It Was", artist: "Harry Styles", bpm: 174, key: "4A", artwork: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop" },
      { id: "m2", title: "Bad Habit", artist: "Steve Lacy", bpm: 169, key: "2A", artwork: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400&h=400&fit=crop" },
      { id: "m3", title: "About Damn Time", artist: "Lizzo", bpm: 109, key: "11B", artwork: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop" },
      { id: "m4", title: "Vegas", artist: "Doja Cat", bpm: 160, key: "10A", artwork: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop" },
      { id: "m5", title: "First Class", artist: "Jack Harlow", bpm: 107, key: "8A", artwork: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop" },
    ],
};

const CAMELOT_COLORS: Record<string, string> = {
  "1A": "#ADFFD6", "2A": "#ADFFAD", "3A": "#D7FFAE", "4A": "#FFFFAD",
  "5A": "#FFD6AD", "6A": "#FFADAE", "7A": "#FFADD7", "8A": "#FFADFF",
  "9A": "#D6ADFF", "10A": "#ADAEFF", "11A": "#ADD6FF", "12A": "#ADFFFF",
  "1B": "#5BFFAD", "2B": "#5CFF5D", "3B": "#AEFF5D", "4B": "#FAFB5B",
  "5B": "#FEAD5C", "6B": "#F35A5C", "7B": "#FF5CAC", "8B": "#FF5CFE",
  "9B": "#AD5CFF", "10B": "#5B5CFF", "11B": "#5DADFF", "12B": "#5BFFFF",
};

const AUTO_SWITCH_INTERVAL = 6000; // 6 seconds

export default function GenreRanking() {
  const t = useTranslations("Popular");
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentGenre = GENRES[currentGenreIndex];
  const tracks = RANKING_DATA[currentGenre] || [];

  const nextGenre = useCallback(() => {
    setCurrentGenreIndex((prev) => (prev + 1) % GENRES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);
      setProgress(newProgress);
      
      if (elapsed >= AUTO_SWITCH_INTERVAL) {
        nextGenre();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [nextGenre, currentGenreIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="popular" className="bg-black text-white pt-12 pb-4 md:pt-20 md:pb-8 relative overflow-hidden border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              {t("title")}
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {GENRES.map((genre, index) => (
                <motion.button
                  variants={itemVariants}
                  key={genre}
                  onClick={() => {
                    setCurrentGenreIndex(index);
                    setProgress(0);
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-white uppercase tracking-wider relative py-1",
                    index === currentGenreIndex ? "text-white" : "text-zinc-500"
                  )}
                >
                  {genre}
                  {index === currentGenreIndex && (
                      <motion.div
                        layoutId="activeGenreUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5e17eb]"
                        initial={false}
                      />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGenre}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
              >
                {tracks.map((track, index) => (
                  <motion.div
                    key={`${currentGenre}-${track.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-sm bg-zinc-900">
                      <span className="absolute top-2 left-2 z-10 flex items-center justify-center w-7 h-7 bg-black/80 backdrop-blur-md rounded-sm text-[10px] font-bold border border-white/10">
                        {index + 1}
                      </span>
                        <FadeInImage
                          src={track.artwork}
                          alt={track.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 20vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-1 px-1">
                        <h3 className="font-bold text-xs md:text-sm line-clamp-1 group-hover:text-white transition-colors tracking-tight">
                          {track.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-[9px] md:text-[10px] text-zinc-300 font-extrabold line-clamp-1">
                            {track.artist}
                          </p>
                          <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-mono tracking-tighter whitespace-nowrap">
                            <span className="text-zinc-500">{track.bpm}</span>
                            <span className="text-zinc-600">/</span>
                            <span 
                              style={{ color: CAMELOT_COLORS[track.key] || "#71717a" }} 
                              className="font-bold"
                            >
                              {track.key}
                            </span>
                          </div>
                        </div>
                      </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
      </div>

      {/* Progress Bar - Ultra thin 1px line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900/50">
        <motion.div 
          className="h-full bg-[#5e17eb]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </section>
  );
}
