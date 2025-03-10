"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, BarChart3, Settings2, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Empower SaaS platforms with AI-driven automation, streamlining workflows and reducing manual efforts."
  },
  {
    icon: BrainCircuit,
    title: "Context-Aware Assistance",
    description: "AI Copilot understands user context, providing real-time recommendations and decision support."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Harness AI analytics to extract valuable insights, optimize strategies, and improve SaaS performance."
  },
  {
    icon: Settings2,
    title: "Seamless API Integration",
    description: "Effortlessly integrate AI capabilities into existing SaaS infrastructures with minimal disruption."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "AI-driven monitoring ensures data security, regulatory compliance, and proactive threat detection."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Copilot Workflow for SaaS
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Enhance your SaaS platform with AI-powered copilots, driving automation, insights, and operational efficiency.
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
                  <step.icon className="w-6 h-6 text-black" />
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
