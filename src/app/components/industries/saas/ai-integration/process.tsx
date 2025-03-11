"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Settings2, ShieldCheck,  Cpu, Sparkles } from "lucide-react";

const processSteps = [
  {
    icon: Cpu,
    title: "AI-Driven SaaS Integration",
    description: "Seamlessly integrate AI capabilities into SaaS platforms, enhancing automation and decision-making."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Data Processing",
    description: "Utilize AI to process, analyze, and extract insights from large datasets with minimal manual effort."
  },
  {
    icon: BarChart3,
    title: "Advanced Predictive Analytics",
    description: "Leverage AI-powered analytics to forecast trends, optimize strategies, and drive business growth."
  },
  {
    icon: Settings2,
    title: "Custom AI Workflow Automation",
    description: "Automate complex SaaS workflows using adaptive AI models tailored to business needs."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security & Compliance",
    description: "AI-driven compliance monitoring and security protocols ensure data integrity and regulatory adherence."
  },
  {
    icon: Sparkles,
    title: "Scalable AI Solutions",
    description: "Deploy AI models that scale with business demands, optimizing performance across SaaS platforms."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Powered SaaS Integration Workflow
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Implement AI-driven automation, intelligent analytics, and workflow optimization to enhance SaaS efficiency.
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
