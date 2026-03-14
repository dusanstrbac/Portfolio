"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["C#", ".NET", "ASP.NET Web API", "Entity Framework"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["SQL Server"]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "REST APIs", "JWT"]
  }
];

export default function Skills() {

  const t = useTranslations();

  return (
    <section className="py-10 px-6 relative">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          {t('SkillsAndTechnologies')}
        </motion.h2>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                group
                relative
                p-8
                rounded-2xl
                border border-white/10
                bg-white/4
                backdrop-blur
                transition
                hover:border-indigo-500/40
                "
              >

                {/* Glow */}
                <div
                  className="
                  absolute inset-0
                  rounded-2xl
                  bg-linear-to-r
                  from-indigo-500/0
                  via-indigo-500/10
                  to-cyan-500/0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  blur-xl
                  "
                />

                {/* Icon */}
                <div
                  className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-linear-to-r
                  from-indigo-500
                  to-cyan-500
                  mb-6
                  "
                >
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">
                  {skill.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="
                      text-sm
                      px-3 py-1
                      rounded-md
                      border border-white/10
                      bg-white/5
                      text-neutral-400
                      hover:text-white
                      hover:border-indigo-400/40
                      transition
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}