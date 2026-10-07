"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(true);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.6, ease: "easeInOut" }}
          onAnimationComplete={() => setMounted(false)}
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-bold font-mono tracking-tight"
            >
              <span className="gradient-text">HIMANG</span>
            </motion.div>

            <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
