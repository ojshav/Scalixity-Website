"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Data Collection & Preprocessing",
    description: "We aggregate financial data from multiple sources, clean and normalize it to ensure high-quality inputs for risk analysis."
  },
  {
    title: "Risk Modeling & Analysis",
    description: "Using AI-driven models like logistic regression, decision trees, and deep learning to assess creditworthiness and detect potential defaults."
  },
  {
    title: "Scorecard Development",
    description: "Creating credit scorecards with explainable AI to classify borrowers based on their risk levels for better decision-making."
  },
  {
    title: "Real-time Monitoring & Alerts",
    description: "Implementing continuous tracking systems that provide real-time risk assessments and trigger alerts for high-risk profiles."
  },
  {
    title: "Regulatory Compliance & Reporting",
    description: "Ensuring adherence to financial regulations (Basel III, IFRS 9) and generating detailed risk reports for compliance and audits."
  },
  {
    title: "Deployment & Optimization",
    description: "Deploying risk models into production systems with continuous optimization using feedback loops and new data updates."
  }
];

export function Process() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">Process</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Credit Risk Management Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We leverage AI and advanced analytics to assess, monitor, and mitigate credit risks for financial institutions.
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
