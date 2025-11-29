"use client";

import { motion } from "framer-motion";

const offerings = [
  {
    title: "Custom AI Chatbot Solutions",
    description: "Tailored chatbot systems designed to meet specific enterprise needs, ensuring personalized and intelligent user interactions."
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Advanced NLP algorithms to understand user intent, context, and sentiment, providing accurate and human-like responses."
  },
  {
    title: "Omnichannel Integration",
    description: "Seamlessly deploy chatbots across multiple platforms — web, mobile apps, social media, and enterprise communication tools."
  },
  {
    title: "Automated Workflow & Task Management",
    description: "Enable AI chatbots to automate routine tasks, ticket generation, appointment scheduling, and data retrieval."
  },
  {
    title: "Real-time Analytics & Insights",
    description: "Monitor chatbot performance with real-time data analysis, user feedback, and continuous improvement strategies."
  },
  {
    title: "Scalable AI Solutions",
    description: "Design AI chatbots that scale effortlessly with your business growth, ensuring consistent performance and user experience."
  }
];

export function WhatWeOffer() {
  return (
    <section className="py-20 bg-[#590178]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">What We Offer in Enterprise Chatbot AI Development</h2>
        <p className="text-lg text-white mb-12">
          Empower your business with AI chatbots — streamlining customer support, automating workflows, and delivering seamless user experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border-2 border-black bg-[#F3F1EB] text-black hover:border-gray-700 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
              <p>{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
