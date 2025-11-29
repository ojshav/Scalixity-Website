"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Machine Learning Algorithms",
    description: "Harness advanced ML models for fraud detection, risk assessment, and financial forecasting."
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Utilize NLP for chatbots, sentiment analysis, and automated financial reporting."
  },
  {
    title: "Blockchain & Smart Contracts",
    description: "Enhance security and transparency in financial transactions with blockchain technology."
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI-driven insights to optimize investment strategies and customer financial behavior."
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Automate routine banking and compliance tasks to improve efficiency and reduce errors."
  },
  {
    title: "AI-Powered Risk Management",
    description: "Detect anomalies and mitigate financial risks in real-time using AI-driven monitoring."
  }
];

export function TechStack() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">AI Tech Stack in Fintech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:scale-105 transition-transform"
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
