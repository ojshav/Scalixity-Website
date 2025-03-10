"use client";

import { motion } from 'framer-motion';

const offerings = [
  {
    title: "AI-Powered Credit Scoring",
    description: "Leverage machine learning models to analyze creditworthiness with real-time data insights for accurate risk assessment.",
    icon: "/icons/credit-score.svg"
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Detect fraudulent activities using AI-driven anomaly detection and behavioral analysis to reduce financial risks.",
    icon: "/icons/fraud.svg"
  },
  {
    title: "Automated Risk Assessment",
    description: "Streamline credit risk evaluations with AI-powered automation, reducing manual effort and enhancing decision-making accuracy.",
    icon: "/icons/risk.svg"
  },
  {
    title: "Regulatory Compliance Solutions",
    description: "Ensure adherence to industry regulations like Basel III, IFRS 9, and GDPR with automated compliance checks.",
    icon: "/icons/compliance.svg"
  },
  {
    title: "Loan Default Prediction",
    description: "Predict potential loan defaults using predictive analytics and historical data modeling to minimize financial exposure.",
    icon: "/icons/prediction.svg"
  },
  {
    title: "Real-Time Risk Monitoring",
    description: "Continuously monitor credit portfolios with real-time AI-driven insights and alerts to mitigate emerging risks.",
    icon: "/icons/monitoring.svg"
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI-Driven Credit Risk Management Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our cutting-edge solutions enhance credit risk evaluation, fraud detection, and regulatory compliance for financial institutions.
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
