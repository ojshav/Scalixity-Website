"use client";

import { StepForward, Settings, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: StepForward,
    title: "Discovery & Strategy",
    description: "Understanding business needs and defining AI goals.",
  },
  {
    icon: Settings,
    title: "Model Development",
    description: "Building and training AI models tailored to business challenges.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Optimization",
    description: "Refining AI models for accuracy, efficiency, and performance.",
  },
  {
    icon: TrendingUp,
    title: "Deployment & Scaling",
    description: "Seamlessly integrating AI solutions and ensuring scalability.",
  },
];

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Our AI Development Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <step.icon className="text-primary w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
