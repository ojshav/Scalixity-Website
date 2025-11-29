"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Requirement Gathering",
    description: "We collaborate to understand your business needs, defining AI goals, data sources, and technical requirements."
  },
  {
    title: "Data Collection & Preparation",
    description: "We gather, clean, and structure data, ensuring it's ready for model training and AI processing."
  },
  {
    title: "Model Development & Training",
    description: "Our AI experts build and train custom models using advanced algorithms tailored to your use case."
  },
  {
    title: "Testing & Validation",
    description: "We rigorously test AI models for accuracy, performance, and reliability, fine-tuning them for optimal results."
  },
  {
    title: "Deployment & Integration",
    description: "Your AI solution is deployed and integrated seamlessly into your existing systems for real-time use."
  },
  {
    title: "Monitoring & Continuous Improvement",
    description: "We provide ongoing support, tracking AI performance and retraining models to adapt to new data."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI Solutions Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From data collection to AI deployment, we ensure seamless, impactful AI solutions tailored to your business.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" />

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
                  <div className="w-2 h-2 bg-[#590178] rounded-full" />
                </div>
                
                <div className="bg-[#FFF2D5] p-8 rounded-xl border-2 border-black">
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
