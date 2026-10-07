"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { personalData } from "@/data/personal";
import { ArrowRight, Download, Code2, Terminal } from "lucide-react";

export default function Hero() {
  const { t, locale } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roles = (t.hero as any)?.roles || (locale === "id" ? personalData.roles_id : personalData.roles);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length, shouldReduceMotion]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline and Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono font-medium text-accent">
                {locale === "id" ? "Terbuka untuk Kolaborasi & Proyek" : "Available for Projects & Freelance"}
              </span>
            </motion.div>

            {/* Natural Greeting */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-text-secondary font-medium mb-1.5"
            >
              {t.hero.greeting}
            </motion.p>

            {/* Unified Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-text-primary"
            >
              Benidiktus <span className="gradient-text">Himang</span>
            </motion.h1>

            {/* Role Switcher */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
              className="h-10 flex items-center mb-5 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-accent"
                >
                  <Code2 className="w-5 h-5 text-accent/80" />
                  <span>{roles[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Concise Value-prop Description */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              {t.hero.description}
            </motion.p>

            {/* Call to Actions with tactile physics */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => handleNavClick("#projects")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-soft text-slate-950 font-semibold text-sm rounded-xl shadow-lg shadow-accent/25"
              >
                <span>{t.hero.cta_projects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href={personalData.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg-secondary hover:bg-bg-tertiary border border-border hover:border-accent/40 text-text-primary font-medium text-sm rounded-xl shadow-sm"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>{t.hero.download_cv}</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Developer Config / Manifest Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md rounded-2xl glass p-5 sm:p-6 border border-border font-mono text-xs shadow-2xl relative overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border/80 text-text-tertiary">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-text-tertiary font-mono">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>himang.config.ts</span>
                </div>
                <span className="text-[10px] text-accent/80 font-mono">
                  TypeScript
                </span>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 text-text-secondary leading-relaxed">
                <p>
                  <span className="text-accent">export const</span>{" "}
                  <span className="text-text-primary">creator</span> = &#123;
                </p>
                <p className="pl-4">
                  handle: <span className="text-sky-300">&quot;HIMANG&quot;</span>,
                </p>
                <p className="pl-4">
                  fullName: <span className="text-sky-300">&quot;Benidiktus Himang&quot;</span>,
                </p>
                <p className="pl-4">
                  major: <span className="text-sky-300">&quot;Informatics Engineering&quot;</span>,
                </p>
                <p className="pl-4">
                  stack: [
                </p>
                <p className="pl-8 text-emerald-400">
                  &quot;Next.js&quot;, &quot;React&quot;, &quot;Tailwind&quot;, &quot;Roblox/Lua&quot;, &quot;Design&quot;
                </p>
                <p className="pl-4">
                  ],
                </p>
                <p className="pl-4">
                  status: <span className="text-accent">&quot;Ready to build &amp; collaborate&quot;</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-sky-300">&quot;Samarinda, ID&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between text-[11px] text-text-tertiary">
                <span className="font-mono text-accent">STMIK Widya Cipta Dharma</span>
                <span className="font-mono">Samarinda, ID</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
