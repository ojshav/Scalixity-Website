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
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Our AI Development Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-2 border-gray-700"
            >
              <step.icon className="text-black w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              <p className="text-black mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
