"use client";

import * as React from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MIN_PASSWORD_LENGTH = 8;

export function RegistrationModal({ open, onOpenChange }: RegistrationModalProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Hero.form");
  const isJa = locale === "ja";

  const validatePassword = (value: string) => {
    if (value.length > 0 && value.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(t("passwordMinLengthError"));
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = (value: string, passwordValue: string) => {
    if (value.length > 0 && value !== passwordValue) {
      setConfirmPasswordError(t("passwordMismatchError"));
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    if (confirmPassword) {
      validateConfirmPassword(confirmPassword, value);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value, password);
  };

  const isFormValid = () => {
    return (
      password.length >= MIN_PASSWORD_LENGTH &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password length
    if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(t("passwordMinLengthError"));
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setConfirmPasswordError(t("passwordMismatchError"));
      return;
    }

    router.push("/auth/verify");
  };

  const NameFields = () => {
    const firstNameField = (
      <div className="grid gap-2">
        <Label htmlFor="firstName" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {t("firstName")}
        </Label>
        <Input 
          id="firstName"
          placeholder={t("firstNamePlaceholder")}
          className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600"
        />
      </div>
    );

    const lastNameField = (
      <div className="grid gap-2">
        <Label htmlFor="lastName" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {t("lastName")}
        </Label>
        <Input 
          id="lastName"
          placeholder={t("lastNamePlaceholder")}
          className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600"
        />
      </div>
    );

    return (
      <div className="grid grid-cols-2 gap-4">
        {isJa ? (
          <>
            {lastNameField}
            {firstNameField}
          </>
        ) : (
          <>
            {firstNameField}
            {lastNameField}
          </>
        )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-zinc-950 text-zinc-100 border-zinc-800 p-0 max-h-[95vh] overflow-y-auto">
        <div className="relative p-6 sm:p-8">
          <DialogHeader className="flex flex-col items-center gap-6 mb-8 text-center">
            <div className="flex justify-center w-full">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain" 
                alt="DIGTRACKS" 
                width={180} 
                height={51} 
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            
            <div className="space-y-2 text-center">
              <DialogTitle className="text-2xl font-bold tracking-tight text-white">
                {t("title")}
              </DialogTitle>
              <p className="text-zinc-400 text-sm">{t("subtitle")}</p>
            </div>
          </DialogHeader>

            <form className="grid gap-5" onSubmit={handleSubmit}>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t("email")}
              </Label>
              <Input 
                id="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600"
              />
            </div>

            <NameFields />

            <div className="grid gap-2">
              <Label htmlFor="djName" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t("djName")}
              </Label>
              <Input 
                id="djName"
                placeholder={t("djNamePlaceholder")}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-purple-600 focus:border-purple-600"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t("password")}
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("passwordPlaceholder")}
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={MIN_PASSWORD_LENGTH}
                  className={`bg-zinc-900 border-zinc-800 text-white focus:ring-purple-600 focus:border-purple-600 pr-10 ${passwordError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t("confirmPassword")}
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("confirmPasswordPlaceholder")}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`bg-zinc-900 border-zinc-800 text-white focus:ring-purple-600 focus:border-purple-600 pr-10 ${confirmPasswordError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPasswordError && (
                <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>
              )}
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox 
                id="terms" 
                className="mt-1 border-zinc-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <Label 
                htmlFor="terms" 
                className="text-[11px] leading-relaxed text-zinc-400 font-normal cursor-pointer"
              >
                {t("terms")}
              </Label>
            </div>

            <Button
              type="submit"
              className={`w-full text-white h-12 font-bold text-base mt-2 transition-all ${
                !isFormValid()
                  ? "bg-zinc-600 cursor-not-allowed"
                  : "bg-zinc-800 hover:bg-purple-600"
              }`}
              disabled={!isFormValid()}
            >
              {t("submit")}
            </Button>
            
            <div className="text-center pt-2">
              <p className="text-sm text-zinc-500">
                {t("loginPrompt")}{" "}
                <button type="button" className="text-purple-500 hover:text-purple-400 font-medium transition-colors">
                  {t("loginButton")}
                </button>
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
