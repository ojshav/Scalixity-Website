'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { LayoutDashboard, LineChart, Database, Shield, Zap, Users } from "lucide-react";

export default function CustomDashboardPage() {
  const customFeatures = [
    {
      title: "Real-Time Analytics",
      description: "Monitor your business metrics with live data updates and instant insights.",
      icon: LineChart
    },
    {
      title: "Custom Visualizations",
      description: "Interactive charts and graphs tailored to your specific business needs.",
      icon: LayoutDashboard
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect multiple data sources for comprehensive reporting.",
      icon: Database
    },
    {
      title: "Role-Based Access",
      description: "Secure your data with granular permission controls for different user roles.",
      icon: Shield
    },
    {
      title: "High Performance",
      description: "Lightning-fast dashboard performance even with large datasets.",
      icon: Zap
    },
    {
      title: "Multi-User Support",
      description: "Collaborative dashboards with real-time updates for your entire team.",
      icon: Users
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="Custom Dashboard Development"
        description="We build powerful, intuitive dashboards that transform your data into actionable insights. From real-time analytics to comprehensive reporting, we deliver custom dashboard solutions tailored to your business needs."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine technical expertise with creative innovation to deliver exceptional results"
        benefits={customFeatures}
        ctaText="Start Your Project"
        ctaLink="/contact"
      /> 
      <TechnologiesUsed />
      <PricingPlan />
      <CTA />
    </main>
  );
}

