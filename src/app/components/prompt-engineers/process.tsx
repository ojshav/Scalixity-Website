"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  {
    title: "Problem Definition",
    content:
      "Building AI-powered products and services requires answering some crucial questions. The model is developed to solve a specific problem and for an intended use case. We help in the process of planning the AI model suitable for your needs.",
  },
  {
    title: "Data Collection, Training and Evaluation",
    content:
      "Our AI Prompt engineers undertake a meticulous approach to gather relevant data, train the models, and evaluate their effectiveness. We ensure high-quality datasets and rigorous model assessment to optimize performance.",
  },
  {
    title: "Model Design and Evaluation",
    content:
      "We design AI models tailored to your needs, leveraging advanced architectures and methodologies. Through extensive evaluation, we ensure optimal model efficiency and effectiveness.",
  },
  {
    title: "Deployment",
    content:
      "Our deployment process ensures seamless integration of AI solutions into your existing infrastructure, with proper monitoring and scaling capabilities.",
  },
  {
    title: "Deployment & Maintenance",
    content:
      "We provide ongoing support and maintenance to keep AI models optimized, addressing evolving business requirements and technological advancements.",
  },
];

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="bg-[#A8B2E7] py-20">
      {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-700 uppercase tracking-wider">
            PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Prompt Engineers Follow a Systematic AI Development Process
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden bg-[#F3F1EB]"
            >
              {/* Beige Accordion Cards with Light Black Border */}
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-[#F3F1EB] hover:bg-[#E5DCCE] transition-colors"
                onClick={() => setOpenStep(openStep === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-black font-medium">{step.title}</span>
                </div>
                {openStep === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-800" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-800" />
                )}
              </button>
              {openStep === index && (
                <div className="p-4 bg-[#F3F1EB] border-t border-gray-700">
                  <p className="text-gray-800">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
