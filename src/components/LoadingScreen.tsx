"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      onAnimationComplete={(definition: { opacity?: number }) => {
        if (definition.opacity === 0) {
          const el = document.getElementById("loading-screen");
          if (el) el.style.display = "none";
        }
      }}
      id="loading-screen"
      className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold gradient-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            HIMANG
          </motion.h1>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent via-purple-500 to-accent rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
