"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, BarChart3, Settings2, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Enhance SaaS workflows with intelligent AI-driven automation, reducing manual effort and improving efficiency."
  },
  {
    icon: BrainCircuit,
    title: "Adaptive AI Assistance",
    description: "AI Copilot continuously learns from interactions, providing context-aware suggestions and support."
  },
  {
    icon: BarChart3,
    title: "Predictive Insights",
    description: "Utilize AI analytics to forecast trends, optimize decision-making, and enhance business intelligence."
  },
  {
    icon: Settings2,
    title: "Seamless Integration",
    description: "Easily integrate AI copilots into existing SaaS platforms with robust API and data connectivity."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "AI-driven compliance checks and security monitoring ensure data protection and regulatory adherence."
  },
  {
    icon: Sparkles,
    title: "Automated Workflows",
    description: "Orchestrate and streamline complex workflows with AI-powered automation, reducing operational overhead."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Copilot Solutions for SaaS Automation
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Empower your SaaS platform with AI-powered copilots that automate tasks, enhance decision-making, and boost productivity.
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
