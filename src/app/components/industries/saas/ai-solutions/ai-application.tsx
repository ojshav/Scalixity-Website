"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Code, Database, Shield, TrendingUp } from "lucide-react";

const saasSolutions = [
  {
    icon: Cloud,
    title: "AI-Powered Cloud Optimization",
    description: "Enhancing cloud resource management with AI algorithms for cost efficiency and performance."
  },
  {
    icon: Server,
    title: "Predictive Server Maintenance",
    description: "Utilizing AI to forecast server failures and automate maintenance schedules."
  },
  {
    icon: Code,
    title: "Intelligent Code Automation",
    description: "AI-driven code generation and bug detection to accelerate software development."
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "AI models streamlining data processing, analysis, and storage for SaaS platforms."
  },
  {
    icon: Shield,
    title: "AI Security Solutions",
    description: "Strengthening cybersecurity with AI-based threat detection and prevention systems."
  },
  {
    icon: TrendingUp,
    title: "Customer Insights & Analytics",
    description: "Leveraging AI to analyze user behavior, providing actionable insights for growth."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">AI SOLUTIONS FOR SAAS INDUSTRY</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Empowering SaaS with AI-Driven Innovations
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore how AI is revolutionizing SaaS — from intelligent automation to predictive analytics, driving growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <solution.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{solution.title}</h3>
              <p className="text-black">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
