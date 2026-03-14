"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import GridBackground from "./GridBackground";
import ScrollIndicator from "./ScrollIndicator";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      
      {/* Background gradient */}
      <GridBackground />

      <div className="max-w-5xl text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {t("Introduction")}{" "}
          <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Dušan Štrbac
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
        >
          {t('AboutMe')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >

          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            {t("ViewProjectsBtn")}
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 transition"
          >
            {t('ContactMe')}
          </Link>

        </motion.div>

      </div>
      <ScrollIndicator />
    </section>
  );
}