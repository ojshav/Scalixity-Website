"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Identifying Retail Challenges",
    description: "We begin by understanding your retail goals — from boosting customer engagement to optimizing supply chains."
  },
  {
    title: "Defining AI Capabilities",
    description: "We outline AI-driven solutions like predictive analytics, dynamic pricing, and personalized shopping experiences."
  },
  {
    title: "Developing AI Models",
    description: "Our team crafts machine learning models tailored to your retail needs, ensuring accurate data-driven decisions."
  },
  {
    title: "System Integration",
    description: "Seamlessly integrate AI into your POS systems, CRM platforms, and online storefronts for real-time operations."
  },
  {
    title: "Testing & Optimization",
    description: "We rigorously test AI models, fine-tuning algorithms for precision, speed, and customer satisfaction."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our AI Process for Retail Solutions
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From discovery to deployment, we design AI solutions that elevate retail experiences and maximize profitability.
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

                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md">
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
