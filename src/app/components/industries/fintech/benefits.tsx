"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BarChart, PieChart, Lock, Wallet, Globe } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "Utilize AI to detect fraud in real-time, safeguard transactions, and prevent unauthorized access with advanced threat detection algorithms."
  },
  {
    icon: BarChart,
    title: "Data-Driven Decision Making",
    description: "Empower financial strategies with AI-powered insights, allowing firms to make informed, data-backed decisions with precision."
  },
  {
    icon: PieChart,
    title: "Optimized Investment Strategies",
    description: "Leverage AI models to analyze market trends and identify high-return opportunities, maximizing portfolio performance."
  },
  {
    icon: Lock,
    title: "Risk Mitigation",
    description: "Implement AI systems to proactively assess and mitigate risks, ensuring financial stability and secure operations."
  },
  {
    icon: Wallet,
    title: "Personalized Customer Experiences",
    description: "Offer hyper-personalized financial advice and product recommendations, enhancing customer satisfaction and loyalty."
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description: "Adopt AI technologies that scale with your business growth, optimizing processes and reducing operational costs."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">BENEFITS OF AI IN FINTECH</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Unlock the Power of AI for Fintech
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI revolutionizes fintech by enhancing security, driving informed decisions, and offering personalized solutions. Our AI technologies empower financial institutions to mitigate risks, optimize investments, and scale operations efficiently.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black text-black shadow-lg hover:shadow-2xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
