"use client";

import { motion } from "framer-motion";
import { Brain, BarChart, ShieldCheck, TrendingUp, Cog, Database } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Advanced Data Insights",
    description: "Leverage ML to uncover hidden patterns, trends, and correlations in your data for better decision-making.",
  },
  {
    icon: BarChart,
    title: "Enhanced Business Efficiency",
    description: "Automate repetitive tasks, optimize workflows, and improve overall operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Improved Security & Fraud Detection",
    description: "Identify anomalies, detect fraud, and enhance cybersecurity with AI-driven threat intelligence.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Use ML models to forecast trends, customer behavior, and market changes to stay ahead of competitors.",
  },
  {
    icon: Cog,
    title: "Scalability & Adaptability",
    description: "ML solutions can be tailored and scaled to meet evolving business needs and industry demands.",
  },
  {
    icon: Database,
    title: "Optimized Data Management",
    description: "Process, analyze, and utilize large datasets efficiently for deeper business insights and better decision-making.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">BENEFITS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Invest in Machine Learning Development?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Harness the power of ML to optimize processes, enhance security, and drive innovation in your business.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
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
