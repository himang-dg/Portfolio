"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import type { Project } from "@/lib/projects";
import { getTagIcon } from "./TagIcon";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { t, locale } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemTranslation = (t.projects as any)?.items?.[project.id];
  const title = itemTranslation?.title || (locale === "en" && project.title_en ? project.title_en : project.title);
  const description = itemTranslation?.description || (locale === "en" && project.description_en ? project.description_en : project.description);

  // Category emoji mapping
  const categoryEmoji: Record<string, string> = {
    web: "🌐",
    design: "🎨",
    tools: "🛠️",
    game: "🎮",
  };
  const emoji = project.category ? categoryEmoji[project.category.toLowerCase()] || "💼" : "💼";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden glass hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_var(--color-accent-glow)] transition-all duration-300"
    >
      {/* Image / Thumbnail */}
      <div className="relative aspect-video bg-bg-tertiary overflow-hidden flex flex-col items-center justify-center">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={title}
              fill
              priority={index < 6}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10" />
            <span className="text-5xl opacity-50 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500 transform z-10">
              {emoji}
            </span>
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          {project.category && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent px-2 py-0.5 bg-accent/10 rounded-md">
              {project.category}
            </span>
          )}
          <span className="text-[10px] text-text-tertiary font-mono">
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-bg-tertiary text-text-tertiary border border-border"
            >
              {getTagIcon(tag)}
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-bg-tertiary text-text-tertiary border border-border">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
