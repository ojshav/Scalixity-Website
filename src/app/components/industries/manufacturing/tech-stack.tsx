"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Predictive Maintenance",
    description: "Use AI algorithms to forecast equipment failures and schedule timely maintenance, reducing unexpected downtimes.",
  },
  {
    title: "Quality Control & Inspection",
    description: "Implement AI-powered visual inspection systems to detect product defects with high accuracy and speed.",
  },
  {
    title: "Supply Chain Optimization",
    description: "Leverage AI to predict demand, manage inventory, and streamline logistics for a more efficient supply chain.",
  },
  {
    title: "Robotics & Automation",
    description: "Integrate AI-driven robots to automate repetitive tasks, enhancing production speed and precision.",
  },
  {
    title: "IoT & Smart Sensors",
    description: "Connect IoT devices to monitor machinery performance, track material flow, and gather real-time data.",
  },
  {
    title: "Digital Twin Technology",
    description: "Create AI-powered virtual replicas of physical assets to simulate processes and test optimizations in real-time.",
  },
];

export function TechStack() {
  return (
    <section className="bg-gradient-to-br from-yellow-700 via-orange-600 to-red-700 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">AI Tech Stack in Manufacturing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl border border-white border-opacity-20 hover:border-yellow-400 transition-colors transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-white text-opacity-80 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
