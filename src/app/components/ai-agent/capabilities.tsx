"use client";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Automate Customer Support",
    description:
      "With NLP capabilities, our AI agents streamline customer support processes, swiftly addressing inquiries, resolving issues, and providing personalized assistance 24/7. Businesses can enhance response times, boost satisfaction, and reduce the workload on support teams.",
  },
  {
    title: "Improve Supply Chain Management",
    description:
      "We develop AI agents that optimize supply chain operations by forecasting demand, managing inventory, identifying bottlenecks, and optimizing logistics. This helps businesses reduce costs, prevent stockouts, and improve product availability for timely deliveries.",
  },
  {
    title: "Support Decision-Making Processes",
    description:
      "AI agents analyze data, generate insights, and offer recommendations based on predefined criteria. Businesses can leverage AI to navigate complexities, seize opportunities, mitigate risks, and adapt to market dynamics.",
  },
  {
    title: "Enhance Data Analysis",
    description:
      "Our AI agents leverage advanced analytics to process vast datasets with precision and speed, uncovering valuable insights and patterns. Businesses can use this to understand trends, predict market shifts, and optimize operations.",
  },
  {
    title: "Optimize Marketing Campaigns",
    description:
      "AI agents use machine learning to analyze customer data, segment audiences, personalize messages, and adjust marketing strategies in real-time. This helps businesses increase engagement, improve conversion rates, and maximize ROI.",
  },
  {
    title: "Manage Financial Transactions",
    description:
      "We develop AI agents that automate financial transactions, invoicing, payments, fraud detection, and risk assessment. This ensures secure, efficient financial operations with minimized errors and enhanced compliance.",
  },
];

export function Capabilities() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            AI Capabilities for Businesses
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the power of AI with intelligent automation, analytics, and decision-making tools designed to transform businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] p-6 rounded-lg border border-black shadow-lg hover:shadow-xl transition-all"

            >
              <h3 className="text-xl font-bold text-black mb-4">{capability.title}</h3>
              <p className="text-gray-800">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;

