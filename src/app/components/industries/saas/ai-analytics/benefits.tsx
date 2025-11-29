"use client";

import { motion } from "framer-motion";
import { BarChart3, LineChart, Database, TrendingUp, ShieldCheck, Brain } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Advanced Data Visualization",
    description: "Transform raw data into interactive dashboards and reports for actionable insights."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Utilize AI-driven forecasting to anticipate market trends and optimize business strategies."
  },
  {
    icon: Database,
    title: "Automated Data Processing",
    description: "Streamline data collection, cleansing, and integration with intelligent automation."
  },
  {
    icon: TrendingUp,
    title: "Real-Time Performance Monitoring",
    description: "Continuously track key performance indicators (KPIs) to enhance decision-making."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security & Compliance",
    description: "Leverage AI to detect anomalies, prevent fraud, and ensure regulatory compliance."
  },
  {
    icon: Brain,
    title: "AI-Powered Decision Support",
    description: "Empower executives with AI-generated recommendations for strategic growth."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI Analytics in SaaS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock AI-driven insights to optimize performance, security, and decision-making in SaaS platforms.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black flex flex-col items-center text-center"
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
