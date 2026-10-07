"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { techStackData } from "@/data/techstack";
import { Layout, Gamepad2, Database, Palette } from "lucide-react";

export default function Skills() {
  const { t, locale } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  // Categorize tech stack by domain
  const categories = [
    {
      title: locale === "id" ? "Frontend & Arsitektur Web" : "Frontend & Web Architecture",
      icon: Layout,
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: locale === "id" ? "Game & Dunia Interaktif 3D" : "Game & 3D Interactive Worlds",
      icon: Gamepad2,
      skills: ["Roblox Studio", "Lua"],
    },
    {
      title: locale === "id" ? "Backend & Basis Data" : "Backend & Data Systems",
      icon: Database,
      skills: ["Node.js", "PHP", "Laravel", "MySQL", "Prisma"],
    },
    {
      title: locale === "id" ? "Desain Visual & Alat Kreatif" : "Visual Design & Creative Workflow",
      icon: Palette,
      skills: ["Photoshop", "Figma", "Canva", "GitHub", "VS Code"],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            {t.skills.title}
          </motion.h2>
        </div>

        {/* Domain Matrix Grid with Stagger Cascade */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const matchedSkills = cat.skills
              .map((name) => techStackData.find((t) => t.name.toLowerCase() === name.toLowerCase()))
              .filter(Boolean) as typeof techStackData;

            return (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="p-5 sm:p-6 rounded-2xl glass border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {matchedSkills.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary/80 border border-border/80 hover:border-accent/40 hover:bg-bg-tertiary transition-colors cursor-default"
                      >
                        <span className={`text-base ${tech.color} flex items-center justify-center`}>
                          <tech.icon />
                        </span>
                        <span className="text-xs font-medium text-text-secondary">
                          {tech.name}
                        </span>
                      </motion.div>
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
