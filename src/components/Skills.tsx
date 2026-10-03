"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { techStackData } from "@/data/techstack";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            {t.skills.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {t.skills.title}
          </motion.h2>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {techStackData.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl glass border border-border card-hover shadow-lg group relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${tech.bg}`} />
              <div className={`text-4xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <tech.icon />
              </div>
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors relative z-10 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
