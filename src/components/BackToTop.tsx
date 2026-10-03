"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";

export default function BackToTop() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass border border-border hover:border-accent/50 shadow-lg shadow-black/20 hover:shadow-accent/20 transition-all duration-300 group"
          aria-label={t.footer?.back_to_top || "Back to top"}
        >
          <ArrowUp className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />

          {/* Glow ring on hover */}
          <span className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
