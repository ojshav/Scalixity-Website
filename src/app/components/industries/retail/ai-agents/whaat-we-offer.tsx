"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Personalized Shopping Assistants",
    description: "AI agents that guide customers through tailored product recommendations, helping them discover items that match their preferences and past purchases."
  },
  {
    title: "Smart Inventory Management",
    description: "Optimize stock levels by using AI agents to predict demand, prevent overstock or stockouts, and automate restocking alerts."
  },
  {
    title: "Customer Support Automation",
    description: "Deploy AI chatbots for instant responses to customer inquiries, from order tracking to product details, ensuring 24/7 support."
  },
  {
    title: "Dynamic Pricing Strategies",
    description: "Utilize AI agents to analyze competitor pricing, market trends, and demand shifts — adjusting your prices in real-time for maximum profitability."
  },
  {
    title: "Sales Forecasting & Insights",
    description: "Empower your business with AI-driven sales predictions, helping you strategize promotions, product launches, and seasonal campaigns."
  },
  {
    title: "Omnichannel Experience Enhancement",
    description: "Seamlessly connect online and offline shopping by integrating AI agents across your website, app, and physical stores for a unified customer journey."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Agent Solutions for Retail
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform retail experiences with AI agents — from personalized shopping journeys to predictive insights. Streamline operations, boost sales, and captivate customers with smart automation.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-[#6B5B95] shadow-lg hover:border-[#4A3F6D] transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
