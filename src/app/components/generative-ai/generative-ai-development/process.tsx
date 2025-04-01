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
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            What is our process for building Generative AI solutions
          </h2>
        </div>
        
        <div className="space-y-4 max-w-3xl">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-black rounded-lg overflow-hidden bg-[#F3F1EB]"> {/* Beige box with black border */}
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-[#F3F1EB] hover:bg-[#E0DCCF] transition-colors" /* Beige background */
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
                <div className="p-4 border-t border-black"> {/* Content section inside box */}
                  <p className="text-black">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process;
