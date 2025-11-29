"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    step: "01",
    title: "Data Collection & Analysis",
    description: "AI aggregates and analyzes financial data to uncover trends, detect fraud, and optimize decision-making."
  },
  {
    step: "02",
    title: "Risk Assessment & Compliance",
    description: "Machine learning models evaluate risks, ensure regulatory compliance, and enhance financial security."
  },
  {
    step: "03",
    title: "Automated Financial Insights",
    description: "AI generates real-time reports, forecasts market trends, and provides actionable business intelligence."
  },
  {
    step: "04",
    title: "Customer Experience Optimization",
    description: "AI-powered chatbots and recommendation engines personalize user interactions and improve customer satisfaction."
  }
];

export function Process() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">Our AI-Driven Fintech Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:scale-105 transition-transform"
            >
              <span className="text-4xl font-extrabold text-black">{step.step}</span>
              <h3 className="text-2xl font-bold text-black mt-4 mb-2">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
