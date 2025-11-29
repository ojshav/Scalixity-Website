"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Chatbot Solutions",
    description: "Deploy AI-driven chatbots to automate customer support, enhance user interaction, and streamline workflows."
  },
  {
    title: "Real-Time Conversational Intelligence",
    description: "Implement AI chatbots capable of understanding user intent, processing data instantly, and providing accurate responses."
  },
  {
    title: "Multi-Channel Integration",
    description: "Seamlessly connect AI chatbots across web, mobile, and social platforms for consistent user experiences."
  },
  {
    title: "Advanced NLP & Sentiment Analysis",
    description: "Enable AI chatbots to interpret language nuances, analyze sentiment, and adapt responses accordingly."
  },
  {
    title: "Scalable AI Chatbot Solutions",
    description: "Design AI chatbots that grow with your business, handling increasing user queries and data volumes effortlessly."
  },
  {
    title: "Continuous AI Model Optimization",
    description: "Ensure AI chatbots evolve by learning from interactions, improving accuracy, and boosting customer satisfaction."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Chatbot Development Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform your SaaS platform with intelligent AI chatbots, automating customer interactions, boosting engagement, and driving efficiency.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-black transition-colors"
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
