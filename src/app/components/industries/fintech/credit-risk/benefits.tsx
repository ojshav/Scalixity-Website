"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Advanced Risk Assessment",
    description: "Leverage AI models to evaluate creditworthiness by analyzing historical data, transaction patterns, and alternative data sources."
  },
  {
    title: "Real-time Credit Scoring",
    description: "Implement AI-driven scoring systems that provide instant, dynamic credit scores for faster and more accurate lending decisions."
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Identify suspicious activities and anomalies with AI algorithms, minimizing financial risks and fraudulent transactions."
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure compliance with financial regulations by automating risk assessment processes and maintaining transparent audit trails."
  },
  {
    title: "Portfolio Risk Monitoring",
    description: "Continuously track portfolio performance and predict potential defaults, enabling proactive risk management strategies."
  },
  {
    title: "Scalable AI Solutions",
    description: "Adapt AI models to handle growing data volumes, ensuring accuracy and efficiency as your business expands."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of AI-Powered Credit Risk Management</h2>
        <p className="text-lg text-black mb-12">
          Optimize your credit risk strategies with AI — enhancing decision-making, reducing risk, and driving financial growth.
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
      </div>
    </section>
  );
}

export default Benefits;
