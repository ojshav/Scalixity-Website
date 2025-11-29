"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "AI-Driven Task Automation",
    description: "Implement AI to automate repetitive SaaS workflows, minimizing manual effort and increasing efficiency."
  },
  {
    title: "Intelligent Data Processing",
    description: "Utilizing AI to process vast amounts of SaaS data, extracting valuable insights and optimizing operations."
  },
  {
    title: "Smart Customer Interactions",
    description: "AI-powered chatbots and virtual assistants provide real-time customer support and engagement."
  },
  {
    title: "Adaptive AI Learning",
    description: "Continuous improvement through AI models learning from user interactions and adapting to changing needs."
  },
  {
    title: "Seamless AI Integration",
    description: "Ensuring smooth AI adoption within your SaaS platform to enhance functionality without disrupting workflows."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Driven SaaS Automation Workflow
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI-powered automation seamlessly integrates into your SaaS platform, enhancing efficiency and performance.
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
                  <div className="w-2 h-2 bg-[#F3F1EB] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
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
