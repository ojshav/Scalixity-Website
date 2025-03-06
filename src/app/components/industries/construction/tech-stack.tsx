"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Building Information Modeling (BIM)",
    description: "Utilize AI-powered BIM to create intelligent 3D models, optimizing design, construction, and maintenance workflows.",
  },
  {
    title: "Drones & AI Imaging",
    description: "Deploy drones equipped with AI to survey sites, track progress, and identify potential hazards with precision.",
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI to forecast project timelines, resource needs, and cost estimates based on historical data.",
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Automate repetitive tasks like scheduling, documentation, and compliance checks for streamlined operations.",
  },
  {
    title: "IoT & Smart Sensors",
    description: "Integrate IoT devices to monitor equipment health, track material usage, and enhance site safety.",
  },
  {
    title: "AI-Powered Safety Systems",
    description: "Implement AI algorithms to detect unsafe practices in real-time, preventing accidents and ensuring compliance.",
  },
];

export function TechStack() {
  return (
    <section className="bg-gradient-to-br from-yellow-700 via-orange-600 to-red-700 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">AI Tech Stack in Construction</h2>
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
