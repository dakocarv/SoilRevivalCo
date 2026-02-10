"use client";

import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import Button from "./Button";

const PACKAGES = [
  {
    name: "Basic Soil Test",
    badge: null,
    description: "Perfect for homeowners who want to understand their soil before planting.",
    features: [
      "Full nutrient analysis",
      "pH level testing",
      "Written results report",
      "Basic recommendations",
    ],
  },
  {
    name: "Seasonal Garden Boost",
    badge: "Most Popular",
    description: "A complete seasonal treatment to keep your garden performing at its best.",
    features: [
      "Everything in Basic Soil Test",
      "Custom amendment mix",
      "Seasonal application schedule",
      "Follow-up soil check",
      "Email support",
    ],
  },
  {
    name: "Complete Garden Plan",
    badge: "$350 Value",
    description: "The full package for serious gardeners who want long-term results.",
    features: [
      "Everything in Seasonal Boost",
      "Year-round treatment plan",
      "Personalized garden layout",
      "Ongoing seasonal adjustments",
      "Priority phone support",
    ],
  },
];

export default function Packages() {
  return (
    <SectionWrapper id="packages" className="bg-cream-100">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-green-900 md:text-4xl">
          Garden Care Packages
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-soil-500">
          Choose the plan that fits your garden and goals.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Card key={pkg.name} delay={i * 0.15} hover className="relative flex flex-col">
              {/* Badge */}
              {pkg.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-harvest-400 px-4 py-1 text-sm font-semibold text-green-900 shadow">
                  {pkg.badge}
                </span>
              )}

              <h3 className="mb-2 font-heading text-2xl font-bold text-green-800">
                {pkg.name}
              </h3>
              <p className="mb-6 text-soil-500">{pkg.description}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-green-900">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-sage-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant={i === 1 ? "primary" : "outline"} className="w-full">
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
