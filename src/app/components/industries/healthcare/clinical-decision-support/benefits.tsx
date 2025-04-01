"use client";

import { motion } from "framer-motion";
import {
  ActivitySquare,
  BrainCircuit,
  AlertCircle,
  BarChart,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

const cdsBenefits = [
  {
    icon: BrainCircuit,
    title: "Enhanced Diagnostic Accuracy",
    description:
      "AI algorithms analyze complex medical data to support precise and informed clinical decisions.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description:
      "Real-time data analysis helps clinicians uncover patterns and trends for better patient outcomes.",
  },
  {
    icon: AlertCircle,
    title: "Risk Prediction & Alerts",
    description:
      "Identifies potential health risks early, providing instant alerts for timely intervention.",
  },
  {
    icon: CheckCircle,
    title: "Evidence-Based Recommendations",
    description:
      "Integrates the latest research and medical guidelines to suggest optimal treatment options.",
  },
  {
    icon: ActivitySquare,
    title: "Streamlined Clinical Workflows",
    description:
      "Automates routine tasks, reducing administrative burden and allowing clinicians to focus on care.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description:
      "Ensures patient data privacy with robust AI-powered security measures and regulatory adherence.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI-Driven Clinical Decision Support
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower healthcare professionals with AI insights — enhancing
            diagnostic precision, streamlining workflows, and improving patient
            care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cdsBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/70 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-black/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
