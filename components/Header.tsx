"use client";

import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// Uvozimo next-intl kuke
import { useLocale, useTranslations } from "next-intl";
// Ove uvoze ćemo definisati u i18n/routing.ts fajlu
import { Link, useRouter, usePathname } from "@/i18n/routing";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Kuke za prevode i lokalizaciju
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "sr" ? "en" : "sr";
    // router.replace održava istu stranicu ali menja jezik u URL-u
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/10 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        <Link
          href="/"
          className="font-bold text-lg md:text-xl bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Dušan Štrbac
        </Link>

        <nav className="flex items-center gap-4 md:gap-8">
          {/* Linkovi koriste t() funkciju za prevod */}
          <div className="hidden sm:flex items-center gap-6 text-neutral-900 dark:text-neutral-100 font-medium text-sm md:text-base">
            <Link href="/" className="hover:text-indigo-500 transition-colors">
              {t("home")}
            </Link>
            <Link href="/projects" className="hover:text-indigo-500 transition-colors">
              {t("projects")}
            </Link>
            <Link href="/contact" className="hover:text-indigo-500 transition-colors">
              {t("contact")}
            </Link>
          </div>

          <div className="flex items-center gap-2 border-l border-neutral-200 dark:border-white/10 pl-4 md:pl-8">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:ring-2 ring-indigo-500/50 transition-all text-[11px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300"
              aria-label="Change Language"
            >
              <Languages size={14} className="text-indigo-500" />
              <span>{locale}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:ring-2 ring-indigo-500/50 transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-4.5 h-4.5" />
              ) : resolvedTheme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-indigo-600" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}