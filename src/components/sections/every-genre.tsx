"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const genreColors: Record<string, string> = {
  "HIP HOP": "#EAB308",
  "R&B": "#A855F7",
  "EDM": "#06B6D4",
  "RAP": "#EF4444",
  "ROCK": "#F97316",
  "LATIN": "#EC4899",
  "POP": "#3B82F6",
  "COUNTRY": "#A3E635",
  "DANCE": "#22C55E",
  "HOUSE": "#8B5CF6",
  "TRAP": "#DC2626",
  "REGGAETON": "#F59E0B",
  "AFROBEATS": "#10B981",
  "70S": "#D97706",
  "80S": "#E879F9",
  "90S": "#38BDF8",
  "2000S": "#FB7185",
  "2010S": "#818CF8",
};

const EveryGenreSection = () => {
  const t = useTranslations("EveryGenre");
  
  const rawGenres = t.raw("genres");
  const genres = Array.isArray(rawGenres) ? rawGenres : [];
  
  if (genres.length === 0) return null;

  const row1 = genres.slice(0, Math.ceil(genres.length / 2));
  const row2 = genres.slice(Math.ceil(genres.length / 2));

  const GenreTag = ({ genre }: { genre: string }) => {
    const color = genreColors[genre] || "#ffffff";
    return (
      <motion.div
        style={{
          color: `${color}B3`,
          borderColor: `${color}4D`,
        }}
        whileHover={{ 
          scale: 1.05, 
          color: color,
          borderColor: color,
          backgroundColor: `${color}1A`,
          zIndex: 10
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        className="px-6 py-3 border rounded-full font-medium tracking-widest text-sm md:text-base cursor-default mx-2 transition-colors duration-300 whitespace-nowrap"
      >
        {genre}
      </motion.div>
    );
  };

  return (
    <section id="genres" className="bg-black py-12 md:py-16 overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white leading-none">
            {t("title")}
          </h2>
          <p className="mt-4 text-white/50 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>

      <div className="relative space-y-3 md:space-y-4">
        {/* Side Gradients for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <Marquee speed={25} gradient={false} pauseOnHover>
          <div className="flex py-1">
            {row1.map((genre) => <GenreTag key={genre} genre={genre} />)}
            {row1.map((genre) => <GenreTag key={`${genre}-2`} genre={genre} />)}
          </div>
        </Marquee>

        <Marquee speed={20} direction="right" gradient={false} pauseOnHover>
          <div className="flex py-1">
            {row2.map((genre) => <GenreTag key={genre} genre={genre} />)}
            {row2.map((genre) => <GenreTag key={`${genre}-2`} genre={genre} />)}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default EveryGenreSection;
