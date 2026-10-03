"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { Code, Gamepad2, Palette, Video } from "lucide-react";

const serviceIcons = [Code, Gamepad2, Palette, Video];
const serviceKeys = ["web_dev", "roblox_dev", "graphic_design", "content_creation"] as const;
const serviceColors = [
  { accent: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", glow: "group-hover:shadow-blue-500/20" },
  { accent: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", glow: "group-hover:shadow-red-500/20" },
  { accent: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", glow: "group-hover:shadow-purple-500/20" },
  { accent: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20", glow: "group-hover:shadow-pink-500/20" },
];

export default function Services() {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const servicesT = t.services as any;

  return (
    <SectionWrapper id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            {servicesT.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {servicesT.title}
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceKeys.map((key, i) => {
            const service = servicesT[key];
            const Icon = serviceIcons[i];
            const color = serviceColors[i];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`group relative p-6 rounded-2xl glass border border-border hover:border-transparent overflow-hidden transition-all duration-500 hover:shadow-2xl ${color.glow}`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color.bg} to-transparent`} />

                {/* Decorative corner glow */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${color.bg} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color.bg} ${color.border} border mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${color.accent}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight: string) => (
                      <span
                        key={highlight}
                        className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${color.bg} ${color.accent} border ${color.border}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
