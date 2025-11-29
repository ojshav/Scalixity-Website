"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Code, Database, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Cloud,
    title: "Scalable Cloud Infrastructure",
    description: "AI optimizes cloud resources, ensuring high performance and cost savings for SaaS platforms."
  },
  {
    icon: Server,
    title: "Proactive System Maintenance",
    description: "Predictive AI models prevent downtime by forecasting server issues and scheduling maintenance."
  },
  {
    icon: Code,
    title: "Accelerated Development Cycles",
    description: "AI-powered code generation and error detection speed up software deployment."
  },
  {
    icon: Database,
    title: "Enhanced Data Analytics",
    description: "AI processes large datasets efficiently, delivering actionable insights for business decisions."
  },
  {
    icon: Shield,
    title: "Robust Security Measures",
    description: "AI-driven security systems detect and mitigate threats, ensuring data integrity."
  },
  {
    icon: TrendingUp,
    title: "Customer-Centric Growth",
    description: "AI analyzes user behavior patterns to create personalized experiences and boost retention."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI in SaaS Solutions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover how AI empowers SaaS — enhancing scalability, security, and user experiences to drive business success.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
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
