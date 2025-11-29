"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Risk Data Collection",
    description: "Gather critical financial, operational, and market data to identify potential risks and vulnerabilities."
  },
  {
    number: "02",
    title: "AI Risk Modeling",
    description: "Leverage AI algorithms to model risk scenarios, predict future outcomes, and assess exposure levels."
  },
  {
    number: "03",
    title: "Real-Time Risk Analysis",
    description: "Continuously monitor data streams to detect emerging risks and trigger alerts for proactive management."
  },
  {
    number: "04",
    title: "Risk Mitigation Strategies",
    description: "Develop AI-driven strategies to minimize potential losses and optimize risk-return ratios."
  },
  {
    number: "05",
    title: "Compliance & Regulatory Reporting",
    description: "Ensure regulatory compliance by automating risk reporting and maintaining audit trails."
  },
  {
    number: "06",
    title: "Ongoing Monitoring & Optimization",
    description: "Use AI to refine risk models continuously and adapt strategies to evolving market conditions."
  }
];

export function Process() {
  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-black mb-4">AI-Driven Risk Assessment & Management Process</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our streamlined AI-powered process helps identify, assess, and mitigate risks effectively, ensuring proactive management and regulatory compliance.
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
