"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "AI-Powered Portfolio Optimization",
    description: "Utilize machine learning algorithms to design personalized investment strategies tailored to individual financial goals.",
  },
  {
    title: "Real-Time Data Analytics",
    description: "Leverage data streams and predictive analytics to provide instant insights for smarter financial decisions.",
  },
  {
    title: "Behavioral Finance Models",
    description: "Incorporate behavioral economics to understand customer biases and craft more effective financial plans.",
  },
  {
    title: "Cloud-Based Financial Planning",
    description: "Enable secure, scalable, and collaborative financial planning through cloud platforms.",
  },
  {
    title: "API Integration for Financial Data",
    description: "Seamlessly connect with banks, investment platforms, and fintech apps to pull real-time financial data.",
  },
  {
    title: "AI Chatbots for Financial Advisory",
    description: "Deploy intelligent virtual assistants to provide personalized financial advice and customer support.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-12">Tech Stack for Personalized Financial Engines</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{tech.title}</h3>
              <p className="text-black leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
