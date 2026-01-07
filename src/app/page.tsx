"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/registration-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-12"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
              alt="DIGTRACKS"
              width={180}
              height={51}
              className="object-contain"
              priority
              unoptimized
            />
          </motion.div>

          {/* Hero text */}
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            >
              BEAT THE <span className="text-purple-600">STANDARD</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
            >
              プロフェッショナルなDJ体験を、あなたの手に。今すぐコミュニティに参加しましょう。
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95"
            >
              今すぐダウンロード
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 border-zinc-800 bg-zinc-950/50 text-white font-bold rounded-full hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95"
            >
              無料でアカウントを作成
            </Button>

            <Button 
              variant="link"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 text-zinc-400 hover:text-white transition-colors"
            >
              今すぐ登録してダウンロード
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 text-zinc-600 text-sm"
        >
          © 2024 DIGTRACKS. All rights reserved.
        </motion.div>
      </main>

      {/* Registration Modal */}
      <RegistrationModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
}
