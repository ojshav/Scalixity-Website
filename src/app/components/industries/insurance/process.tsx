"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    step: "01",
    title: "Data Collection & Preparation",
    description: "Gather raw data from diverse sources and clean it for AI model training, ensuring accuracy and completeness."
  },
  {
    step: "02",
    title: "Model Development",
    description: "Design and train AI models tailored to insurance needs—risk assessment, fraud detection, and customer insights."
  },
  {
    step: "03",
    title: "Integration & Deployment",
    description: "Seamlessly integrate AI models into existing insurance platforms, ensuring smooth functionality and real-time processing."
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuously track AI performance, refine algorithms, and adapt to evolving data patterns for peak efficiency."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-12">Our AI Process for Insurance Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
            >
              <span className="text-4xl font-extrabold text-black">{step.step}</span>
              <h3 className="text-2xl font-bold text-black mt-4 mb-2">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
