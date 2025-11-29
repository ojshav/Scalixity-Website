"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Faster Decision-Making",
    description: "AI-driven underwriting speeds up risk assessment, reducing approval times from days to minutes."
  },
  {
    title: "More Accurate Risk Assessment",
    description: "Advanced analytics and machine learning models help identify risks with greater precision, minimizing losses."
  },
  {
    title: "Personalized Pricing Strategies",
    description: "Dynamic pricing models adjust rates based on real-time market data and individual customer risk profiles."
  },
  {
    title: "Enhanced Fraud Detection",
    description: "AI identifies suspicious patterns and anomalies in transactions, strengthening fraud prevention measures."
  },
  {
    title: "Regulatory Compliance",
    description: "Automated compliance checks ensure adherence to financial regulations like GDPR, FCRA, and Basel III."
  },
  {
    title: "Cost Efficiency",
    description: "Automation reduces manual workload, cutting operational costs while improving underwriting efficiency."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Benefits of AI-Powered Underwriting & Pricing</h2>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Leverage AI to enhance risk evaluation, optimize pricing, and streamline financial decision-making.
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
              <CheckCircle className="text-black w-8 h-8 mt-1" />
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
