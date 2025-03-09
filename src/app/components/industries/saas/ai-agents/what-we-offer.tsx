"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered SaaS Agents",
    description: "Deploy intelligent AI agents to automate workflows, enhance customer support, and optimize operations."
  },
  {
    title: "Real-Time Data Processing",
    description: "Leverage AI-driven analytics for instant insights, predictive modeling, and enhanced decision-making."
  },
  {
    title: "Conversational AI Assistants",
    description: "Enhance user engagement with AI-powered chatbots and virtual assistants that provide 24/7 support."
  },
  {
    title: "Scalable AI Integrations",
    description: "Seamlessly integrate AI models into your SaaS platform to enhance scalability and performance."
  },
  {
    title: "Autonomous Workflow Optimization",
    description: "Automate complex business processes using adaptive AI to boost efficiency and reduce costs."
  },
  {
    title: "Continuous Learning & AI Evolution",
    description: "AI agents improve over time, learning from interactions to deliver smarter, more efficient solutions."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#1a237e] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI-Powered SaaS Agents for Business Growth
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empower your SaaS platform with advanced AI-driven automation, analytics, and conversational intelligence for superior performance and user experience.
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
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">{service.title}</h3>
              <p className="text-[#1a237e]/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
