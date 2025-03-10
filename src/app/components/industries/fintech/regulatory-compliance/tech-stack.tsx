"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "Automated Compliance Monitoring",
    description: "Use AI-driven tools to continuously monitor regulatory updates and ensure compliance with evolving financial laws.",
  },
  {
    title: "Regulatory Change Management Systems",
    description: "Implement structured systems to track, analyze, and implement regulatory code changes seamlessly.",
  },
  {
    title: "AI-Powered Legal Document Analysis",
    description: "Leverage natural language processing (NLP) to extract key insights from legal and compliance documents.",
  },
  {
    title: "Cloud-Based Compliance Solutions",
    description: "Utilize cloud platforms to enable real-time updates, risk assessments, and collaborative regulatory workflows.",
  },
  {
    title: "Blockchain for Transparent Audits",
    description: "Enhance security and transparency in compliance audits with blockchain-based immutable records.",
  },
  {
    title: "API Integration for Compliance Updates",
    description: "Seamlessly integrate real-time regulatory updates into existing fintech systems through secure API connections.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-12">Tech Stack for Regulatory Code Change Services</h2>
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
