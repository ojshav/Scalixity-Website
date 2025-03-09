"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Analysis",
    description: "We begin by understanding your documentation needs, data sources, and desired AI capabilities to tailor the solution."
  },
  {
    title: "Data Collection & Preparation",
    description: "Our team gathers relevant documents, cleans the data, and prepares it for AI model training."
  },
  {
    title: "Model Development & Training",
    description: "We build and train AI models to accurately extract, classify, and generate intelligent insights from documents."
  },
  {
    title: "Integration & Deployment",
    description: "Seamlessly integrate AI models into your existing documentation workflows and systems."
  },
  {
    title: "Testing & Continuous Optimization",
    description: "We rigorously test AI outputs, refine models, and ensure ongoing improvements for maximum accuracy and efficiency."
  }
];

export function Process() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-blue-800 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Our Documentation Intelligence Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From data preparation to AI-powered insights, our structured approach ensures smarter, faster, and more reliable documentation processes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/30" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-900 rounded-full" />
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-green-900 mb-4">{step.title}</h3>
                  <p className="text-green-900/80 leading-relaxed">{step.description}</p>
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
