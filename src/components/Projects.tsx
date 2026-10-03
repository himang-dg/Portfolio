"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getTagIcon } from "./TagIcon";
import Image from "next/image";

interface ProjectsProps {
  projectsData: Project[];
}

export default function Projects({ projectsData }: ProjectsProps) {
  const { t, locale } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt?: string } | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenImage) {
          setFullscreenImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenImage, selectedProject]);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (selectedProject || fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, fullscreenImage]);

  const categories = ["All", "Web", "Design", "Tools", "Game"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  // Pagination logic
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Reset page to 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Close modal when clicking outside
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            {t.projects.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {t.projects.title}
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => {
            const filterKey = `filter_${cat.toLowerCase()}` as keyof typeof t.projects;
            const catLabel = (t.projects as any)[filterKey] || cat;
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary border border-border"
                  }`}
              >
                {catLabel}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.length > 0 ? (
              paginatedProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16 text-text-tertiary"
              >
                {t.projects.no_projects}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 mt-4"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border transition-colors ${currentPage === 1
                  ? "border-transparent text-text-tertiary cursor-not-allowed opacity-50"
                  : "border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary bg-bg-tertiary"
                }`}
              aria-label="Previous page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-1">
              {(() => {
                const pages = [];
                const maxVisible = 5;
                if (totalPages <= maxVisible) {
                  for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                  if (currentPage <= 3) {
                    pages.push(1, 2, 3, 4, '...', totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
                  } else {
                    pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
                  }
                }

                return pages.map((page, index) => (
                  <button
                    key={`${page}-${index}`}
                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                    disabled={page === '...'}
                    className={`w-10 h-10 rounded-xl font-medium text-sm transition-colors ${currentPage === page
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : page === '...'
                          ? "bg-transparent text-text-tertiary cursor-default"
                          : "bg-bg-tertiary border border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                      }`}
                  >
                    {page}
                  </button>
                ));
              })()}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border transition-colors ${currentPage === totalPages
                  ? "border-transparent text-text-tertiary cursor-not-allowed opacity-50"
                  : "border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary bg-bg-tertiary"
                }`}
              aria-label="Next page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-bg-secondary border border-border rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-bg-tertiary shrink-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {(t.projects as any)?.items?.[selectedProject.id]?.title || (locale === "en" && selectedProject.title_en ? selectedProject.title_en : selectedProject.title)}
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 text-text-tertiary hover:text-text-primary bg-bg-secondary hover:bg-bg-primary rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-6 overflow-y-auto overscroll-contain custom-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
                  {/* Featured Preview Banner */}
                  {selectedProject.image && (
                    <div
                      onClick={() => setFullscreenImage({ src: selectedProject.image!, alt: selectedProject.title })}
                      className="relative w-full aspect-video max-h-80 rounded-xl overflow-hidden mb-6 border border-border shadow-lg bg-bg-tertiary cursor-zoom-in group"
                      title={(t.projects as any).open_fullscreen || "Open Fullscreen"}
                    >
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-2 border border-white/20 shadow-xl">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          {(t.projects as any).open_fullscreen || "Open Fullscreen"}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {getTagIcon(tag)}
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs font-mono px-3 py-1 text-text-tertiary">
                      {selectedProject.date}
                    </span>
                  </div>

                  {/* Markdown Renderer */}
                  <div className="prose prose-invert prose-blue max-w-none text-text-secondary leading-relaxed">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        img: ({ src, alt }) => {
                          const imgSrc = typeof src === "string" ? src : "";
                          return (
                            <span
                              onClick={() => setFullscreenImage({ src: imgSrc, alt: alt || "Project Image" })}
                              className="block my-6 rounded-xl overflow-hidden border border-border shadow-lg bg-bg-tertiary cursor-zoom-in group relative"
                              title={(t.projects as any).open_fullscreen || "Open Fullscreen"}
                            >
                              <img
                                src={imgSrc}
                                alt={alt || "Project Image"}
                                className="w-full h-auto object-cover max-h-[550px] transition-transform duration-300 group-hover:scale-[1.01]"
                                loading="lazy"
                              />
                              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="p-2 rounded-lg bg-black/70 backdrop-blur-sm text-white text-xs flex items-center gap-1.5 border border-white/20 shadow-lg">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                  </svg>
                                </span>
                              </span>
                              {alt && !["alt", "image", "project visual", "gambar proyek", "project image", ""].includes(alt.toLowerCase()) && (
                                <span className="block text-center text-xs text-text-tertiary py-2 px-3 bg-bg-secondary border-t border-border">
                                  {alt}
                                </span>
                              )}
                            </span>
                          );
                        },
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-6 rounded-xl border border-border">
                            <table className="min-w-full divide-y divide-border text-sm">
                              {children}
                            </table>
                          </div>
                        ),
                      }}
                    >
                      {(t.projects as any)?.items?.[selectedProject.id]?.content || (locale === "en" && selectedProject.content_en ? selectedProject.content_en : selectedProject.content)}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* Footer / Links */}
                <div className="p-6 border-t border-border bg-bg-tertiary flex flex-wrap gap-4 shrink-0">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-accent hover:bg-accent-soft text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-accent/20"
                    >
                      {t.projects.view_live}
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-bg-primary hover:bg-bg-secondary border border-border text-text-primary text-sm font-medium rounded-xl transition-colors"
                    >
                      {t.projects.view_github}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Lightbox Modal */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenImage(null)}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110] flex items-center gap-2 group"
                title={`${(t.projects as any).close || "Close"} (Esc)`}
              >
                <span className="text-xs font-medium pr-1 text-gray-300 group-hover:text-white hidden sm:inline">{(t.projects as any).close || "Close"}</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Fullscreen Image Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[96vw] max-h-[88vh] flex flex-col items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fullscreenImage.src}
                  alt={fullscreenImage.alt || "Fullscreen preview"}
                  className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
                {fullscreenImage.alt && !["alt", "image", "project visual", "gambar proyek", "project image", ""].includes(fullscreenImage.alt.toLowerCase()) && (
                  <p className="mt-3 text-sm text-gray-300 text-center font-mono max-w-2xl px-4 py-1.5 bg-black/60 rounded-full border border-white/10">
                    {fullscreenImage.alt}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
