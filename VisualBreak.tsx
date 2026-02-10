"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisualBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative flex h-[50vh] items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <div className="h-full w-full bg-gradient-to-r from-green-700 via-sage-500 to-soil-500" />
        <div className="absolute inset-0 bg-green-900/40" />
      </motion.div>

      {/* Overlay text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl px-6 text-center font-heading text-3xl font-bold leading-snug text-cream-50 md:text-4xl"
      >
        Healthy soil is the foundation of every great garden.
      </motion.p>
    </div>
  );
}
