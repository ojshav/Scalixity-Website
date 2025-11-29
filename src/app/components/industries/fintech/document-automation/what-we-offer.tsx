"use client";

import { motion } from 'framer-motion';


const offerings = [
  {
    title: "AI-Powered Document Processing",
    description: "Leverage machine learning and NLP to extract, classify, and validate financial documents with high accuracy.",
    icon: "/images/icons/chatbot.svg"
  },
  {
    title: "Automated Data Extraction",
    description: "Extract key financial data from invoices, bank statements, and contracts using intelligent OCR technology.",
    icon: "/images/icons/data-security.svg"
  },
  {
    title: "Fraud Detection & Compliance",
    description: "Ensure regulatory compliance (AML, KYC, IFRS) and detect anomalies with AI-driven fraud detection.",
    icon: "/images/icons/fraud-detection.svg"
  },
  {
    title: "Smart Document Classification",
    description: "Automatically categorize financial documents based on content and metadata for efficient organization.",
    icon: "/images/icons/customer-insights.svg"
  },
  {
    title: "Seamless API Integrations",
    description: "Connect with banking, ERP, and financial systems via secure API integrations for smooth data flow.",
    icon: "/images/icons/forecasting.svg"
  },
  {
    title: "Automated Report Generation",
    description: "Generate financial reports, audit trails, and summaries automatically to streamline compliance workflows.",
    icon: "/images/icons/education.svg"
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            AI-Powered Financial Document Automation
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our intelligent automation solutions enhance efficiency, accuracy, and compliance in financial document processing.
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
