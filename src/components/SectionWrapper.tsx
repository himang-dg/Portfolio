"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : isInView
          ? { opacity: 1 }
          : { opacity: 0 }
      }
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
