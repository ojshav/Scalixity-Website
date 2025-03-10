"use client";

import { motion } from 'framer-motion';

const offerings = [
  {
    title: "Intelligent Customer Support Bots",
    description: "Deploy AI agents to handle customer inquiries, resolve issues, and provide financial advice in real-time.",
    icon: "/icons/customer-support.svg"
  },
  {
    title: "Automated Loan Processing",
    description: "Streamline loan approvals by automating document checks, credit scoring, and risk assessments.",
    icon: "/icons/loan-processing.svg"
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Use AI algorithms to detect suspicious transactions and prevent financial fraud instantly.",
    icon: "/icons/fraud-prevention.svg"
  },
  {
    title: "Predictive Financial Insights",
    description: "Enable AI agents to analyze data and provide proactive financial strategies and investment opportunities.",
    icon: "/icons/predictive-insights.svg"
  },
  {
    title: "Personalized Banking Experiences",
    description: "Deliver AI-powered recommendations tailored to individual customer financial goals and behaviors.",
    icon: "/icons/personalized-banking.svg"
  },
  {
    title: "Seamless API Integrations",
    description: "Connect AI agents with existing fintech platforms through secure and scalable APIs.",
    icon: "/icons/api-integration.svg"
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Agents Empowering Fintech Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI agents revolutionize customer interactions, fraud prevention, and financial decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-black rounded-lg p-6 bg-[#F3F1EB] flex flex-col items-center text-center"
            >
              <img src={offer.icon} alt={offer.title} width={50} height={50} className="mb-4" />
              <h3 className="text-xl font-semibold text-black">{offer.title}</h3>
              <p className="text-black mt-2">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
