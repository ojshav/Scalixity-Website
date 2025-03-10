"use client";

import { motion } from 'framer-motion';

const foodTechStack = [
  {
    title: "AI-Powered Recipe Development",
    description: "Utilize AI algorithms to create innovative recipes by analyzing flavor profiles, nutritional values, and consumer preferences.",
  },
  {
    title: "Smart Quality Control",
    description: "Implement AI-driven inspection systems to detect product inconsistencies and ensure food safety.",
  },
  {
    title: "Supply Chain Optimization",
    description: "Leverage AI to forecast demand, manage inventory, and streamline food distribution logistics.",
  },
  {
    title: "Predictive Equipment Maintenance",
    description: "Use AI to monitor kitchen equipment and manufacturing machinery, preventing unexpected breakdowns.",
  },
  {
    title: "Personalized Nutrition Solutions",
    description: "Offer AI-powered dietary recommendations tailored to individual health data and preferences.",
  },
  {
    title: "Food Waste Management",
    description: "Implement AI to track and minimize food waste, optimizing production and reducing environmental impact.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-12">AI Tech Stack in Food Industry</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodTechStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:shadow-lg transition-transform transform hover:scale-105"
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
