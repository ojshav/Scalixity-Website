"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Proactive Risk Identification",
    description: "Identify potential financial risks early using AI-driven predictive analytics, enabling informed decision-making."
  },
  {
    title: "Real-Time Risk Monitoring",
    description: "Continuously monitor risk factors with AI algorithms, providing instant alerts and actionable insights."
  },
  {
    title: "Enhanced Fraud Detection",
    description: "Detect suspicious activities and prevent fraud through advanced pattern recognition models."
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure all risk management processes align with financial regulations, reducing legal exposure."
  },
  {
    title: "Data-Driven Decision Making",
    description: "Leverage AI insights to assess risk, prioritize actions, and minimize financial vulnerabilities."
  },
  {
    title: "Operational Efficiency",
    description: "Automate risk assessment workflows, reducing manual effort and boosting overall productivity."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Benefits of AI-Powered Risk Assessment & Management</h2>
          <p className="text-lg text-black mt-4 max-w-2xl mx-auto">
            Strengthen your financial strategy with AI-enhanced risk management solutions, ensuring security and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] border border-black p-6 rounded-xl flex items-start space-x-4"
            >
              <ShieldCheck className="text-black w-8 h-8 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black">{benefit.title}</h3>
                <p className="text-black mt-2">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
