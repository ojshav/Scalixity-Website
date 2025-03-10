"use client";

import { Lightbulb, Rocket, DollarSign, TrendingUp, ShieldCheck, RefreshCw } from "lucide-react";

const benefits = [
  {
    title: "Validate AI Potential",
    description: "Test AI concepts in real-world scenarios before investing in full-scale development.",
    icon: <Lightbulb className="w-12 h-12 text-black" />,
  },
  {
    title: "Faster Time-to-Market",
    description: "Quickly develop AI prototypes, accelerating innovation and decision-making.",
    icon: <Rocket className="w-12 h-12 text-black" />,
  },
  {
    title: "Cost-Effective Testing",
    description: "Reduce financial risk by identifying feasibility before committing large budgets.",
    icon: <DollarSign className="w-12 h-12 text-black" />,
  },
  {
    title: "Scalability & Growth",
    description: "Ensure AI models are designed with scalability in mind for future expansion.",
    icon: <TrendingUp className="w-12 h-12 text-black" />,
  },
  {
    title: "Risk Mitigation",
    description: "Detect potential challenges early, preventing costly errors in full-scale deployment.",
    icon: <ShieldCheck className="w-12 h-12 text-black" />,
  },
  {
    title: "Continuous Improvement",
    description: "Refine AI models iteratively based on real-world data and feedback.",
    icon: <RefreshCw className="w-12 h-12 text-black" />,
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            BENEFITS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Why AI POC Development Matters
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Developing an AI Proof of Concept helps businesses assess feasibility, minimize risks, and unlock AI-driven innovation faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
              <div className="flex items-center gap-4 mb-4">
                {benefit.icon}
                <h3 className="text-2xl font-bold text-black">{benefit.title}</h3>
              </div>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
