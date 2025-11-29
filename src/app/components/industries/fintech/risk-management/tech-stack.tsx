"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "AI-Powered Risk Models",
    description: "Leverage machine learning to assess credit risk, detect fraud, and optimize financial decision-making.",
  },
  {
    title: "Real-Time Risk Monitoring",
    description: "Implement AI-driven monitoring systems that continuously analyze transactions and flag anomalies instantly.",
  },
  {
    title: "Predictive Analytics",
    description: "Utilize data-driven forecasting models to anticipate financial risks and enhance mitigation strategies.",
  },
  {
    title: "Regulatory Compliance Automation",
    description: "Ensure adherence to financial regulations with automated compliance checks and risk analysis tools.",
  },
  {
    title: "Blockchain Security",
    description: "Enhance risk assessment and fraud detection with blockchain-powered security and transparent transactions.",
  },
  {
    title: "Cloud-Based Risk Platforms",
    description: "Integrate cloud computing to scale risk management solutions with high-speed processing and real-time insights.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">Tech Stack for Risk Assessment & Management</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{tech.title}</h3>
              <p className="text-black leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
