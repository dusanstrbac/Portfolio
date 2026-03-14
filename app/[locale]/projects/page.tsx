"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderKanban, Info } from "lucide-react";
import Image from "next/image";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";
import { ProjectDetails } from "@/types/project";
import { useLocale, useTranslations } from "next-intl"; // Dodato

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  
  // 1. Inicijalizacija jezika i prevoda
  const locale = useLocale() as "sr" | "en";
  const t = useTranslations("Projects");

  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Naslov sekcije - LOKALIZOVAN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <FolderKanban className="text-indigo-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
              {t('MyPrefix')} <span className="text-indigo-500 italic">{t('Title')}</span>
            </h1>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
            {t('AllProjectsSubtitle')}
          </p>
        </motion.div>

        {/* Grid sa projektima */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image Section */}
              <div 
                className="relative h-56 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/90 dark:bg-black/90 text-black dark:text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl border border-white/20">
                        {t('DetailedBtn')} <Info size={14} />
                    </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                
                {/* POPRAVKA: Ovde je bio glavni problem. Dodat [locale] */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-2">
                  {project.description[locale]}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Linkovi */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-white/5">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-indigo-500 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyan-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    {t('more')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  );
}