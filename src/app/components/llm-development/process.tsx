"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "We begin by understanding your specific needs, use cases, and objectives for LLM implementation.",
  },
  {
    number: "02",
    title: "Data Preparation",
    description:
      "Our team collects, cleans, and prepares high-quality training data relevant to your domain.",
  },
  {
    number: "03",
    title: "Model Selection",
    description:
      "We choose the most appropriate base model and architecture based on your requirements.",
  },
  {
    number: "04",
    title: "Development & Training",
    description:
      "Custom development and training of the LLM using your specific data and use cases.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "Rigorous testing to ensure accuracy, performance, and reliability of the model.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "Seamless deployment with ongoing monitoring, optimization, and support.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our LLM Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A systematic approach to delivering high-quality LLM solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
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
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-[#F3F1EB] rounded-full" />
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
