"use client";

import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Data Collection & Analysis", description: "Gather real-time data from machines, sensors, and supply chains — the fuel for AI-powered insights." },
  { number: "02", title: "Model Development", description: "Craft AI algorithms fine-tuned for predictive maintenance, quality control, and process optimization." },
  { number: "03", title: "Testing & Validation", description: "Run simulations, validate AI models, and ensure they’re ready to tackle manufacturing challenges head-on." },
  { number: "04", title: "Integration", description: "Seamlessly blend AI solutions into your workflows — no disruptions, just smarter operations." },
  { number: "05", title: "Monitoring & Optimization", description: "AI evolves. We keep a pulse on its performance, refining models as your processes shift." },
  { number: "06", title: "Training & Support", description: "Empower your team with AI expertise through hands-on training and continuous support." }
];

export function Process() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4">Revolutionizing Manufacturing with AI</h2>
          <p className="text-lg max-w-2xl mx-auto">Not just steps — but a dynamic, interconnected AI journey designed to elevate your manufacturing processes.</p>
        </div>

        <div className="flex flex-col items-center space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-8 p-6 rounded-full bg-white/10 shadow-lg max-w-3xl w-full hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-indigo-600 text-2xl font-bold shadow-md">{step.number}</div>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-white/80 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute -top-40 -left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-30" />
      </div>
    </section>
  );
}

export default Process;

