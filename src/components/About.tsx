"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "@/data/personal";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  useEffect(() => {
    if (isInView) {
      const cleanup = animate();
      return cleanup;
    }
  }, [isInView, animate]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export default function About() {
  const { t, locale } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bioToUse = (t.about as any)?.bio || (locale === "en" && personalData.bio_en ? personalData.bio_en : personalData.bio);

  const stats = [
    {
      value: 10,
      suffix: "+",
      label: t.about.stats.projects,
    },
    {
      value: 15,
      suffix: "+",
      label: t.about.stats.skills,
    },
    {
      value: 2,
      suffix: "+",
      label: t.about.stats.experience,
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            {t.about.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {t.about.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-accent to-purple-500 p-1 shadow-xl shadow-accent/20">
                <div className="w-full h-full rounded-2xl bg-bg-secondary flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src={personalData.profilePicture} 
                    alt="Profile Picture"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/30 animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-purple-500/30 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="space-y-4">
              {bioToUse.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-text-secondary leading-relaxed text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-bg-secondary border border-border"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-text-tertiary mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
