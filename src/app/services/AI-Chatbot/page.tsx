'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { MessageSquare, Brain, Zap, Users, Shield, Globe } from "lucide-react";

export default function AIChatbotPage() {
  const customFeatures = [
    {
      title: "Natural Conversations",
      description: "AI-powered chatbots that understand context and respond naturally to user queries.",
      icon: MessageSquare
    },
    {
      title: "Advanced AI Models",
      description: "Leverage cutting-edge LLMs and NLP technology for intelligent interactions.",
      icon: Brain
    },
    {
      title: "Instant Responses",
      description: "Provide 24/7 customer support with lightning-fast, accurate responses.",
      icon: Zap
    },
    {
      title: "Multi-Platform Support",
      description: "Deploy across web, mobile, WhatsApp, Slack, and other popular platforms.",
      icon: Globe
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with data encryption and compliance standards.",
      icon: Shield
    },
    {
      title: "Personalized Experience",
      description: "Tailor responses based on user behavior, preferences, and history.",
      icon: Users
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="AI Chatbot Development Services"
        description="Transform your customer experience with intelligent AI chatbots. We build custom conversational AI solutions that automate support, boost engagement, and scale your business operations 24/7."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine AI expertise with conversational design to deliver chatbots that truly understand your customers"
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

