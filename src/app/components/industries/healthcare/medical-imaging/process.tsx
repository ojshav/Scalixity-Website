"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Understanding Imaging Needs",
    description: "We begin by identifying your medical imaging requirements, target patient outcomes, and the diagnostic challenges you aim to solve."
  },
  {
    title: "Defining AI Model Capabilities",
    description: "Our experts outline the AI model's functionalities — from image classification and segmentation to anomaly detection and predictive analytics."
  },
  {
    title: "Model Development & Training",
    description: "We build and train AI models using advanced algorithms, ensuring high accuracy, speed, and adaptability for medical imaging tasks."
  },
  {
    title: "Seamless Integration",
    description: "We integrate AI solutions into your medical imaging systems, connecting with PACS, EMR, and other healthcare platforms."
  },
  {
    title: "Testing & Continuous Optimization",
    description: "Our AI models undergo rigorous testing, followed by performance monitoring and fine-tuning for optimal diagnostic accuracy and efficiency."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Medical Imaging Intelligence Process
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From data collection to deployment, we build AI-powered imaging solutions that enhance diagnostic precision and streamline medical workflows.
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
