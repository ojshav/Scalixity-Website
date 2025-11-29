"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Regulatory Monitoring",
    description: "Continuously track legal and compliance updates across multiple jurisdictions using AI-driven tools.",
  },
  {
    number: "02",
    title: "Impact Assessment",
    description: "Analyze regulatory changes to determine their effect on your existing systems, policies, and processes.",
  },
  {
    number: "03",
    title: "Code & Policy Updates",
    description: "Modify financial systems, smart contracts, and internal policies to align with new regulations.",
  },
  {
    number: "04",
    title: "Automated Testing & Validation",
    description: "Ensure compliance by running AI-powered tests and simulations before deploying updates.",
  },
  {
    number: "05",
    title: "Seamless Integration",
    description: "Deploy regulatory changes into existing fintech infrastructure with minimal disruption.",
  },
  {
    number: "06",
    title: "Ongoing Compliance Support",
    description: "Provide continuous monitoring, risk assessment, and real-time alerts for future regulatory changes.",
  },
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black">Process for Regulatory Code Change</h2>
          <p className="text-xl text-black mt-4 max-w-3xl mx-auto">
            A structured and automated approach to managing regulatory updates, ensuring compliance without disrupting operations.
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
              className="flex items-center space-x-8 p-6 rounded-full bg-[#F3F1EB] border border-black shadow-lg max-w-3xl w-full hover:scale-105 transition-transform"
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
