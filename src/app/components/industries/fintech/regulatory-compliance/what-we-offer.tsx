"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Automated Regulatory Updates",
    description: "Stay compliant with real-time tracking of regulatory changes and automatic code adjustments."
  },
  {
    title: "AI-Powered Compliance Monitoring",
    description: "Use machine learning models to detect non-compliance issues and ensure adherence to financial regulations."
  },
  {
    title: "Seamless Code Integration",
    description: "Implement regulatory updates into your existing systems without disrupting operations."
  },
  {
    title: "Audit-Ready Reporting",
    description: "Generate transparent, audit-ready reports to streamline regulatory inspections and reviews."
  },
  {
    title: "Customizable Rule Engines",
    description: "Tailor AI-driven rule engines to match your unique compliance requirements and business logic."
  },
  {
    title: "Continuous Risk & Compliance Analysis",
    description: "Monitor risks and regulatory gaps continuously, ensuring swift action for any detected violations."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Regulatory Code Change Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ensure seamless adaptation to evolving financial regulations with AI-powered compliance solutions and automated code updates.
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
