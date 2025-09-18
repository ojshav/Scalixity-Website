"use client";

import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Smart Site Monitoring",
    description: "Use AI-powered cameras and drones to monitor construction sites, ensuring safety compliance and tracking project progress in real-time.",
  },
  {
    title: "Predictive Maintenance",
    description: "AI algorithms forecast equipment failures, allowing proactive repairs and minimizing downtime.",
  },
  {
    title: "Automated Project Scheduling",
    description: "Optimize timelines by letting AI analyze variables like weather, supply chains, and labor availability.",
  },
  {
    title: "Material Optimization",
    description: "AI models suggest the best materials based on cost, durability, and environmental impact, reducing waste.",
  },
  {
    title: "Enhanced Safety Measures",
    description: "AI systems detect hazards on-site and alert workers instantly, improving overall site safety.",
  },
  {
    title: "Dynamic Cost Estimation",
    description: "Utilize AI to create adaptive cost models, adjusting budgets with real-time data and market changes.",
  }
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold font-sans text-black mb-12 tracking-wider"
        >
          AI Use Cases Reshaping Construction
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-10 rounded-3xl shadow-2xl border-t-4 border-black hover:border-black transition-all"
            >
              <h3 className="text-3xl font-bold text-black mb-4">{useCase.title}</h3>
              <p className="text-black leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
