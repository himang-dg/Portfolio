"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, MapPin, Briefcase, Building2, ChevronDown } from "lucide-react";
import { getTagIcon } from "./TagIcon";

type TabKey = "work" | "education";

export default function Experience() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabKey>("work");
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllEdu, setShowAllEdu] = useState(false);

  const expT = t.experience;
  const workList = expT.work || [];
  const eduList = expT.education || [];

  const INITIAL_ITEMS = 3;
  const visibleWork = showAllWork ? workList : workList.slice(0, INITIAL_ITEMS);
  const visibleEdu = showAllEdu ? eduList : eduList.slice(0, INITIAL_ITEMS);

  const tabs: { key: TabKey; label: string; icon: typeof Briefcase }[] = [
    { key: "work", label: expT.tab_work || "Work Experience", icon: Briefcase },
    { key: "education", label: expT.tab_education || "Education", icon: GraduationCap },
  ];

  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            {expT.title}
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-2xl glass border border-border">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeExpTab"
                      className="absolute inset-0 bg-accent rounded-xl shadow-lg shadow-accent/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Work Experience Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[18px] sm:left-[30px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-soft to-transparent opacity-40" />

                <div className="space-y-6 sm:space-y-8">
                  {visibleWork.map((work, i) => (
                    <motion.div
                      key={i}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="relative pl-11 sm:pl-[72px]"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[12px] sm:left-[24px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-primary z-10" />

                      {/* Content Card */}
                      <div className="p-5 sm:p-6 rounded-2xl glass hover:border-accent/30 transition-colors card-hover shadow-lg">
                        {/* Top row: Year + Type badge */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-xs font-mono text-accent font-semibold px-2.5 py-1 bg-accent/10 rounded-md">
                            {work.year}
                          </span>
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            work.type.toLowerCase().includes("magang") || work.type.toLowerCase().includes("internship")
                              ? "text-emerald-400 bg-emerald-400/10"
                              : "text-amber-400 bg-amber-400/10"
                          }`}>
                            {work.type}
                          </span>
                        </div>

                        {/* Company & Role */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-bg-tertiary rounded-lg shrink-0 mt-0.5">
                            <Building2 className="w-5 h-5 text-text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-text-primary leading-tight">
                              {work.role}
                            </h3>
                            <p className="text-sm text-text-secondary mt-0.5 break-words">
                              {work.company}
                            </p>
                          </div>
                        </div>

                        {/* Description list */}
                        <ul className="space-y-1.5 mb-4">
                          {work.description.map((desc, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                              <span className="text-accent mt-1.5 shrink-0">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-bg-tertiary text-text-tertiary border border-border"
                            >
                              {getTagIcon(tag)}
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 mt-3 text-xs text-text-tertiary">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {work.location}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button - Work */}
                {workList.length > INITIAL_ITEMS && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setShowAllWork(!showAllWork)}
                      className="px-6 py-2.5 rounded-full text-sm font-medium border border-border bg-bg-tertiary hover:bg-bg-secondary text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      {showAllWork 
                        ? (expT.show_less || "Show Less") 
                        : (expT.show_more || "Show More")}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllWork ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Education Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[18px] sm:left-[30px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-soft to-transparent opacity-40" />

                <div className="space-y-6 sm:space-y-8">
                  {visibleEdu.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="relative pl-11 sm:pl-[72px]"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[12px] sm:left-[24px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-primary z-10" />

                      {/* Content Card */}
                      <div className="p-5 sm:p-6 rounded-2xl glass hover:border-accent/30 transition-colors card-hover shadow-lg">
                        {/* Period */}
                        <span className="text-xs font-mono text-accent font-semibold px-2.5 py-1 bg-accent/10 rounded-md">
                          {edu.year}
                        </span>

                        {/* School */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="p-2 bg-bg-tertiary rounded-lg shrink-0">
                            <GraduationCap className="w-5 h-5 text-text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-text-primary">
                              {edu.school}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-text-secondary leading-relaxed mt-3">
                          {edu.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-1 mt-3 text-xs text-text-tertiary">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {edu.location}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button - Education */}
                {eduList.length > INITIAL_ITEMS && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setShowAllEdu(!showAllEdu)}
                      className="px-6 py-2.5 rounded-full text-sm font-medium border border-border bg-bg-tertiary hover:bg-bg-secondary text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      {showAllEdu 
                        ? (expT.show_less || "Show Less") 
                        : (expT.show_more || "Show More")}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllEdu ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

