"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    step: "01",
    title: "Site Analysis & Planning",
    description: "Leverage AI to assess site conditions, analyze environmental factors, and optimize construction plans for efficiency and safety."
  },
  {
    step: "02",
    title: "Design & Modeling",
    description: "Use AI-powered tools to create 3D building models, simulate structural integrity, and refine designs based on real-time data."
  },
  {
    step: "03",
    title: "Resource Allocation & Scheduling",
    description: "AI predicts project timelines, allocates resources smartly, and ensures materials and workforce are optimized for minimal delays."
  },
  {
    step: "04",
    title: "Construction Monitoring & Optimization",
    description: "Real-time AI monitoring tracks progress, detects hazards, and suggests adjustments, keeping your project on track and safe."
  }
];

export function Process() {
  return (
    <section className="bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">Our AI-Driven Construction Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl border border-white border-opacity-20 hover:border-yellow-400 transition-colors transform hover:scale-105"
            >
              <span className="text-4xl font-extrabold text-yellow-400">{step.step}</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">{step.title}</h3>
              <p className="text-white text-opacity-80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
