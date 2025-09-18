"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Analysis & Goal Setting",
    description: "We begin by understanding your retail needs — identifying key use cases for voice ordering, from product searches to checkout processes."
  },
  {
    title: "Data Integration & NLP Training",
    description: "Our team integrates voice AI with your product catalog, CRM, and databases, training NLP models to recognize customer intents and commands."
  },
  {
    title: "Voice AI Model Development",
    description: "We build custom AI models, enabling accurate speech recognition, natural language processing, and personalized voice interactions."
  },
  {
    title: "Testing & User Simulation",
    description: "We rigorously test voice ordering flows — running simulations and user scenarios to ensure smooth, responsive interactions."
  },
  {
    title: "Deployment & Continuous Optimization",
    description: "Once live, our AI continuously learns from user interactions, enhancing voice recognition accuracy and customer experience over time."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Voice Ordering Solution Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transform retail experiences with AI-powered voice interactions — intuitive, fast, and personalized for every customer.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>

                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
