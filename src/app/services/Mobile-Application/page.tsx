'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
  import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { Smartphone, Zap, Users, Shield, Repeat, Star } from "lucide-react";

export default function MobileApplicationPage() {
  const customFeatures = [
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. Native performance on iOS and Android with shared codebase.",
      icon: Repeat
    },
    {
      title: "Native Performance",
      description: "Smooth, responsive apps with native-like performance and user experience.",
      icon: Smartphone
    },
    {
      title: "Fast Development",
      description: "Accelerated development cycles with agile methodologies and rapid prototyping.",
      icon: Zap
    },
    {
      title: "Intuitive UI/UX",
      description: "Beautiful, user-friendly interfaces designed following platform-specific guidelines.",
      icon: Star
    },
    {
      title: "Secure & Reliable",
      description: "Built with security best practices, encryption, and robust error handling.",
      icon: Shield
    },
    {
      title: "Scalable Architecture",
      description: "Apps that grow with your user base, handling millions of users seamlessly.",
      icon: Users
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="Mobile Application Development Services"
        description="Transform your ideas into powerful mobile apps. We build high-performance iOS and Android applications that deliver exceptional user experiences and drive business growth."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine technical excellence with creative design to build mobile apps that users love"
        benefits={customFeatures}
        ctaLink="/contact"
        ctaText="Start Your Project"
      />
      <TechnologiesUsed />
      <PricingPlan />
      <CTA />
    </main>
  );
}

