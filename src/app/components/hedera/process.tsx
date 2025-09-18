"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Comprehensive Analysis & Strategic Planning",
    description:
      "We start by analyzing your business and data structures to uncover AI-driven opportunities that enhance efficiency and decision-making.",
  },
  {
    title: "Custom AI Solution Design & Prototype Development",
    description:
      "With a clear strategy, we design AI solutions and test prototypes for accuracy, scalability, and performance before full-scale implementation.",
  },
  {
    title: "Seamless Implementation & System Integration",
    description:
      "Once validated, we integrate AI into your workflows, ensuring a smooth transition with minimal disruptions to operations.",
  },
  {
    title: "Continuous Monitoring & Performance Optimization",
    description:
      "After deployment, we provide real-time monitoring and refinements to keep your AI solution efficient, adaptive, and future-ready.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI Implementation Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            At Scalixity, we blend strategy with innovation, ensuring seamless AI adoption that enhances efficiency, transparency, and growth.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/20" />

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
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
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
