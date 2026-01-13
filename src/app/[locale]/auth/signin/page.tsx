"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignInPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Auth.signin");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add sign in logic here
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
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
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/6 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <main className="relative z-10 w-full max-w-md px-6 flex flex-col items-center py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <Link href={`/${locale}`}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
                alt="DIGTRACKS"
                width={180}
                height={51}
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                priority
                unoptimized
              />
            </Link>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-zinc-950/60 p-8 sm:p-10 rounded-3xl border border-zinc-800/80 backdrop-blur-md shadow-2xl shadow-purple-900/10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
              >
                {t("title")}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-zinc-400 text-sm"
              >
                {t("subtitle")}
              </motion.p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                >
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="h-12 bg-zinc-900/80 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600 rounded-xl transition-all"
                  required
                />
              </motion.div>

              {/* Password field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                >
                  {t("password")}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("passwordPlaceholder")}
                    className="h-12 bg-zinc-900/80 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600 rounded-xl pr-12 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              {/* Remember me and forgot password */}
              <motion.div variants={itemVariants} className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="border-zinc-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-zinc-400 font-normal cursor-pointer"
                  >
                    {t("rememberMe")}
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm text-purple-500 hover:text-purple-400 transition-colors"
                >
                  {t("forgotPassword")}
                </button>
              </motion.div>

              {/* Submit button */}
              <motion.div variants={itemVariants} className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-purple-600 hover:bg-purple-500 text-white font-bold text-base rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/25 hover:shadow-purple-500/30"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t("signingIn")}</span>
                    </div>
                  ) : (
                    t("submit")
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div variants={itemVariants} className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800" />
              </div>
            </motion.div>

            {/* Sign up prompt */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-sm text-zinc-500">
                {t("signupPrompt")}{" "}
                <Link
                  href={`/${locale}`}
                  className="text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                  {t("signupButton")}
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center text-zinc-600 text-xs"
          >
            © 2026 DIGTRACKS. All rights reserved.
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
