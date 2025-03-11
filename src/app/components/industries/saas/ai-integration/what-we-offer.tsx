"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Settings2, ShieldCheck,  Cpu, Sparkles } from "lucide-react";

const services = [
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

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Powered SaaS Integration & Automation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Enhance your SaaS capabilities with AI-driven automation, predictive analytics, and intelligent data processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:shadow-lg transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-black mr-3" />
                <h3 className="text-xl font-bold text-black">{service.title}</h3>
              </div>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
