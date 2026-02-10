"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

/* Reusable card with fade-in animation and optional hover elevation */
export default function Card({
  children,
  className = "",
  delay = 0,
  hover = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" } : undefined}
      className={`rounded-2xl bg-white p-8 shadow-md transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
