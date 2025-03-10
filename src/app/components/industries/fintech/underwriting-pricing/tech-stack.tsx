"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Risk Assessment Models",
    description: "Leverage AI algorithms to assess credit risk, predict defaults, and enhance underwriting decisions.",
  },
  {
    title: "Automated Data Processing",
    description: "Integrate AI to extract insights from financial documents, automating data entry and validation.",
  },
  {
    title: "Dynamic Pricing Algorithms",
    description: "Utilize machine learning models to set personalized pricing strategies based on real-time data.",
  },
  {
    title: "Fraud Detection Systems",
    description: "Deploy AI models to identify suspicious patterns and mitigate financial fraud in underwriting.",
  },
  {
    title: "Predictive Analytics",
    description: "Analyze historical data to forecast future trends, helping financial institutions optimize pricing models.",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate AI models into existing fintech platforms for real-time underwriting and pricing.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-12">Tech Stack for Underwriting & Pricing</h2>
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
