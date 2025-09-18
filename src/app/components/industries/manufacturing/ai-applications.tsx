"use client";

import { motion } from 'framer-motion';

const manufacturingServices = [
  {
    title: "AI-Driven Predictive Maintenance",
    description: "Leverage AI algorithms to forecast equipment failures before they happen, reducing downtime and optimizing maintenance schedules."
  },
  {
    title: "Smart Quality Control",
    description: "Use AI-powered vision systems to detect product defects and ensure consistent quality, improving production efficiency."
  },
  {
    title: "Supply Chain Optimization",
    description: "AI analyzes data from suppliers, logistics, and production lines to streamline inventory management and reduce delays."
  },
  {
    title: "Demand Forecasting",
    description: "Predict future product demand with AI models, allowing manufacturers to better align production with market needs."
  },
  {
    title: "AI-Powered Process Automation",
    description: "Automate repetitive manufacturing tasks using AI, boosting productivity and minimizing human error."
  },
  {
    title: "Energy Efficiency Enhancement",
    description: "AI optimizes energy consumption across production lines, cutting costs and reducing environmental impact."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-black mb-12"
        >
          AI Applications in Manufacturing
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {manufacturingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black text-opacity-80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
