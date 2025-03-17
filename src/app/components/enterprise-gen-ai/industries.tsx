"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  { 
    name: "Healthcare", 
    icon: "/images/icons/healthcare.svg",
    useCases: [
      "Healthcare AI Solutions",
      "Healthcare AI Agents",
      "Documentation Intelligence",
      "Medical Imaging Intelligence",
      "Personalized Treatment",
      "Medical Claims Processing",
      "Virtual Health Assistants"
    ]
  },
  { 
    name: "Finance", 
    icon: "/images/icons/finance.svg",
    useCases: [
      "Fraud Detection",
      "Risk Assessment",
      "Algorithmic Trading",
      "Customer Insights",
      "Predictive Analytics",
      "Automated Report Generation",
      "Personalized Banking"
    ]
  },
  { 
    name: "Retail", 
    icon: "/images/icons/retail.svg",
    useCases: [
      "Customer Behavior Analysis",
      "Inventory Management",
      "Price Optimization",
      "Product Recommendation",
      "Sales Forecasting",
      "Chatbot Assistants",
      "Visual Search AI"
    ]
  },
  { 
    name: "Manufacturing", 
    icon: "/images/icons/manufacturing.svg",
    useCases: [
      "Predictive Maintenance",
      "Supply Chain Optimization",
      "Quality Control",
      "Production Planning",
      "Inventory Forecasting",
      "Robotic Process Automation",
      "Fault Detection"
    ]
  },
  { 
    name: "Education", 
    icon: "/images/icons/education.svg",
    useCases: [
      "Adaptive Learning Platforms",
      "Automated Grading",
      "Student Performance Analytics",
      "Chatbot Tutors",
      "Course Recommendation",
      "Content Personalization",
      "Plagiarism Detection"
    ]
  },
  { 
    name: "Logistics", 
    icon: "/images/icons/logistics.svg",
    useCases: [
      "Route Optimization",
      "Demand Forecasting",
      "Warehouse Automation",
      "Fleet Management",
      "Real-time Tracking",
      "Supply Chain Analytics",
      "Shipment Prediction"
    ]
  }
]

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Developing effective Generative AI solutions for every industry
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our expertise spans across various sectors, enabling us to deliver tailored Generative AI solutions that address industry-specific challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-black bg-[#F3F1EB] p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-semibold text-black text-center">{industry.name}</h3>
              </div>
              <ul className="text-center text-black">
                {industry.useCases.map((useCase, idx) => (
                  <li key={idx} className="text-sm mb-2">{useCase}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


