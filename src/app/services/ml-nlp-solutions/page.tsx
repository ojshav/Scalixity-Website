'use client'

import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";

import { Brain, FileText, BarChart3, Sparkles, Target, Zap } from "lucide-react";

export default function MLNLPSolutionsPage() {
  const customFeatures = [
    {
      title: "Advanced ML Models",
      description: "Custom machine learning models trained on your data for accurate predictions and insights.",
      icon: Brain
    },
    {
      title: "Natural Language Processing",
      description: "Extract meaning from text with sentiment analysis, entity recognition, and language understanding.",
      icon: FileText
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes with sophisticated statistical modeling and AI algorithms.",
      icon: BarChart3
    },
    {
      title: "Deep Learning Solutions",
      description: "Neural networks and deep learning architectures for complex pattern recognition.",
      icon: Sparkles
    },
    {
      title: "High Accuracy",
      description: "Precision-tuned models delivering reliable results for business-critical decisions.",
      icon: Target
    },
    {
      title: "Real-Time Processing",
      description: "Lightning-fast inference for real-time predictions and instant insights.",
      icon: Zap
    }
  ];

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title="Machine Learning & NLP Solutions"
        description="Unlock the power of AI with custom machine learning and natural language processing solutions. We build intelligent systems that learn from data, understand language, and deliver actionable insights for your business."
      />
      <KeyFeatures />
      <Benefits 
        title="Benefits"
        subtitle="We combine data science expertise with cutting-edge AI to build solutions that transform your business"
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

