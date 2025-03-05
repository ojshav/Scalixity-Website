"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Data Collection & Integration",
    description: "We gather and integrate user data from multiple sources, including website interactions, app usage, and customer feedback."
  },
  {
    title: "Data Preprocessing & Cleaning",
    description: "Raw data is cleaned and normalized to eliminate errors, ensuring high-quality input for AI models."
  },
  {
    title: "AI Model Training",
    description: "Our AI models are trained on historical data to identify patterns, predict behaviors, and personalize user experiences."
  },
  {
    title: "Real-Time Personalization Deployment",
    description: "We implement AI algorithms to deliver dynamic content, personalized recommendations, and tailored user journeys instantly."
  },
  {
    title: "Continuous Monitoring & Optimization",
    description: "The AI models are continuously monitored and optimized to adapt to new data and user behavior, ensuring ongoing effectiveness."
  }
];

export function Process() {
  return (
    <section className="bg-gradient-to-r from-[#5B1DAF] to-[#8E44AD] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-white/80">PROCESS</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Our AI SaaS Personalization Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how we harness AI to transform your SaaS platform step-by-step — from data collection to continuous optimization.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-white/20 text-[#5B1DAF]"
            >
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-[#5B1DAF]/80 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
