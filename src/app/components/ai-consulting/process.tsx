"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  {
    title: "Data Preparation",
    content:
      "Before we use any data, we help organizations with cleaning, organizing, and preparing raw data into a format that is suitable for AI implementation. This may include normalizing or standardizing numerical data, encoding categorical data, and generating new features to enhance model performance.",
  },
  {
    title: "Data Pipeline",
    content:
      "We establish robust data pipelines to ensure smooth data flow and processing. Our pipelines handle data ingestion, transformation, and delivery while maintaining data quality and consistency.",
  },
  {
    title: "Experimentation",
    content:
      "Our team conducts thorough experimentation with different model architectures, hyperparameters, and training approaches to find the optimal solution for your specific use case.",
  },
  {
    title: "Data Evaluation",
    content:
      "We implement comprehensive evaluation metrics and validation procedures to ensure the model's performance meets the required standards and business objectives.",
  },
  {
    title: "Deployment",
    content:
      "Our deployment process ensures seamless integration of the AI solution into your existing infrastructure, with proper monitoring and scaling capabilities.",
  },
  {
    title: "Prompt Engineering",
    content:
      "We optimize and fine-tune prompts to ensure the AI model produces accurate, relevant, and contextually appropriate outputs for your specific use case.",
  }
]

// const featuredProjects = [
//   {
//     title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
//     description: "We built DeVoice, an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
//     image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
//     features: [
//       "Futuristic Generative AI Solution for the Food & Beverage industry",
//       "State-of-the-art voice recognition",
//       "Provides natural dialogues and verbal responses",
//       "Multi-language support for diverse customers",
//       "Dynamic interaction for enhanced engagement"
//     ]
//   }
// ]

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Process for AI Consulting
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-[#3D3D3D] rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-[#F3F1EB] hover:bg-[#E5E2DA] transition-colors"
                onClick={() => setOpenStep(openStep === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-black font-medium">{step.title}</span>
                </div>
                {openStep === index ? (
                  <ChevronUp className="h-5 w-5 text-black" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-black" />
                )}
              </button>
              {openStep === index && (
                <div className="p-4 bg-[#F3F1EB]">
                  <p className="text-black">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
