"use client";

import { motion } from 'framer-motion';

const manufacturingUseCases = [
  {
    title: "Predictive Maintenance",
    description: "Harness AI to foresee equipment failures before they happen, slashing downtime and saving costs. Stay a step ahead of breakdowns!"
  },
  {
    title: "Smart Quality Control",
    description: "Let AI-powered vision systems catch even the tiniest defects in real-time. Flawless products, happy customers — every time."
  },
  {
    title: "Supply Chain Supercharging",
    description: "Predict demand, streamline logistics, and optimize inventory with AI. No more stockouts or surplus — just seamless operations."
  },
  {
    title: "Intelligent Production Lines",
    description: "Automate repetitive tasks with AI and robotics, cranking up speed and accuracy. More output, less hassle."
  },
  {
    title: "Energy Efficiency Mastery",
    description: "AI keeps an eye on your energy consumption, fine-tuning it for peak efficiency. Save the planet and your budget."
  },
  {
    title: "Bespoke Product Design",
    description: "Craft personalized products using AI insights. Tailor designs to your customers’ desires and watch satisfaction soar."
  }
];

export function UseCases() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">
          AI-Powered Innovations in Manufacturing
        </h2>
        <p className="text-xl text-white text-opacity-80 max-w-3xl mx-auto mb-16">
          Supercharge your manufacturing processes with cutting-edge AI solutions. From predictive maintenance to smart quality control, let innovation drive your success.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {manufacturingUseCases.map((useCase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-purple-600 p-6 rounded-lg shadow-lg text-left w-full sm:w-2/5 md:w-1/3 lg:w-1/4 transform"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {useCase.title}
              </h3>
              <p className="text-white text-opacity-80 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
