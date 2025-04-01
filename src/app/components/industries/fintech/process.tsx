"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understanding Financial Goals",
    description:
      "We start by analyzing your fintech objectives, identifying key challenges, and defining AI-driven solutions tailored to your business.",
  },
  {
    number: "02",
    title: "Data Collection & Assessment",
    description:
      "Our team gathers and assesses relevant financial data, ensuring quality and security to power accurate AI models.",
  },
  {
    number: "03",
    title: "Model Selection & Design",
    description:
      "We design AI models for fraud detection, risk assessment, or customer insights based on your fintech needs.",
  },
  {
    number: "04",
    title: "Development & Training",
    description:
      "Our experts develop and train AI algorithms using advanced machine learning techniques tailored for financial data.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "We rigorously test AI models to ensure accuracy, performance, and compliance with financial regulations.",
  },
  {
    number: "06",
    title: "Integration & Deployment",
    description:
      "Finally, we seamlessly integrate AI solutions into your existing fintech infrastructure, ensuring minimal disruption.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI Development Process for Fintech
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A streamlined process to build and deploy AI solutions tailored for financial services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-[#F3F1EB] p-6 rounded-xl border border-black">
                      <div className="text-black text-sm font-bold mb-2">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                      <p className="text-black">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
