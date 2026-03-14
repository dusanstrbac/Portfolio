"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetails } from "@/types/project";
import { X, ExternalLink, Github } from "lucide-react";
import { useLocale, useTranslations } from "next-intl"; // Dodato

interface ProjectModalProps {
  project: ProjectDetails | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  // 1. Inicijalizacija prevoda i jezika
  const t = useTranslations('Projects');
  const locale = useLocale() as "sr" | "en";

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 dark:bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="max-w-4xl w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden relative max-h-[90vh] flex flex-col shadow-2xl transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="overflow-y-auto p-6 md:p-10 scrollbar-hide">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {project.title}
            </h2>

            {/* Opis */}
            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold mb-4">
                {t('AboutLabel')}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line text-lg md:text-xl transition-colors">
                {project.bigDescription[locale]}
              </p>
            </div>

            {/* Tehnologije */}
            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold mb-4">
                {t('TechLabel')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-4 py-2 rounded-lg border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 shadow-sm transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Carousel Galerija */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold mb-4">
                  {t('GalleryLabel')}
                </h3>
                <motion.div 
                  ref={carousel} 
                  className="cursor-grab overflow-hidden active:cursor-grabbing"
                >
                  <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-5"
                  >
                    {project.gallery.map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        className="min-w-75 md:min-w-125 h-64 md:h-80 rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shrink-0"
                      >
                        <img
                          src={img}
                          alt="Screenshot"
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-3 text-center uppercase tracking-widest italic font-medium">
                  {t('DragHint')}
                </p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-neutral-100 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950/30 flex flex-wrap gap-4 transition-colors">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-bold transition hover:opacity-90 active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/5 rounded-xl font-bold transition active:scale-95"
              >
                <Github size={18} />
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}