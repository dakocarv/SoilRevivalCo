"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="bg-soil-400 px-6 py-24 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-6 font-heading text-3xl font-bold text-cream-50 md:text-4xl">
          Ready to get the most out of your garden?
        </h2>
        <p className="mb-10 text-lg text-cream-200">
          Let us help you build a garden that truly thrives — season after season.
        </p>
        <Button href="/contact" variant="primary">
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
}
