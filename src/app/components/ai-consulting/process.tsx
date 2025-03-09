"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const processSteps = [
  {
    title: "Data Preparation",
    content: "Before we use any data, we help organizations with cleaning, organizing, and preparing raw data into a format that is suitable for AI implementation. This may include normalizing or standardizing numerical data, encoding categorical data, and generating new features to enhance model performance."
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
    content: "Our deployment process ensures seamless integration of the AI solution into your existing infrastructure, with proper monitoring and scaling capabilities."
  },
  {
    title: "Prompt Engineering",
    content: "We optimize and fine-tune prompts to ensure the AI model produces accurate, relevant, and contextually appropriate outputs for your specific use case."
  }
]

const featuredProjects = [
  {
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
    description: "We built DeVoice, an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "Futuristic Generative AI Solution for the Food & Beverage industry",
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses",
      "Multi-language support for diverse customers",
      "Dynamic interaction for enhanced engagement"
    ]
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
            Our Process for AI Consulting
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

export function FeaturedWork() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Generative AI-powered projects</h2>
        {featuredProjects.map((project, index) => (
          <div key={index} className="bg-[#0F1629] rounded-lg overflow-hidden border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
