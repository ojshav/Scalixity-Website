"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Machine Learning Models",
    description: "Implement advanced ML algorithms to predict risks, detect fraud, and personalize insurance policies.",
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Use NLP to automate claims processing, customer support, and document analysis.",
  },
  {
    title: "Predictive Analytics",
    description: "Analyze historical data to forecast trends, helping insurers make data-driven decisions.",
  },
  {
    title: "Computer Vision",
    description: "Leverage AI to assess damage from images or videos for quick claim validation.",
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Streamline repetitive tasks like form processing and underwriting with RPA bots.",
  },
  {
    title: "Blockchain Integration",
    description: "Ensure secure data sharing and transparent policy management using blockchain technology.",
  },
];

export function TechStack() {
  return (
    <section className="bg-gradient-to-br from-[#6D28D9] via-[#9333EA] to-[#0F172A] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">AI Tech Stack in Insurance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2A0E61] p-8 rounded-xl border border-[#5B21B6] hover:border-[#9333EA] transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
