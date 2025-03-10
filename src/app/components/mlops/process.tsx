"use client";

import { motion } from "framer-motion";
import { Search, Settings, Database, RefreshCw, Server, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Assessment & Strategy",
    description: "We evaluate your current ML workflows, infrastructure, and business objectives to create a robust MLOps strategy.",
    icon: <Search className="w-10 h-10 text-black" />,
  },
  {
    title: "Model Development & Versioning",
    description: "Implementing best practices for model tracking, version control, and reproducibility to streamline ML lifecycle management.",
    icon: <Settings className="w-10 h-10 text-black" />,
  },
  {
    title: "Data Pipeline & Feature Engineering",
    description: "Optimizing data pipelines, automating data preprocessing, and ensuring data consistency for better model performance.",
    icon: <Database className="w-10 h-10 text-black" />,
  },
  {
    title: "Continuous Integration & Deployment (CI/CD)",
    description: "Automating model training, testing, and deployment with CI/CD pipelines for seamless production integration.",
    icon: <RefreshCw className="w-10 h-10 text-black" />,
  },
  {
    title: "Monitoring & Performance Optimization",
    description: "Setting up monitoring systems to track model drift, performance, and retraining triggers for long-term efficiency.",
    icon: <Server className="w-10 h-10 text-black" />,
  },
  {
    title: "Deployment & Scaling",
    description: "Ensuring scalable, secure, and optimized ML model deployment across cloud, edge, or on-premise environments.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our MLOps Consulting Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We implement end-to-end MLOps solutions to optimize your machine learning workflows, ensuring efficiency, scalability, and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
