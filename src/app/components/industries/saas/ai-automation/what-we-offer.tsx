"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Driven Workflow Automation",
    description: "Automate repetitive tasks and streamline SaaS operations with intelligent AI-driven workflows."
  },
  {
    title: "Predictive Maintenance & Optimization",
    description: "Use AI to predict system failures and optimize resource allocation for enhanced performance."
  },
  {
    title: "Smart Data Processing & Integration",
    description: "AI-powered data pipelines process, clean, and integrate data seamlessly across platforms."
  },
  {
    title: "Real-Time AI Insights & Reporting",
    description: "Leverage AI to generate real-time insights and reports, improving strategic decision-making."
  },
  {
    title: "AI-Powered Customer Support",
    description: "Enhance user experience with AI chatbots and virtual assistants providing instant responses."
  },
  {
    title: "Seamless AI Integration",
    description: "Deploy AI automation effortlessly into existing SaaS ecosystems for maximum efficiency."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Powered Automation for SaaS
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Supercharge your SaaS operations with AI-driven automation, boosting efficiency, scalability, and performance.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black text-black hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
