"use client";

import { motion } from 'framer-motion';

const offerings = [
  {
    title: "AI-Powered Risk Assessment",
    description: "Utilize AI to analyze financial risks, detect anomalies, and enhance decision-making with predictive analytics.",
    icon: "/icons/risk-assessment.svg"
  },
  {
    title: "Automated Customer Insights",
    description: "Leverage machine learning to segment customers, predict behavior, and personalize financial services.",
    icon: "/icons/customer-insights.svg"
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Detect suspicious transactions in real time with AI-driven fraud detection models.",
    icon: "/icons/fraud-detection.svg"
  },
  {
    title: "Intelligent Chatbots & Virtual Assistants",
    description: "Enhance customer experience with AI-powered chatbots for automated financial support and guidance.",
    icon: "/icons/chatbot.svg"
  },
  {
    title: "AI-Driven Financial Forecasting",
    description: "Predict market trends, revenue, and investment risks using AI-powered forecasting models.",
    icon: "/icons/forecasting.svg"
  },
  {
    title: "Secure AI-Powered Transactions",
    description: "Enhance transaction security with AI-driven authentication and encryption methods.",
    icon: "/icons/security.svg"
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI-Powered Fintech Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI solutions drive efficiency, security, and innovation in financial services, enhancing customer experience and compliance.
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
