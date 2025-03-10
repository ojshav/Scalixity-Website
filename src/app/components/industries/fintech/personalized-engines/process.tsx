"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "User Financial Profiling",
    description: "Gather user data including income, expenses, risk tolerance, and financial goals to create a personalized financial profile.",
  },
  {
    number: "02",
    title: "AI-Powered Analysis",
    description: "Use machine learning models to analyze financial behavior and predict optimal investment and saving strategies.",
  },
  {
    number: "03",
    title: "Custom Portfolio Generation",
    description: "Create tailored investment portfolios based on risk appetite, long-term objectives, and real-time market trends.",
  },
  {
    number: "04",
    title: "Automated Financial Advice",
    description: "Provide real-time, AI-driven financial guidance to help users optimize savings, spending, and investment decisions.",
  },
  {
    number: "05",
    title: "Continuous Monitoring & Adjustments",
    description: "Monitor financial performance, suggest adjustments, and adapt strategies to changing market conditions.",
  },
  {
    number: "06",
    title: "User Education & Support",
    description: "Offer personalized insights, reports, and financial literacy resources to empower users in making informed decisions.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black">Process for Personalized Financial Engines</h2>
          <p className="text-xl text-black mt-4 max-w-3xl mx-auto">
            A step-by-step AI-driven approach to delivering customized financial strategies for individuals and businesses.
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
