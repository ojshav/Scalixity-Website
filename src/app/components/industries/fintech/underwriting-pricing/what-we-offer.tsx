"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Driven Risk Assessment",
    description: "Utilize machine learning models to assess borrower and policyholder risk with high accuracy and efficiency."
  },
  {
    title: "Automated Credit Scoring",
    description: "Enhance underwriting decisions with real-time credit scoring that analyzes financial history, behavioral data, and alternative data sources."
  },
  {
    title: "Dynamic Pricing Models",
    description: "Leverage AI-powered pricing strategies to adjust premiums, loan rates, and financial products based on risk and market conditions."
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Implement real-time fraud analytics to detect anomalies and prevent fraudulent underwriting claims."
  },
  {
    title: "Regulatory Compliance & Reporting",
    description: "Ensure adherence to financial regulations with automated compliance checks and reporting systems."
  },
  {
    title: "Personalized Insurance & Loan Offers",
    description: "Use predictive analytics to create customized financial products tailored to customer needs and risk profiles."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Advanced Underwriting & Pricing Solutions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Leverage AI-powered underwriting and pricing strategies to optimize risk assessment, enhance fraud detection, and improve financial decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
