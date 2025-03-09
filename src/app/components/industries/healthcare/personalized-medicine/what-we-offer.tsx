"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Genomic Data Analysis",
    description: "Utilize AI models to analyze genetic data, identifying biomarkers and genetic mutations for personalized treatment plans."
  },
  {
    title: "Predictive Patient Response Modeling",
    description: "Leverage machine learning to predict how individual patients will respond to specific treatments based on their genetic and clinical data."
  },
  {
    title: "Drug Response Optimization",
    description: "Tailor drug dosages and combinations for patients by analyzing data from clinical trials, genomics, and patient history."
  },
  {
    title: "AI-Driven Clinical Decision Support",
    description: "Provide healthcare professionals with real-time AI insights, guiding personalized treatment strategies and improving patient outcomes."
  },
  {
    title: "Automated Risk Profiling",
    description: "Identify patients at risk of adverse reactions or ineffective treatments through AI-driven risk analysis."
  },
  {
    title: "Seamless Data Integration",
    description: "Integrate AI models with hospital databases, EHR systems, and genomic data platforms for streamlined data processing."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Solutions for Personalized Medicine Platforms
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Revolutionizing healthcare with AI-powered personalized medicine — from genomic insights to optimized treatment strategies and predictive patient modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-white/20 hover:border-white/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{service.title}</h3>
              <p className="text-[#5B1DAF]/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
