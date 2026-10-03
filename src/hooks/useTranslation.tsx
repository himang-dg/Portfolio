"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import idLocale from "@/locales/id.json";
import enLocale from "@/locales/en.json";

type Locale = "id" | "en";
type Translations = typeof idLocale;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const locales: Record<Locale, Translations> = {
  id: idLocale,
  en: enLocale,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function detectLanguage(): Locale {
  if (typeof window === "undefined") return "en";

  // Check localStorage first
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "id" || saved === "en") return saved;

  // Auto-detect from browser
  const browserLang = navigator.language || "";
  if (browserLang.startsWith("id")) return "id";

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLanguage());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-lang", newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "id" ? "en" : "id");
  }, [locale, setLocale]);

  if (!mounted) {
    return <div className="min-h-screen bg-[#020617]" />;
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: locales[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
