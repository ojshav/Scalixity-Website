"use client";

import { motion } from "framer-motion";
import { Wifi, Cpu, Cloud, Shield, TrendingUp, PlugZap } from "lucide-react";

const benefits = [
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    description:
      "Ensure smooth and reliable communication between devices, applications, and cloud platforms for real-time data exchange.",
  },
  {
    icon: Cpu,
    title: "Edge Computing Capabilities",
    description:
      "Process data closer to the source, reducing latency and enhancing system efficiency with real-time decision-making.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Easily integrate with cloud services to store, manage, and analyze vast amounts of IoT-generated data securely.",
  },
  {
    icon: Shield,
    title: "Robust Security",
    description:
      "Implement advanced encryption, authentication, and cybersecurity measures to safeguard IoT devices and data.",
  },
  {
    icon: TrendingUp,
    title: "Scalability & Flexibility",
    description:
      "Expand your IoT ecosystem effortlessly, adapting to new devices, users, and business requirements.",
  },
  {
    icon: PlugZap,
    title: "Energy Efficiency",
    description:
      "Optimize power consumption with smart IoT solutions, ensuring sustainability and cost-effectiveness.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Our IoT Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the full potential of IoT technology to enhance connectivity,
            security, and efficiency in your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
