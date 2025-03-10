"use client";

import { motion } from "framer-motion";
import { Search, Layers, Cloud, Code, ShieldCheck, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Assessment & Strategy",
    description: "We evaluate your existing application’s architecture, performance, and security to create a tailored modernization roadmap.",
    icon: <Search className="w-10 h-10 text-black" />,
  },
  {
    title: "Re-Architecting & Modularization",
    description: "Breaking down monolithic systems into modular, scalable, and flexible components using modern frameworks.",
    icon: <Layers className="w-10 h-10 text-black" />,
  },
  {
    title: "Cloud Enablement & Migration",
    description: "Moving applications to cloud-based environments like AWS, Azure, or Google Cloud for enhanced agility and cost savings.",
    icon: <Cloud className="w-10 h-10 text-black" />,
  },
  {
    title: "Code Refactoring & Optimization",
    description: "Upgrading legacy code to improve maintainability, security, and performance while ensuring minimal disruption.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Security & Compliance Updates",
    description: "Implementing the latest security measures and compliance standards to safeguard data and ensure regulatory compliance.",
    icon: <ShieldCheck className="w-10 h-10 text-black" />,
  },
  {
    title: "Deployment & Continuous Improvement",
    description: "Ensuring smooth deployment with DevOps best practices and ongoing performance monitoring for long-term success.",
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
            Our App Modernization Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We follow a structured, step-by-step approach to transform legacy applications into modern, high-performance solutions.
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
