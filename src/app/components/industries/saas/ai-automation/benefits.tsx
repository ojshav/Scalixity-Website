"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Server, Settings2, ShieldCheck, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "Automated Customer Support",
    description: "AI-driven chatbots provide instant, 24/7 customer support, improving response times and satisfaction."
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Process Optimization",
    description: "AI streamlines SaaS workflows, reducing manual effort and improving operational efficiency."
  },
  {
    icon: Server,
    title: "Smart Resource Allocation",
    description: "AI dynamically optimizes cloud resources, reducing costs while maintaining peak performance."
  },
  {
    icon: Settings2,
    title: "Predictive Maintenance",
    description: "Prevent system failures and downtime with AI-driven monitoring and proactive issue resolution."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security & Compliance",
    description: "AI continuously monitors threats, ensuring data protection and regulatory compliance."
  },
  {
    icon: BarChart3,
    title: "Advanced AI Analytics",
    description: "Leverage AI-powered analytics to extract insights, enhance decision-making, and drive business growth."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#F3F1EB] py-24 border-b border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI in SaaS Automation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock AI-driven automation to enhance efficiency, security, and intelligence in your SaaS platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
