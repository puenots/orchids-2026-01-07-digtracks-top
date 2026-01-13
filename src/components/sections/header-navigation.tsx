"use client";

import { Search, ChevronDown, Menu as MenuIcon, X, Globe } from "lucide-react";
import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { FadeInImage } from "@/components/ui/fade-in-image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavItem = {
  label: string;
  dropdown: boolean;
  items?: { label: string; key: string }[];
  href?: string;
};

interface LanguageSwitcherProps {
  mobile?: boolean;
  openLang: boolean;
  setOpenLang: (open: boolean) => void;
  locale: string;
  pathname: string;
  handleEnter: (label: string, isLang: boolean) => void;
  handleLeave: () => void;
}

const LanguageSwitcher = ({
  mobile = false,
  openLang,
  setOpenLang,
  locale,
  pathname,
  handleEnter,
  handleLeave,
}: LanguageSwitcherProps) => (
  <DropdownMenu
    open={!mobile ? openLang : undefined}
    onOpenChange={!mobile ? setOpenLang : undefined}
    modal={false}
  >
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        onMouseEnter={!mobile ? () => handleEnter("", true) : undefined}
        onMouseLeave={!mobile ? () => handleLeave() : undefined}
        className={
          mobile
            ? "w-full justify-between border-border h-11 text-base border hover:text-[#5e17eb]"
            : "h-[38px] flex items-center px-2 text-sm font-medium text-white hover:bg-[#5e17eb] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
        }
      >
        <div className="flex items-center gap-2">
          {!mobile && <Globe className="h-4 w-4" />}
          <span>{locale.toUpperCase()}</span>
        </div>
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            openLang ? "rotate-180" : ""
          }`}
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align={mobile ? "center" : "end"}
      className={
        mobile
          ? "w-[calc(100vw-32px)] sm:w-[calc(var(--radix-popover-trigger-width))]"
          : ""
      }
      onMouseEnter={!mobile ? () => handleEnter("", true) : undefined}
      onMouseLeave={!mobile ? () => handleLeave() : undefined}
    >
      <DropdownMenuItem asChild className="focus:bg-[#5e17eb] focus:text-white">
        <Link
          href={pathname}
          locale="en"
          className="w-full cursor-pointer text-white hover:no-underline"
        >
          English (EN)
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="focus:bg-[#5e17eb] focus:text-white">
        <Link
          href={pathname}
          locale="ja"
          className="w-full cursor-pointer text-white hover:no-underline"
        >
          日本語 (JA)
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

interface DesktopNavProps {
  navItems: NavItem[];
  openMenu: string | null;
  setOpenMenu: (label: string | null) => void;
  openLang: boolean;
  setOpenLang: (open: boolean) => void;
  locale: string;
  pathname: string;
  handleEnter: (label: string, isLang?: boolean) => void;
  handleLeave: () => void;
  t: (key: string) => string;
  onSignupClick?: () => void;
}

const DesktopNav = ({
  navItems,
  openMenu,
  setOpenMenu,
  openLang,
  setOpenLang,
  locale,
  pathname,
  handleEnter,
  handleLeave,
  t,
  onSignupClick,
}: DesktopNavProps) => (
  <div className="hidden lg:flex items-center h-[80px] w-full max-w-[1920px] mx-auto px-6 xl:px-[75px]">
    <div className="flex items-center justify-between w-full gap-4 xl:gap-8">
      <Link
        href="/"
        className="block flex-shrink-0 w-[180px] h-[51px]"
        onMouseEnter={() => handleEnter("")}
      >
        <FadeInImage
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
          alt="DIGTRACKS"
          width={180}
          height={51}
          style={{ width: "180px", height: "51px", objectFit: "contain" }}
          priority
          unoptimized
          showSkeleton={false}
        />
      </Link>

      <nav className="flex-1 px-4">
        <ul className="flex items-center justify-center space-x-6 xl:space-x-12 translate-y-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => handleEnter(item.dropdown ? item.label : "")}
              onMouseLeave={() => handleLeave()}
              className="flex items-center"
            >
              {item.dropdown ? (
                <DropdownMenu
                  open={openMenu === item.label}
                  onOpenChange={(open) =>
                    setOpenMenu(open ? item.label : null)
                  }
                  modal={false}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="relative flex items-center bg-transparent p-0 border-none text-sm font-medium text-white focus-visible:outline-none group pb-1 h-7 hover:text-[#5e17eb] transition-colors">
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#5e17eb] transition-all group-hover:w-full" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-[180px]"
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={() => handleLeave()}
                  >
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.key}
                        className="cursor-pointer focus:bg-[#5e17eb] focus:text-white"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="relative flex items-center text-sm font-medium text-white group pb-1 h-7 hover:text-[#5e17eb] transition-colors"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#5e17eb] transition-all group-hover:w-full" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-4 flex-shrink-0">
        <div
          className="relative flex items-center w-[180px] xl:w-[220px]"
          onMouseEnter={() => handleEnter("")}
        >
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("search")}
            className="bg-input border-transparent focus:border-[#5e17eb] focus-visible:border-[#5e17eb] focus-visible:ring-[#5e17eb]/50 h-[38px] w-full rounded-md pl-9 pr-8 text-sm transition-colors"
          />
          <X className="absolute right-3 h-4 w-4 text-muted-foreground cursor-pointer" />
        </div>

        <LanguageSwitcher
          openLang={openLang}
          setOpenLang={setOpenLang}
          locale={locale}
          pathname={pathname}
          handleEnter={handleEnter}
          handleLeave={handleLeave}
        />

          <div onMouseEnter={() => handleEnter("")}>
            <Link href="/auth/signin">
              <Button
                variant="outline"
                className="h-[38px] rounded-md border-[#666] bg-transparent px-5 text-sm text-white hover:bg-[#5e17eb] hover:text-white hover:border-[#5e17eb]"
              >
                {t("login")}
              </Button>
            </Link>
          </div>

      </div>
    </div>
  </div>
);

interface MobileNavProps {
  navItems: NavItem[];
  locale: string;
  pathname: string;
  t: (key: string) => string;
  openLang: boolean;
  setOpenLang: (open: boolean) => void;
  handleEnter: (label: string, isLang: boolean) => void;
  handleLeave: () => void;
  onSignupClick?: () => void;
  isMobileMenuOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNav = ({
  navItems,
  locale,
  pathname,
  t,
  openLang,
  setOpenLang,
  handleEnter,
  handleLeave,
  onSignupClick,
  isMobileMenuOpen,
  onOpenChange,
}: MobileNavProps) => (
  <div className="lg:hidden flex items-center justify-between w-full h-[80px] px-6">
    <Link href="/" className="block flex-shrink-0 w-[180px] h-[51px]">
      <FadeInImage
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
        alt="DIGTRACKS"
        width={180}
        height={51}
        style={{ width: "180px", height: "51px", objectFit: "contain" }}
        priority
        unoptimized
        showSkeleton={false}
      />
    </Link>
    <Sheet open={isMobileMenuOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto w-auto p-0 hover:bg-transparent"
        >
          <MenuIcon
            className="h-[36px] w-[36px] size-[36px] text-white"
            strokeWidth={2.5}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-[#121212] border-none w-full p-0 flex flex-col sm:max-w-sm [&>button]:top-[22px] [&>button]:right-6"
      >
        <SheetHeader className="h-[80px] px-6 border-b border-white/10 flex flex-row items-center justify-between shrink-0 space-y-0">
          <SheetTitle className="text-left">
            <Link href="/" className="block w-[180px] h-[51px]" onClick={() => onOpenChange(false)}>
              <FadeInImage
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DigtracksLogo-1767058495526.png?width=360&height=102&resize=contain"
                alt="DIGTRACKS"
                width={180}
                height={51}
                style={{ width: "180px", height: "51px", objectFit: "contain" }}
                priority
                unoptimized
                showSkeleton={false}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="p-4 border-b border-border">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("search")}
              className="bg-input border-transparent focus:border-[#5e17eb] focus-visible:border-[#5e17eb] focus-visible:ring-[#5e17eb]/50 h-11 w-full rounded-md pl-9 text-sm transition-colors"
            />
          </div>
        </div>
        <nav className="flex-grow px-4 overflow-y-auto">
          <Accordion type="single" collapsible className="w-full text-white">
            {navItems.map((item) =>
              item.dropdown ? (
                <AccordionItem
                  key={item.label}
                  value={item.label.toLowerCase()}
                  className="border-b-border"
                >
                  <AccordionTrigger className="font-medium text-base hover:no-underline hover:text-[#5e17eb] transition-colors">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 pt-2">
                    <ul className="flex flex-col space-y-3 normal-case text-muted-foreground">
                      {item.items?.map((subItem) => (
                        <li key={subItem.key}>
                          <Link
                            href="#"
                            className="hover:text-[#5e17eb] transition-colors"
                            onClick={() => onOpenChange(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className="flex w-full items-center py-4 text-base font-medium border-b border-border hover:text-[#5e17eb] transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </Accordion>
        </nav>
        <div className="p-4 mt-auto border-t border-border space-y-4">
          <LanguageSwitcher
            mobile
            openLang={openLang}
            setOpenLang={setOpenLang}
            locale={locale}
            pathname={pathname}
            handleEnter={handleEnter}
            handleLeave={handleLeave}
          />
            <Link href="/auth/signin" onClick={() => onOpenChange(false)}>
              <Button
                variant="outline"
                className="w-full border-[#666] h-11 text-base hover:bg-[#5e17eb] hover:text-white hover:border-[#5e17eb]"
              >
                {t("login")}
              </Button>
            </Link>

        </div>
      </SheetContent>
    </Sheet>
  </div>
);

interface HeaderNavigationProps {
  onSignupClick?: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuOpenChange: (open: boolean) => void;
}

const HeaderNavigation = ({ 
  onSignupClick,
  isMobileMenuOpen,
  onMobileMenuOpenChange,
}: HeaderNavigationProps) => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [openLang, setOpenLang] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = (label: string, isLang = false) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isLang) {
      setOpenLang(true);
      setOpenMenu(null);
    } else {
      setOpenMenu(label);
      setOpenLang(false);
    }
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenLang(false);
    }, 150);
  };

  const navItems = [
    {
      label: t("nav.music"),
      dropdown: true,
      items: [
        { label: t("nav.allMusic"), key: "allMusic" },
        { label: t("nav.charts"), key: "charts" },
        { label: t("nav.playlists"), key: "playlists" },
      ],
    },
    {
      label: t("nav.more"),
      dropdown: true,
      items: [
        { label: t("nav.exclusives"), key: "exclusives" },
        { label: t("nav.djEdits"), key: "djEdits" },
        { label: t("nav.genres"), key: "genres" },
        { label: t("nav.integrations"), key: "integrations" },
        { label: t("nav.about"), key: "about" },
        { label: t("nav.support"), key: "support" },
      ],
    },
    {
      label: t("nav.news"),
      href: "/news",
      dropdown: false,
    },
  ];

  return (
    <header
      className={`relative z-[12000] bg-[#121212] h-[80px] overflow-visible transition-opacity duration-500 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <DesktopNav
        navItems={navItems}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openLang={openLang}
        setOpenLang={setOpenLang}
        locale={locale}
        pathname={pathname}
        handleEnter={handleEnter}
        handleLeave={handleLeave}
        t={t}
        onSignupClick={onSignupClick}
      />
      <MobileNav
        navItems={navItems}
        locale={locale}
        pathname={pathname}
        t={t}
        openLang={openLang}
        setOpenLang={setOpenLang}
        handleEnter={handleEnter}
        handleLeave={handleLeave}
        onSignupClick={onSignupClick}
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenChange={onMobileMenuOpenChange}
      />
    </header>
  );
};

export default HeaderNavigation;
