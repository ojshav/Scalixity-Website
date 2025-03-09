"use client";

import { BrainCircuit, Database, ShieldCheck, Zap } from "lucide-react";

const expertiseAreas = [
  {
    icon: BrainCircuit,
    title: "AI Model Training & Fine-Tuning",
    description: "Expertise in training and optimizing AI models for various industries.",
  },
  {
    icon: Database,
    title: "Big Data & AI Integration",
    description: "Leveraging large-scale data processing for smarter AI decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Compliance",
    description: "Ensuring AI solutions are compliant with industry security regulations.",
  },
  {
    icon: Zap,
    title: "AI Automation & Optimization",
    description: "Optimizing business processes with AI-driven automation.",
  },
];

export function Expertise() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Our Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-[#A8B2E7] p-8 rounded-xl">
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;

