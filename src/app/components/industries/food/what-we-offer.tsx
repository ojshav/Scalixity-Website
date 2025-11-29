"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Smart Inventory Management",
    description: "Optimize ingredient tracking and stock levels with AI-powered inventory systems to minimize waste and maximize efficiency."
  },
  {
    title: "Automated Food Processing",
    description: "Enhance food preparation with automated machines and AI-driven quality control for consistent product excellence."
  },
  {
    title: "AI-Powered Menu Personalization",
    description: "Leverage customer data to recommend tailored menu options based on dietary preferences, past orders, and trends."
  },
  {
    title: "Supply Chain Optimization",
    description: "Use real-time analytics to ensure fresh ingredients, reduce transportation costs, and maintain seamless supply chain operations."
  },
  {
    title: "Food Safety & Compliance Monitoring",
    description: "Ensure adherence to food safety standards with AI-powered monitoring systems that detect contamination risks in real-time."
  },
  {
    title: "Customer Engagement & Marketing Automation",
    description: "Boost customer loyalty with AI-driven marketing campaigns, personalized promotions, and automated engagement strategies."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Transforming the Food Industry with Innovation
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Elevate your food business with cutting-edge technology, automation, and AI-driven insights for seamless operations and superior customer experience.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
