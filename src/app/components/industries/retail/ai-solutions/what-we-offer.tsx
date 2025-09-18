"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Product Recommendations",
    description: "Boost sales by offering customers personalized product suggestions based on their browsing patterns and purchase history."
  },
  {
    title: "Smart Inventory Optimization",
    description: "Utilize AI to forecast demand, prevent overstocking or stockouts, and ensure seamless inventory management."
  },
  {
    title: "Dynamic Pricing Algorithms",
    description: "Implement AI-driven pricing models that respond to real-time market conditions, competition, and customer demand."
  },
  {
    title: "Virtual Shopping Assistants",
    description: "Enhance customer experiences with AI chatbots that provide instant support, product details, and guided shopping experiences."
  },
  {
    title: "Customer Sentiment Analysis",
    description: "Harness AI to analyze customer feedback, uncover trends, and refine product offerings and marketing strategies."
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Safeguard transactions with AI agents that detect and prevent fraudulent activities in real-time."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Solutions for Retail Success
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your retail business with AI-driven solutions — from personalized shopping to fraud prevention. Let AI redefine how you connect with customers and optimize operations.
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
              className="bg-[#F5F5DC] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
