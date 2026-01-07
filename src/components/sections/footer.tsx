"use client";

import { useState, useEffect } from 'react';
import { FadeInImage } from '@/components/ui/fade-in-image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from "@/i18n/routing";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DIGTRACKSLogo = () => {
  return (
    <div className="flex items-center justify-center w-[180px] h-[51px] relative overflow-hidden">
      <FadeInImage
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=8000&height=8000&resize=contain"
        alt="DIGTRACKS"
        width={180}
        height={51}
        className="w-[180px] h-auto object-contain"
        style={{ height: "auto" }}
        showSkeleton={false}
      />
    </div>
  );
};

const FooterLink = ({ href, label, isExternal = false, onClick }: { href: string; label: string; isExternal?: boolean; onClick?: (e: React.MouseEvent) => void }) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isExternal) {
    return (
      <a 
        href={href} 
        className="relative text-white text-sm inline-block group hover:no-underline"
      >
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
    );
  }

  return (
    <Link 
      href={href as any} 
      onClick={handleClick}
      className="relative text-white text-sm inline-block group hover:no-underline"
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
  );
};

const Footer = () => {
  const t = useTranslations("Footer");
  const tCookie = useTranslations("CookiePolicy");
  const tPrivacy = useTranslations("PrivacyPolicy");
  const tTerms = useTranslations("TermsOfUse");
  const pathname = usePathname();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCookiePolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCookieModalOpen(true);
  };

  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setPrivacyModalOpen(true);
  };

  const handleTermsOfUseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTermsModalOpen(true);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

    const siteLinks = [
      { href: '/terms-of-use', label: t('terms') },
      { href: '/privacy-policy', label: t('privacy') },
      { href: '/cookie-policy', label: t('cookie') },
    ];

    const companyLinks = [
      { href: '/about', label: t('about') },
      { href: '/contact', label: t('contact') },
      { href: 'https://www.digtracks.com/faq', label: t('faq'), isExternal: true },
      { href: '/submit-music', label: t('submitMusic') },
    ];

  const languageLinks = [
    { href: '/en', label: t('english'), isExternal: true },
    { href: '/ja', label: t('japanese'), isExternal: true },
  ];

  return (
    <div className="bg-[#121212]">
      <motion.footer
        initial={{ opacity: 0, y: 50, height: 0 }}
        animate={mounted ? { opacity: 1, y: 0, height: "auto" } : { opacity: 0, y: 50, height: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.21, 0.47, 0.32, 0.98],
          opacity: { duration: 0.6 },
          y: { duration: 0.8 }
        }}
        className="text-muted-foreground overflow-hidden"
      >
        <div className="container pt-16 pb-12">
          <div className="flex flex-col items-center mb-12">
            <div className="mb-12">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link 
                      href="/" 
                      onClick={handleHomeClick}
                      className="inline-block shrink-0"
                    >
                      <DIGTRACKSLogo />
                    </Link>
                  </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>{t('scrollToTop')}</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="w-full max-w-3xl border-t-2 border-purple-600 mb-12"></div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3xl text-center">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-display">{t('site')}</h3>
                <ul className="space-y-3">
                  {siteLinks.map((link) => (
                    <li key={link.label}>
                        <FooterLink 
                          href={link.href} 
                          label={link.label} 
                          onClick={
                            link.href === '/cookie-policy' ? handleCookiePolicyClick : 
                            link.href === '/privacy-policy' ? handlePrivacyPolicyClick : 
                            link.href === '/terms-of-use' ? handleTermsOfUseClick :
                            undefined
                          }
                        />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-display">{t('company')}</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href} label={link.label} isExternal={'isExternal' in link && link.isExternal} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-display">{t('languages')}</h3>
                <ul className="space-y-3">
                  {languageLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href} label={link.label} isExternal={link.isExternal} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-center md:text-left">
              {t('newsletterMessage')}
            </p>
            <a
              href="#"
              className="bg-primary hover:bg-destructive text-white text-sm font-bold uppercase py-4 px-8 rounded-md transition-colors whitespace-nowrap"
            >
              {t('newsletterSignup')}
            </a>
          </div>
        </div>
      </motion.footer>

      <Dialog open={cookieModalOpen} onOpenChange={setCookieModalOpen}>
        <DialogContent className="bg-[#1a1a1a] border-gray-800 text-white sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0 gap-0 !flex !gap-0 !p-0">
          <div className="flex-none pt-10 flex flex-col items-center">
            <div className="mb-8 w-full flex justify-center -translate-x-[4px]">
              <DIGTRACKSLogo />
            </div>
            <DialogHeader className="w-full !flex-none !flex !flex-col !items-center !gap-0">
              <div className="w-fit flex flex-col items-center">
                <DialogTitle className="text-3xl font-bold text-white mb-4 text-center">
                  {t('cookie')}
                </DialogTitle>
                <div className="h-[2px] w-full bg-purple-600"></div>
              </div>
            </DialogHeader>
          </div>
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-10 py-8 space-y-8 text-base text-gray-300 pb-20 text-left">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section1Title')}</h3>
                <p className="leading-relaxed">{tCookie('section1Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section2Title')}</h3>
                <p className="mb-4 leading-relaxed">{tCookie('section2Intro')}</p>
                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <strong className="text-white text-lg">{tCookie('essentialCookies')}</strong>
                    <p className="text-gray-400">{tCookie('essentialCookiesDesc')}</p>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-white text-lg">{tCookie('functionalCookies')}</strong>
                    <p className="text-gray-400">{tCookie('functionalCookiesDesc')}</p>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-white text-lg">{tCookie('analyticsCookies')}</strong>
                    <p className="text-gray-400">{tCookie('analyticsCookiesDesc')}</p>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-white text-lg">{tCookie('advertisingCookies')}</strong>
                    <p className="text-gray-400">{tCookie('advertisingCookiesDesc')}</p>
                  </li>
                </ul>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section3Title')}</h3>
                <p className="mb-4 leading-relaxed">{tCookie('section3Intro')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>{tCookie('acceptAllCookies')}</li>
                  <li>{tCookie('notifyOnCookies')}</li>
                  <li>{tCookie('rejectAllCookies')}</li>
                </ul>
                <p className="mt-4 text-gray-400 italic">{tCookie('section3Note')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section4Title')}</h3>
                <p className="leading-relaxed">{tCookie('section4Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section5Title')}</h3>
                <p className="leading-relaxed">{tCookie('section5Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tCookie('section6Title')}</h3>
                <p className="leading-relaxed">{tCookie('section6Content')}</p>
              </section>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={privacyModalOpen} onOpenChange={setPrivacyModalOpen}>
        <DialogContent className="bg-[#1a1a1a] border-gray-800 text-white sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0 gap-0 !flex !gap-0 !p-0">
          <div className="flex-none pt-10 flex flex-col items-center">
            <div className="mb-8 w-full flex justify-center -translate-x-[4px]">
              <DIGTRACKSLogo />
            </div>
            <DialogHeader className="w-full !flex-none !flex !flex-col !items-center !gap-0">
              <div className="w-fit flex flex-col items-center">
                <DialogTitle className="text-3xl font-bold text-white mb-4 text-center">
                  {tPrivacy('title')}
                </DialogTitle>
                <div className="h-[2px] w-full bg-purple-600"></div>
              </div>
            </DialogHeader>
          </div>
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-10 py-8 space-y-8 text-base text-gray-300 pb-20 text-left">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section1Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section1Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section2Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section2Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section3Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section3Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section4Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section4Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section5Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section5Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section6Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section6Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section7Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section7Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section8Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section8Content')}</p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tPrivacy('section9Title')}</h3>
                <p className="leading-relaxed">{tPrivacy('section9Content')}</p>
              </section>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={termsModalOpen} onOpenChange={setTermsModalOpen}>
        <DialogContent className="bg-[#1a1a1a] border-gray-800 text-white sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0 gap-0 !flex !gap-0 !p-0">
          <div className="flex-none pt-10 flex flex-col items-center">
            <div className="mb-8 w-full flex justify-center -translate-x-[4px]">
              <DIGTRACKSLogo />
            </div>
            <DialogHeader className="w-full !flex-none !flex !flex-col !items-center !gap-0">
              <div className="w-fit flex flex-col items-center">
                <DialogTitle className="text-3xl font-bold text-white mb-4 text-center">
                  {tTerms('title')}
                </DialogTitle>
                <div className="h-[2px] w-full bg-purple-600"></div>
              </div>
            </DialogHeader>
          </div>
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-10 py-8 space-y-8 text-base text-gray-300 pb-20 text-left">
              <section>
                <p className="leading-relaxed">{tTerms('intro')}</p>
                <div className="mt-4 space-y-2">
                  <p className="leading-relaxed">{tTerms('intro1')}</p>
                  <p className="leading-relaxed">{tTerms('intro2')}</p>
                  <p className="leading-relaxed">{tTerms('intro3')}</p>
                  <p className="leading-relaxed">{tTerms('intro4')}</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">{tTerms('section1Title')}</h3>
                <p className="mb-4 leading-relaxed">{tTerms('section1Content')}</p>
                <ul className="space-y-2 ml-4">
                  {(tTerms.raw('section1Items') as string[]).map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed">{tTerms('section1Footer')}</p>
              </section>

              {Array.from({ length: 22 }, (_, i) => i + 2).map((num) => (
                <section key={num}>
                  <h3 className="text-xl font-semibold text-white mb-3">{tTerms(`section${num}Title`)}</h3>
                  <p className="leading-relaxed whitespace-pre-wrap">{tTerms(`section${num}Content`)}</p>
                </section>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Footer;
