'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { Layout, Smartphone, Zap, Lock, BarChart3, Code2 } from "lucide-react";

export default function CustomWebAppsPage() {
  const customFeatures = [
    {
      title: "Fast Launch",
      description: "We deliver projects on time without compromising quality, using agile methodologies.",
      icon: Smartphone
    },
    {
      title: "Premium Quality",
      description: "Every project is crafted with attention to detail and tested rigorously for perfection.",
      icon: Code2
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to build future-proof solutions.",
      icon: Zap
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to assist you with any questions or issues.",
      icon: Lock
    },
    {
      title: "Scalable Solutions",
      description: "Build for growth with architectures that scale seamlessly with your business.",
      icon: BarChart3
    },
    {
      title: "Top-tier Security",
      description: "We implement industry-best security practices to protect your data and users.",
      icon: Layout
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="Custom Web Applications & Website Development"
        description="We build high-performance websites and web apps — from marketing sites to SaaS MVPs — with responsive design, secure authentication, analytics, and full deployment pipelines."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine technical expertise with creative innovation to deliver exceptional results"
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

