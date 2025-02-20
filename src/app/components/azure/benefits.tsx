"use client"

import { useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: "Enterprise-Grade Cloud Solutions",
    description: "Azure offers a robust cloud platform with hybrid capabilities, enterprise security, and compliance for mission-critical applications."
  },
  {
    title: "Scalability and Performance",
    description: "Leverage Azure's global infrastructure to scale applications seamlessly and ensure high performance under any workload."
  },
  {
    title: "Cost-Effective and Flexible Pricing",
    description: "Azure provides pay-as-you-go and reserved instance pricing models, allowing businesses to optimize costs effectively."
  },
  {
    title: "Seamless Integration with Microsoft Ecosystem",
    description: "Enhance productivity with deep integration into Microsoft 365, Active Directory, and other enterprise tools."
  },
  {
    title: "AI & ML Capabilities for Innovation",
    description: "Azure AI and ML services empower businesses to build intelligent applications with cognitive APIs, Bot Services, and Azure Machine Learning."
  }
];

export function AzureBenefits() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Benefits of Azure Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
