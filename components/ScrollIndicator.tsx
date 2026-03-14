"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-17 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <span className="text-sm mb-2">Scroll</span>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  );
}