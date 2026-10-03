"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const { t, locale, toggleLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-border hover:border-border-hover bg-bg-secondary hover:bg-bg-tertiary transition-all duration-200"
                aria-label="Toggle language"
              >
                <span>{locale === "id" ? "🇮🇩" : "🇬🇧"}</span>
                <span className="uppercase">{locale}</span>
              </button>

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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
