"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /* If true, render the garden background with parallax */
  withBackground?: boolean;
}

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  withBackground = false,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Parallax background */}
      {withBackground && (
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -z-10"
        >
          {/* Gradient placeholder simulating a lush garden photo */}
          <div className="h-full w-full bg-gradient-to-br from-green-800 via-sage-500 to-green-700" />
          <div className="absolute inset-0 bg-green-900/50" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl ${
            withBackground ? "text-cream-50" : "text-green-900"
          }`}
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className={`mt-6 text-xl md:text-2xl ${
              withBackground ? "text-cream-200" : "text-soil-500"
            }`}
          >
            {subheadline}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
