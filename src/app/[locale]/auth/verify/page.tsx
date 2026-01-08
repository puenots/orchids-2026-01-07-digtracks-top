"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function VerifyPage() {
  const t = useTranslations("Verify");
  const [value, setValue] = React.useState("");
  const [isResending, setIsResending] = React.useState(false);
  const router = useRouter();

  const handleComplete = (value: string) => {
    console.log("Verification code completed:", value);
    // Add verification logic here
  };

  const handleResend = async () => {
    setIsResending(true);
    // Add resend logic here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsResending(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center gap-8 bg-zinc-950/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
              alt="DIGTRACKS"
              width={140}
              height={40}
              className="object-contain cursor-pointer"
              onClick={() => router.push("/")}
              unoptimized
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-2xl font-bold tracking-tight text-white"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-sm font-light"
            >
              {t.rich("description", {
                br: () => <br />
              })}
            </motion.p>
          </div>

          {/* OTP Input */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={setValue}
              onComplete={handleComplete}
              className="text-white"
            >
              <InputOTPGroup className="gap-2 sm:gap-4">
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="w-10 h-12 sm:w-12 sm:h-16 text-xl sm:text-2xl bg-zinc-900 border-zinc-800 text-white rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="w-full space-y-4">
            <Button
              className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all"
              disabled={value.length !== 6}
              onClick={() => handleComplete(value)}
            >
              {t("submit")}
            </Button>
            
            <div className="flex flex-col gap-2">
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-sm text-zinc-500 hover:text-purple-400 transition-colors disabled:opacity-50"
              >
                {isResending ? t("resending") : t("resend")}
              </button>
              
              <button
                onClick={() => router.back()}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                {t("back")}
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-zinc-600 text-xs"
        >
          © 2024 DIGTRACKS. All rights reserved.
        </motion.div>
      </main>
    </div>
  );
}
