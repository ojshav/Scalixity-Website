"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Requirement Analysis",
    description: "We collaborate with your team to identify AI Copilot use cases, understand workflows, and define key functionalities tailored to your business needs."
  },
  {
    title: "Data Aggregation & Model Training",
    description: "We collect relevant data, fine-tune large language models (LLMs), and train AI copilots to understand context, automate tasks, and deliver intelligent suggestions."
  },
  {
    title: "AI Copilot Design & Prototyping",
    description: "We design user-centric AI interfaces, ensuring seamless interaction between AI copilots and end-users through intuitive and responsive UI/UX."
  },
  {
    title: "Integration with Business Systems",
    description: "We integrate AI copilots with your existing CRMs, ERPs, collaboration tools, and APIs, ensuring smooth workflow automation and enhanced productivity."
  },
  {
    title: "Testing & Optimization",
    description: "We rigorously test AI copilots, refine natural language understanding (NLU), and optimize models for accuracy, relevance, and speed."
  },
  {
    title: "Deployment & Continuous Improvement",
    description: "We deploy AI copilots across platforms and provide ongoing monitoring, feedback loops, and model updates to maximize efficiency and adaptability."
  }
];

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Copilot Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our systematic approach ensures AI Copilots are intelligent, efficient, and seamlessly integrated into your business workflows.
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
