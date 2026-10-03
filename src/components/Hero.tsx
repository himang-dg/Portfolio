"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { personalData } from "@/data/personal";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  const { t, locale } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roles = (t.hero as any)?.roles || (locale === "id" ? personalData.roles_id : personalData.roles);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <FloatingParticles />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-secondary/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-text-secondary">
            {t.hero.greeting}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">{t.hero.name}</span>
        </motion.h1>

        {/* Typing Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-10 sm:h-12 md:h-14 flex items-center justify-center mb-4 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-lg sm:text-xl md:text-2xl font-medium"
            >
              <span className="text-accent">{roles[roleIndex]}</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm sm:text-base text-text-tertiary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNavClick("#projects")}
            className="group relative px-8 py-3 bg-accent hover:bg-accent-soft text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10">{t.hero.cta_projects}</span>
          </button>
          <a
            href="/Las-Benidiktus Himang-CV.pdf"
            download
            className="px-8 py-3 border border-border hover:border-accent/50 text-text-primary text-sm font-medium rounded-xl transition-all duration-300 hover:bg-bg-secondary hover:-translate-y-0.5"
          >
            {t.hero.download_cv}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-tertiary">{t.hero.scroll_down}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
