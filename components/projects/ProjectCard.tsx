"use client";
import { ProjectCardProps } from "@/types/project";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // Dodaj useLocale
import Image from "next/image";

export default function ProjectCard({ project, onOpen } : ProjectCardProps) {
  const t = useTranslations('Projects');
  const locale = useLocale() as "sr" | "en"; // Dobijamo "sr" ili "en"

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
      group
      rounded-2xl
      overflow-hidden
      border border-white/10
      bg-white/4
      backdrop-blur
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>

        {/* POPRAVKA: Ovde sada pristupamo konkretnom jeziku */}
        <p className="text-neutral-400 text-sm mb-4">
          {project.description[locale]}
        </p>

        <button
          onClick={() => onOpen(project)}
          className="
          text-sm
          px-4 py-2
          rounded-lg
          bg-indigo-600
          hover:bg-indigo-500
          transition
          "
        >
          {t('DetailedBtn')}
        </button>
      </div>
    </motion.div>
  );
}