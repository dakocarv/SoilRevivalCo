"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "We Test Your Soil",
    description: "We collect samples from your garden and run a full nutrient and pH analysis.",
  },
  {
    number: "02",
    title: "We Analyze Conditions",
    description: "Our experts interpret the results and identify what your soil needs most.",
  },
  {
    number: "03",
    title: "Custom Treatment Plan",
    description: "We create a tailored plan with the right amendments, timing, and techniques.",
  },
  {
    number: "04",
    title: "You Grow Better Plants",
    description: "Follow the plan and watch your garden produce healthier, stronger growth.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-green-900 md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-soil-500">
          Four simple steps to a thriving garden.
        </p>

        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="absolute left-[27px] top-0 hidden h-full w-0.5 bg-sage-300 md:block" />

          <div className="grid gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-700 font-heading text-lg font-bold text-cream-50 shadow-md">
                  {step.number}
                </div>

                {/* Text */}
                <div className="pt-2">
                  <h3 className="mb-1 font-heading text-xl font-semibold text-green-800">
                    {step.title}
                  </h3>
                  <p className="text-soil-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
