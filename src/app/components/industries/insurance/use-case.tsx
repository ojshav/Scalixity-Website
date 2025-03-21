"use client";

import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Real-Time Fraud Detection",
    description: "Leverage AI algorithms to identify suspicious activities and prevent fraudulent claims instantly.",
  },
  {
    title: "Automated Claims Processing",
    description: "Speed up claims validation by using AI models to assess and process claims efficiently.",
  },
  {
    title: "Personalized Policy Recommendations",
    description: "AI analyzes customer data to tailor insurance plans based on individual needs.",
  },
  {
    title: "Predictive Risk Assessment",
    description: "Harness AI to forecast potential risks, helping insurers make data-driven decisions.",
  },
  {
    title: "Enhanced Customer Support",
    description: "Deploy AI chatbots to offer 24/7 customer assistance, improving user experience.",
  },
  {
    title: "Dynamic Pricing Models",
    description: "Utilize AI to develop adaptive pricing strategies, aligning premiums with real-time data.",
  }
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-12">AI Use Cases in Insurance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
              <p className="text-black leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
