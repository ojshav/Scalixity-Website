"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Data Collection & Analysis",
    description: "Gather customer financial data, transaction history, and behavioral insights to create a comprehensive risk profile."
  },
  {
    number: "02",
    title: "AI-Powered Risk Assessment",
    description: "Utilize machine learning models to assess risk levels, predict creditworthiness, and detect potential fraud."
  },
  {
    number: "03",
    title: "Automated Underwriting Decision",
    description: "Generate fast, accurate underwriting decisions based on predefined policies and real-time risk analysis."
  },
  {
    number: "04",
    title: "Dynamic Pricing & Rate Adjustment",
    description: "Apply AI-driven pricing models to personalize loan rates, insurance premiums, and financial product offerings."
  },
  {
    number: "05",
    title: "Compliance & Regulatory Checks",
    description: "Ensure full adherence to financial regulations through automated compliance checks and transparent reporting."
  },
  {
    number: "06",
    title: "Final Approval & Policy Issuance",
    description: "Approve and issue loans, policies, or credit products with minimal manual intervention, reducing processing time."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-black mb-4">Streamlined Underwriting & Pricing Process</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI-driven underwriting and pricing workflow ensures efficiency, accuracy, and compliance while optimizing financial decisions.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-8 p-6 rounded-xl bg-[#F3F1EB] border border-black shadow-lg max-w-3xl w-full hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold shadow-md">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                <p className="text-black mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
