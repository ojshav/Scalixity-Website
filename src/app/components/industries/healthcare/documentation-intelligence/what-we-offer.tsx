"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Automated Document Parsing",
    description:
      "Leverage AI to automatically extract key information from invoices, contracts, and reports with precision and speed.",
  },
  {
    title: "Intelligent Data Extraction",
    description:
      "Our AI models identify and capture relevant data points from unstructured text, ensuring accuracy and efficiency.",
  },
  {
    title: "Smart Document Classification",
    description:
      "AI-driven categorization of documents based on content, streamlining document management workflows.",
  },
  {
    title: "Real-time Document Insights",
    description:
      "Gain instant insights with AI-powered analytics, helping you make data-driven decisions faster.",
  },
  {
    title: "Customizable AI Pipelines",
    description:
      "Tailor AI solutions to fit your document processing needs, integrating seamlessly into existing systems.",
  },
  {
    title: "Enhanced Document Security",
    description:
      "Implement AI safeguards to detect anomalies, prevent fraud, and protect sensitive information.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] text-black py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Solutions for Documentation Intelligence
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transform how you handle documents with AI-powered automation. From
            parsing to security, optimize every step of your document workflow.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
