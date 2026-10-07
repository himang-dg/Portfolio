"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { Code, Gamepad2, Palette, Video, CheckCircle2 } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const servicesT = t.services as any;

  const services = [
    {
      key: "web_dev",
      icon: Code,
      data: servicesT.web_dev,
    },
    {
      key: "roblox_dev",
      icon: Gamepad2,
      data: servicesT.roblox_dev,
    },
    {
      key: "graphic_design",
      icon: Palette,
      data: servicesT.graphic_design,
    },
    {
      key: "content_creation",
      icon: Video,
      data: servicesT.content_creation,
    },
  ];

  return (
    <SectionWrapper id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            {servicesT.title}
          </motion.h2>
        </div>

        {/* Compact & Proportional 4-Column Grid with Stagger Cascade */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {services.map((item) => {
            const Icon = item.icon;
            const data = item.data;

            return (
              <motion.div
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-5 sm:p-6 rounded-2xl glass border border-border hover:border-accent/40 transition-colors flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                    {data.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {data.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {data.highlights.map((highlight: string) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-bg-secondary text-text-secondary border border-border"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
