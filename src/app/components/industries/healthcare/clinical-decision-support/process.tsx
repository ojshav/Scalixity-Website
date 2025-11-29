"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Clinical Needs Assessment",
    description: "We collaborate with healthcare providers to understand their clinical challenges, workflows, and decision-making requirements."
  },
  {
    title: "Data Collection & Preparation",
    description: "Our team gathers, cleans, and structures clinical data — including EHRs, lab results, and research studies — ensuring data accuracy and security."
  },
  {
    title: "Model Development & Training",
    description: "We design AI models tailored to support diagnostics, risk assessments, and treatment recommendations, optimizing for accuracy and explainability."
  },
  {
    title: "Seamless Integration",
    description: "Integrating AI models into clinical workflows, connecting with EHR systems, medical devices, and hospital management software."
  },
  {
    title: "Validation & Continuous Optimization",
    description: "We rigorously test AI models against real-world data, ensuring clinical relevance, compliance, and ongoing performance improvements."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI-Driven Clinical Decision Support Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From data preparation to seamless integration, we design AI solutions that empower healthcare professionals with real-time, evidence-based insights.
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
                  <div className="w-2 h-2 bg-black rounded-full" />
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
