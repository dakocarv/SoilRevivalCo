"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const REASONS = [
  "Over a decade of soil science expertise",
  "Sustainable, eco-friendly treatments",
  "Tailored recommendations for your specific garden",
  "Clear, homeowner-friendly guidance at every step",
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left – text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-green-900 md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-soil-500">
            We combine real soil science with a personal touch so every gardener
            — beginner or expert — can grow with confidence.
          </p>
          <ul className="space-y-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-green-900">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right – image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-sage-300 via-sage-400 to-green-600 shadow-lg" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
