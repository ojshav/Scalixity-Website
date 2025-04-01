"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Analysis & Planning",
    description: "We start by understanding your business goals and defining the IoT architecture, ensuring a clear roadmap tailored to your needs."
  },
  {
    title: "Hardware Selection & Integration",
    description: "We choose the right sensors, devices, and gateways, ensuring seamless integration with your existing infrastructure."
  },
  {
    title: "IoT Application Development",
    description: "Our team develops robust, secure, and scalable IoT applications to collect, process, and analyze data efficiently."
  },
  {
    title: "Cloud Deployment & Connectivity",
    description: "We connect your IoT devices to the cloud, enabling real-time data processing and remote monitoring."
  },
  {
    title: "Testing & Quality Assurance",
    description: "Rigorous testing of IoT devices, networks, and software to ensure optimal performance and security."
  },
  {
    title: "Deployment & Ongoing Support",
    description: "We launch your IoT solution and provide continuous monitoring, updates, and optimization to ensure long-term success."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our IoT Development Process
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            A step-by-step approach to build intelligent, connected solutions tailored to your business.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-black/80 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
