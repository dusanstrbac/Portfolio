"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { ProjectDetails } from "@/types/project";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react"; // Ikonica za dugme
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const t = useTranslations('Projects');
  // Uzimamo samo prva dva projekta iz niza
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 dark:text-white">
              Top <span className="text-indigo-500 italic">{t('Title')}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
              {t('InfoText')}
            </p>
          </div>

          {/* Dugme za mobilni se sakriva ovde, a na desktopu stoji sa strane */}
          <Link 
            href="/projects" 
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl font-bold hover:bg-indigo-500 hover:text-white transition-all group"
          >
            {t('ExploreAllProjectsBtn')} 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid - sada koristimo md:grid-cols-2 jer su samo dva projekta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* Dugme koje se vidi samo na mobilnom (centrirano ispod projekata) */}
        <div className="mt-12 flex md:hidden justify-center">
          <Link
            href="/projects" 
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/20"
          >
            {t('ExploreAllProjectsBtn')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}