"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Chatbot Integration",
    description: "Seamlessly embed AI chatbots into your SaaS platform to handle customer queries and automate interactions."
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Leverage NLP to ensure chatbots understand user intent and provide accurate, context-aware responses."
  },
  {
    title: "Customizable Conversational Flows",
    description: "Design tailored chatbot workflows that align with your business logic and customer needs."
  },
  {
    title: "Real-Time Analytics & Insights",
    description: "Monitor chatbot performance with AI-driven analytics, identifying trends and optimizing responses."
  },
  {
    title: "Continuous Learning & Improvement",
    description: "AI chatbots evolve through machine learning, adapting to user interactions for smarter conversations."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Chatbot Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI chatbot integration process empowers your SaaS platform with intelligent, responsive, and dynamic virtual assistants.
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
                  <div className="w-2 h-2 bg-[#F3F1EB] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black">
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
