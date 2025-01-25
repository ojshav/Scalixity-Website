"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const processSteps = [
  {
    title: "Data Preparation",
    content: "Before we use any data, we help organizations with cleaning, organizing, preparation of raw data into a format that is suitable for Generative AI implementation. This may include normalizing or standardizing numerical data, encoding categorical data, and possibly generating new features through various transformations to enhance model performance."
  },
  {
    title: "Data Pipeline",
    content: "We establish robust data pipelines to ensure smooth data flow and processing. Our pipelines handle data ingestion, transformation, and delivery while maintaining data quality and consistency."
  },
  {
    title: "Experimentation",
    content: "Our team conducts thorough experimentation with different model architectures, hyperparameters, and training approaches to find the optimal solution for your specific use case."
  },
  {
    title: "Data Evaluation",
    content: "We implement comprehensive evaluation metrics and validation procedures to ensure the model's performance meets the required standards and business objectives."
  },
  {
    title: "Deployment",
    content: "Our deployment process ensures seamless integration of the Generative AI solution into your existing infrastructure, with proper monitoring and scaling capabilities."
  },
  {
    title: "Prompt Engineering",
    content: "We optimize and fine-tune prompts to ensure the Generative AI model produces accurate, relevant, and contextually appropriate outputs for your specific use case."
  }
]

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What is our process for building Generative AI solutions
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
  )
}

