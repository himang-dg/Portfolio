"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length > 0) {
        // Pick the entry closest to top of viewport
        const best = visible.reduce((prev, current) =>
          Math.abs(current.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)
            ? current
            : prev
        );
        if (best.target.id) {
          setActiveSection(best.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.2, 0.5],
    });

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navT = t.nav as Record<string, string>;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "glass border-x-0 border-t-0 border-border shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="gradient-text">HIMANG</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {navT[item.key]}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Language Switcher (Segmented Control) */}
              <div
                className="flex items-center p-0.5 rounded-full bg-bg-secondary/90 border border-border backdrop-blur-sm"
                role="group"
                aria-label="Language selector"
              >
                <button
                  type="button"
                  onClick={() => setLocale("id")}
                  className={`relative px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider font-semibold rounded-full transition-colors duration-200 ${
                    locale === "id"
                      ? "text-accent"
                      : "text-text-tertiary hover:text-text-primary"
                  }`}
                  aria-label="Bahasa Indonesia"
                  aria-pressed={locale === "id"}
                >
                  {locale === "id" && (
                    <motion.span
                      layoutId="navLangIndicator"
                      className="absolute inset-0 bg-accent/15 border border-accent/30 rounded-full"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">ID</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`relative px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider font-semibold rounded-full transition-colors duration-200 ${
                    locale === "en"
                      ? "text-accent"
                      : "text-text-tertiary hover:text-text-primary"
                  }`}
                  aria-label="English"
                  aria-pressed={locale === "en"}
                >
                  {locale === "en" && (
                    <motion.span
                      layoutId="navLangIndicator"
                      className="absolute inset-0 bg-accent/15 border border-accent/30 rounded-full"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">EN</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-text-primary block"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-text-primary block"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-text-primary block"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 glass z-50 md:hidden p-6"
            >
              <div className="flex flex-col gap-2 mt-16">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-accent/10 text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                    }`}
                  >
                    {navT[item.key]}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Language Switcher */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">Language</span>
                <div className="flex items-center p-0.5 rounded-full bg-bg-secondary border border-border">
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("id");
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-1 text-xs font-mono font-semibold rounded-full transition-colors ${
                      locale === "id"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : "text-text-tertiary hover:text-text-primary"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("en");
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-1 text-xs font-mono font-semibold rounded-full transition-colors ${
                      locale === "en"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : "text-text-tertiary hover:text-text-primary"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
