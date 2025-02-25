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
    <section className="bg-gradient-to-r from-[#0F172A] via-[#14B8A6] to-[#9333EA] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">AI Use Cases in Construction</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0F172A] p-8 rounded-xl border border-[#14B8A6] hover:border-[#9333EA] transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
