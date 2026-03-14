"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),
             linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
        bg-size-[40px_40px]"
      />

      {/* animated glow */}
      <motion.div
        className="absolute -top-50 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute -bottom-50 right-1/3 h-125 w-125 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  );
}