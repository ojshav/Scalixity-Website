"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Goal Setting",
    description: "We begin by understanding your retail challenges — from personalized shopping experiences to inventory management — aligning AI solutions with your business goals."
  },
  {
    title: "Designing AI Capabilities",
    description: "Our team defines AI agent functionalities, such as virtual shopping assistants, demand forecasting, and customer sentiment analysis."
  },
  {
    title: "Model Development & Training",
    description: "We craft AI models tailored for retail, training them to deliver personalized product recommendations, optimize pricing, and predict customer behavior."
  },
  {
    title: "Seamless Integration",
    description: "We integrate AI agents into your e-commerce platforms, CRM, POS systems, and inventory databases for real-time data flow and automation."
  },
  {
    title: "Testing & Performance Optimization",
    description: "Rigorous testing ensures AI agents respond accurately, adapt to customer interactions, and continuously improve through data-driven insights."
  }
];

export function Process() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Retail AI Agent Development Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empower your retail business with AI agents — personalized, predictive, and performance-driven.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/30" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#5B1DAF] rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{step.title}</h3>
                  <p className="text-[#5B1DAF]/80 leading-relaxed">{step.description}</p>
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
