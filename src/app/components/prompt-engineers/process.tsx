"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const processSteps = [
  {
    title: "Problem Definition",
    content: "Building AI-powered products and services requires answering some crucial questions. The model is developed to solve a specific problem and for an intended use case. We help in the process of planning the AI model suitable for your needs."
  },
  {
    title: "Data Collection, Training and Evaluation",
    content: "Our AI Prompt engineers undertake a meticulous approach to gather relevant data, train the models, and evaluate their effectiveness. We ensure high-quality datasets and rigorous model assessment to optimize performance."
  },
  {
    title: "Model Design and Evaluation",
    content: "We design AI models tailored to your needs, leveraging advanced architectures and methodologies. Through extensive evaluation, we ensure optimal model efficiency and effectiveness."
  },
  {
    title: "Deployment",
    content: "Our deployment process ensures seamless integration of AI solutions into your existing infrastructure, with proper monitoring and scaling capabilities."
  },
  {
    title: "Deployment & Maintenance",
    content: "We provide ongoing support and maintenance to keep AI models optimized, addressing evolving business requirements and technological advancements."
  }
];

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Our Prompt Engineers Follow a Systematic AI Development Process
          </h2>
        </div>
        
        <div className="space-y-4 max-w-3xl">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-[#0F1629] hover:bg-[#1A1B26] transition-colors"
                onClick={() => setOpenStep(openStep === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-white font-medium">{step.title}</span>
                </div>
                {openStep === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openStep === index && (
                <div className="p-4 bg-[#0F1629]">
                  <p className="text-gray-400">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
