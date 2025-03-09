"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Goal Setting",
    description: "We start by understanding your business challenges, identifying how AI can enhance customer experiences, streamline operations, and drive data-driven decisions."
  },
  {
    title: "Defining AI Capabilities",
    description: "Our team outlines AI agent functionalities tailored to your needs — be it predictive analytics, chatbots, or intelligent automation."
  },
  {
    title: "Model Development & Training",
    description: "We design and train AI models using your data, ensuring they deliver precise insights and automate key processes."
  },
  {
    title: "Seamless Integration",
    description: "Integrating AI agents into your existing platforms — CRMs, databases, and apps — for smooth workflows and real-time data exchange."
  },
  {
    title: "Testing & Optimization",
    description: "We rigorously test AI performance, fine-tuning models for accuracy, speed, and adaptability to ever-evolving business needs."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            How We Develop AI Agent Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From strategy to deployment, we build AI agents that seamlessly integrate into your ecosystem and drive business growth.
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

                <div className="bg-[#F5F5DC] p-8 rounded-xl border border-black/20">
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