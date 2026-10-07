"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import type { Project } from "@/lib/projects";
import { getTagIcon } from "./TagIcon";
import Image from "next/image";
import { Globe, Palette, Wrench, Gamepad2, Folder } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const getCategoryIcon = (category?: string) => {
  switch (category?.toLowerCase()) {
    case "web":
      return Globe;
    case "design":
      return Palette;
    case "tools":
      return Wrench;
    case "game":
      return Gamepad2;
    default:
      return Folder;
  }
};

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { t, locale } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemTranslation = (t.projects as any)?.items?.[project.id];
  const title = itemTranslation?.title || (locale === "en" && project.title_en ? project.title_en : project.title);
  const description = itemTranslation?.description || (locale === "en" && project.description_en ? project.description_en : project.description);
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden glass border border-border hover:border-accent/50 shadow-md hover:shadow-2xl hover:shadow-black/50 transition-colors duration-300 flex flex-col justify-between"
    >
      {/* Image / Thumbnail */}
      <div className="relative aspect-video bg-bg-tertiary overflow-hidden flex flex-col items-center justify-center">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={title}
              fill
              priority={index < 3}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-sky-500/5" />
            <CategoryIcon className="w-12 h-12 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all duration-500 relative z-10" />
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
