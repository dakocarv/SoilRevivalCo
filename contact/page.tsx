"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="flex min-h-[50vh] items-center justify-center bg-sage-100 px-6 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 font-heading text-5xl font-bold text-green-900 md:text-6xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-xl text-soil-500"
          >
            Have questions or ready to get started? We&apos;d love to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-cream-50 px-6 py-20">
        <ContactForm />
      </section>

      {/* Trust Message */}
      <section className="bg-cream-50 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-md items-center justify-center gap-3 text-center"
        >
          <svg
            className="h-6 w-6 shrink-0 text-sage-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className="text-soil-500">
            We typically respond within 1 business day.
          </p>
        </motion.div>
      </section>
    </>
  );
}
