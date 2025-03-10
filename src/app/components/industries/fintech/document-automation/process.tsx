"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Document Ingestion & Classification",
    description: "AI-driven OCR extracts and categorizes financial documents like invoices, bank statements, and contracts with high accuracy."
  },
  {
    title: "Data Extraction & Validation",
    description: "Natural Language Processing (NLP) and machine learning models extract key financial data and validate it against predefined rules."
  },
  {
    title: "Fraud Detection & Compliance",
    description: "Advanced anomaly detection ensures compliance with financial regulations (AML, KYC, IFRS) and identifies potential fraud risks."
  },
  {
    title: "Automated Workflow Processing",
    description: "Configurable workflows streamline approval, reconciliation, and reporting processes, reducing manual intervention."
  },
  {
    title: "Seamless System Integration",
    description: "APIs connect document automation with ERPs, banking systems, and financial platforms for real-time data synchronization."
  },
  {
    title: "Continuous Optimization & AI Feedback Loop",
    description: "Machine learning models continuously improve by learning from user feedback and new document data, ensuring accuracy."
  }
];

export function Process() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">Process</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Financial Document Automation Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We streamline document management with AI-powered automation, improving efficiency, accuracy, and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#A8B2E7] border border-black rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-black" />
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              </div>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
