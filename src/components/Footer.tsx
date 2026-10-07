"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const footerT = t.footer;

  return (
    <footer className="border-t border-border bg-bg-secondary/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} HIMANG.</span>
            <span>{footerT.rights}</span>
          </div>

          <motion.div
            className="flex items-center gap-1.5 text-xs text-text-tertiary"
            whileHover={{ scale: 1.05 }}
          >
            <span>{footerT.made_with}</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
            <span>{footerT.by} HIMANG</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
