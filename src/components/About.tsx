"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "@/data/personal";
import { GraduationCap, MapPin, Award } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? target : 0);

  const animate = useCallback(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return () => {};
    }

    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), target);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, shouldReduceMotion]);

  useEffect(() => {
    if (isInView) {
      const cleanup = animate();
      return cleanup;
    }
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t, locale } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

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
        {/* Section Header without redundant eyebrow */}
        <div className="mb-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            {t.about.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Profile & Education Badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl glass border border-border space-y-6">
              <div className="relative aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-border bg-bg-secondary">
                <Image
                  src={personalData.profilePicture}
                  alt={personalData.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>

              {/* Verified Meta Details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/60 border border-border">
                  <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-text-primary">STMIK Widya Cipta Dharma</p>
                    <p className="text-text-tertiary">
                      {locale === "id" ? "Teknik Informatika (2020 - Sekarang)" : "Informatics Engineering (2020 - Present)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/60 border border-border">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-text-primary">Samarinda, Indonesia</p>
                    <p className="text-text-tertiary">{locale === "id" ? "Kalimantan Timur" : "East Kalimantan"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/60 border border-border">
                  <Award className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-text-primary">Web, Roblox & Visual Design</p>
                    <p className="text-text-tertiary">{locale === "id" ? "Kreator Multidisiplin" : "Multidisciplinary Creator"}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Quantitative Stats */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-8"
          >
            <div className="space-y-4">
              {bioToUse.map((paragraph: string, idx: number) => (
                <p
                  key={idx}
                  className="text-text-secondary leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Stats Matrix */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-4 sm:p-5 rounded-2xl glass border border-border text-center hover:border-accent/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-accent">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-tertiary mt-1.5 font-medium">
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
