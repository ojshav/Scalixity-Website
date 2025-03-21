"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Genomic Data Collection & Integration",
    description: "We gather patient-specific genomic data from sequencing technologies, electronic health records (EHRs), and clinical trials, ensuring seamless integration."
  },
  {
    title: "Data Cleaning & Normalization",
    description: "Raw data is processed and normalized to remove errors, ensuring consistency and preparing it for AI analysis."
  },
  {
    title: "AI Model Development",
    description: "Advanced AI models are designed to identify genetic markers, predict disease risks, and recommend tailored treatment plans."
  },
  {
    title: "Real-Time Insights & Visualization",
    description: "We create interactive dashboards to provide real-time visualizations of patient data, helping clinicians make informed decisions."
  },
  {
    title: "Continuous Model Optimization",
    description: "AI models are continuously monitored and updated to improve accuracy, ensuring up-to-date personalized medicine insights."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Personalised Medicine Platform Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From genomic data collection to AI-driven insights, our step-by-step process ensures precision medicine tailored to individual patients.
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
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
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
