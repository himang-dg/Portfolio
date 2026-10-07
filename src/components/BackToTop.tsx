"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function BackToTop() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass border border-border hover:border-accent/50 shadow-lg shadow-black/30 transition-all duration-200 active:scale-95 group"
          aria-label={t.footer?.back_to_top || "Back to top"}
        >
          <ArrowUp className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
