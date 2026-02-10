"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl rounded-2xl bg-white p-12 text-center shadow-lg"
      >
        <svg
          className="mx-auto mb-4 h-16 w-16 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="mb-2 font-heading text-2xl font-bold text-green-800">
          Thank You!
        </h3>
        <p className="text-soil-500">
          Your message has been received. We&apos;ll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg md:p-12"
    >
      {/* Name */}
      <label className="mb-1 block text-sm font-medium text-green-900" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="mb-6 w-full rounded-lg border border-sage-300 bg-cream-50 px-4 py-3 text-lg text-green-900 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
        placeholder="Your name"
      />

      {/* Email */}
      <label className="mb-1 block text-sm font-medium text-green-900" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="mb-6 w-full rounded-lg border border-sage-300 bg-cream-50 px-4 py-3 text-lg text-green-900 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
        placeholder="you@example.com"
      />

      {/* Phone */}
      <label className="mb-1 block text-sm font-medium text-green-900" htmlFor="phone">
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        className="mb-6 w-full rounded-lg border border-sage-300 bg-cream-50 px-4 py-3 text-lg text-green-900 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
        placeholder="(555) 123-4567"
      />

      {/* Message */}
      <label className="mb-1 block text-sm font-medium text-green-900" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="mb-8 w-full resize-none rounded-lg border border-sage-300 bg-cream-50 px-4 py-3 text-lg text-green-900 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
        placeholder="Tell us about your garden or what you need help with..."
      />

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </motion.form>
  );
}
