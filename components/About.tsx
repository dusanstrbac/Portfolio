"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {

  const t = useTranslations("AboutMeSection");

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-105 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">

            <Image
              src="/profile.jpg"
              alt="Dušan Štrbac"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('AboutMeHeader')}
          </h2>

          <p className="text-neutral-400 leading-relaxed mb-6">
            {t('AboutMeTextSectionOne')}
          </p>

          <p className="text-neutral-400 leading-relaxed mb-6">
            {t('AboutMeTextSectionTwo')}
          </p>

          <p className="text-neutral-400 leading-relaxed">
            {t('AboutMeTextSectionThree')}
          </p>

        </motion.div>

      </div>
    </section>
  );
}