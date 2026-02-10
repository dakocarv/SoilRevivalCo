"use client";

import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import VisualBreak from "@/components/VisualBreak";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        headline="Make Your Garden Grow"
        subheadline="Professional soil testing, custom treatments, and personalized garden plans."
        primaryCta={{ label: "Get Your Soil Tested", href: "/contact" }}
        secondaryCta={{ label: "View Packages", href: "#packages" }}
        withBackground
      />

      {/* 2. Trust / Value Highlights */}
      <TrustHighlights />

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. Packages */}
      <Packages />

      {/* 5. Visual Break */}
      <VisualBreak />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Call to Action */}
      <CallToAction />
    </>
  );
}
