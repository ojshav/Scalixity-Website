"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Automated Data Extraction",
    description: "Leverage AI-powered OCR and NLP to extract key financial data from invoices, contracts, and statements with high accuracy."
  },
  {
    title: "Faster Document Processing",
    description: "Reduce manual effort by automating document classification, validation, and reconciliation, accelerating financial workflows."
  },
  {
    title: "Error Reduction & Compliance",
    description: "Minimize human errors and ensure regulatory compliance (IFRS, AML, KYC) with automated validation and audit trails."
  },
  {
    title: "Seamless System Integration",
    description: "Connect document automation with ERPs, banking platforms, and financial systems for real-time data synchronization."
  },
  {
    title: "Fraud Detection & Risk Mitigation",
    description: "Use AI to detect anomalies in financial documents, preventing fraudulent transactions and reducing financial risks."
  },
  {
    title: "Scalability & Cost Efficiency",
    description: "Handle increasing document volumes with AI-driven automation, reducing operational costs and improving business efficiency."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of AI-Powered Financial Document Automation</h2>
        <p className="text-lg text-black mb-12">
          Streamline financial operations with AI-driven document automation — improving accuracy, efficiency, and compliance.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-black bg-[#F3F1EB] text-black hover:border-gray-700 transition"
            >
              <CheckCircle className="text-black w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
