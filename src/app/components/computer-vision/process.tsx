"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Analysis & Strategy",
    description: "We assess business needs and define a roadmap for computer vision solutions, ensuring alignment with industry requirements and use cases."
  },
  {
    title: "Data Collection & Preprocessing",
    description: "We gather high-quality datasets, clean and annotate images/videos, and apply preprocessing techniques to optimize model performance."
  },
  {
    title: "Model Development & Training",
    description: "Using state-of-the-art deep learning architectures, we train and fine-tune custom models for tasks like object detection, image classification, and facial recognition."
  },
  {
    title: "Model Optimization & Security",
    description: "We enhance performance with quantization, pruning, and edge deployment while ensuring model security and data privacy."
  },
  {
    title: "Deployment & Integration",
    description: "We seamlessly integrate computer vision models into cloud, mobile, or edge devices, ensuring real-time inference and scalability."
  },
  {
    title: "Monitoring & Continuous Improvement",
    description: "We provide ongoing monitoring, updates, and refinements based on user feedback and evolving industry needs."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Computer Vision Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach ensures accurate, scalable, and high-performance computer vision solutions tailored to your business needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
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
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 top-2 w-[30px] h-[30px] rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB' }}
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                
                <div 
                  className="p-8 rounded-xl border-2 border-black"
                  style={{ backgroundColor: '#F3F1EB', color: 'black' }}
                >
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed">{step.description}</p>
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
