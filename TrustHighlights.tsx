"use client";

import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

const HIGHLIGHTS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-green-700" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="34" r="10" />
        <path d="M24 24V8" strokeLinecap="round" />
        <path d="M18 14c0-4 2.7-6 6-6s6 2 6 6" strokeLinecap="round" />
        <path d="M15 18c-3 0-5-2-5-5s3-5 5-5" strokeLinecap="round" />
        <path d="M33 18c3 0 5-2 5-5s-3-5-5-5" strokeLinecap="round" />
      </svg>
    ),
    title: "Soil Testing",
    description: "Comprehensive analysis of your soil's nutrients, pH, and composition.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-green-700" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="6" width="32" height="36" rx="4" />
        <path d="M16 16h16M16 24h12M16 32h8" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Treatment Plans",
    description: "Personalized recommendations based on your unique soil results.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-green-700" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 12v12l8 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Seasonal Care",
    description: "Ongoing support and treatments timed to each growing season.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-green-700" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 38V22l10-12 10 12v16H14z" />
        <path d="M20 38v-8h8v8" />
        <path d="M8 24l16-16 16 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Free Garden Plan",
    description: "Every package includes a personalized plan for your garden's success.",
  },
];

export default function TrustHighlights() {
  return (
    <SectionWrapper id="services" className="bg-sage-100">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-green-900 md:text-4xl">
          What We Offerfk
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-soil-500">
          Everything your garden needs to thrive, from root to bloom.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Card key={item.title} delay={i * 0.12} hover>
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="text-soil-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
