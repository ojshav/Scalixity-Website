"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Comprehensive Risk Profiling",
    description: "Utilize AI to create detailed risk profiles by analyzing financial, operational, and market data."
  },
  {
    title: "Real-Time Threat Detection",
    description: "Monitor data streams to identify emerging risks and trigger instant alerts for proactive management."
  },
  {
    title: "Predictive Risk Analytics",
    description: "Leverage machine learning models to forecast potential risks and prepare mitigation strategies."
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Deploy AI algorithms to detect fraudulent activities and prevent financial losses."
  },
  {
    title: "Regulatory Risk Compliance",
    description: "Ensure adherence to legal requirements with automated compliance checks and transparent reporting."
  },
  {
    title: "Continuous Risk Optimization",
    description: "Use AI insights to refine risk management strategies and adapt to changing market conditions."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Driven Risk Assessment & Management Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your financial decisions with AI-powered risk assessment tools, ensuring proactive management and regulatory compliance.
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
