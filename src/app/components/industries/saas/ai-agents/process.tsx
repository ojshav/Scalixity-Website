"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "AI-Driven Data Analysis",
    description: "Utilizing AI to process vast amounts of SaaS data, identifying patterns and extracting actionable insights."
  },
  {
    title: "Automated Customer Interaction",
    description: "Deploying AI agents to handle customer inquiries, support requests, and engagement autonomously."
  },
  {
    title: "Workflow Automation",
    description: "Integrating AI to optimize SaaS operations, reducing manual tasks and increasing efficiency."
  },
  {
    title: "Real-Time Decision Making",
    description: "Enabling AI-powered decision-making processes to dynamically adapt and improve SaaS functionalities."
  },
  {
    title: "Continuous Learning & Optimization",
    description: "AI models consistently evolve, learning from interactions and refining their capabilities over time."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Agent Integration for SaaS
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Our structured process ensures seamless integration of AI-powered agents into your SaaS platform for maximum efficiency and automation.
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
                
                <div className="bg-white p-8 rounded-xl border border-black">
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
