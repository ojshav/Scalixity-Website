"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Data Collection & Integration",
    description: "We gather patient data from diverse sources — EHRs, medical devices, and lab reports — ensuring seamless integration."
  },
  {
    title: "Data Cleaning & Preprocessing",
    description: "Raw data is cleaned, standardized, and preprocessed to remove inconsistencies and prepare for AI model training."
  },
  {
    title: "AI Model Development",
    description: "Custom AI models are built to identify patterns, predict health outcomes, and uncover actionable insights."
  },
  {
    title: "Real-Time Analytics & Visualization",
    description: "We implement dashboards and tools for real-time data visualization, helping healthcare providers make informed decisions."
  },
  {
    title: "Validation & Continuous Optimization",
    description: "Models are rigorously validated for accuracy, with continuous optimization to enhance predictive capabilities."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Patient Data Analytics Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From data collection to AI-driven insights, our process ensures precision, efficiency, and impactful healthcare solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full" /> {/* Dot is now black */}
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
