'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { ShoppingCart, CreditCard, Package, TrendingUp, Shield, Zap } from "lucide-react";

export default function EcommerceSolutionPage() {
  const customFeatures = [
    {
      title: "Complete Store Setup",
      description: "Full-featured online stores with product catalogs, inventory management, and order tracking.",
      icon: ShoppingCart
    },
    {
      title: "Secure Payments",
      description: "Integrated payment gateways with PCI compliance and fraud protection.",
      icon: CreditCard
    },
    {
      title: "Order Management",
      description: "Streamlined order processing, shipping integration, and automated fulfillment.",
      icon: Package
    },
    {
      title: "Sales Analytics",
      description: "Real-time insights into sales performance, customer behavior, and inventory trends.",
      icon: TrendingUp
    },
    {
      title: "Fast & Reliable",
      description: "Optimized for speed with 99.9% uptime and lightning-fast page loads.",
      icon: Zap
    },
    {
      title: "Enterprise Security",
      description: "SSL encryption, secure checkout, and compliance with industry standards.",
      icon: Shield
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="E-commerce Solution Development"
        description="Launch your online store with a powerful, scalable e-commerce platform. We build custom e-commerce solutions with secure payments, inventory management, and seamless shopping experiences that drive sales."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine e-commerce expertise with cutting-edge technology to build online stores that convert"
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

