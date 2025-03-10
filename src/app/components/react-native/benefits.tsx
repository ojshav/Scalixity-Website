"use client";

import { motion } from "framer-motion";
import { Smartphone, Rocket, Code, Shield } from "lucide-react";

const benefits = [
  {
    title: "Cross-Platform Compatibility",
    description: "Build apps that run seamlessly on both iOS and Android from a single codebase, reducing development time and costs.",
    icon: <Smartphone className="w-10 h-10 text-black" />,
  },
  {
    title: "Fast & Efficient Development",
    description: "Leverage React Native's hot-reloading feature to accelerate the development process and instantly preview changes.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
  {
    title: "Native-Like Performance",
    description: "Achieve smooth animations, fast load times, and native-like user experiences using React Native's robust architecture.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Strong Community & Security",
    description: "Benefit from a large open-source community, constant updates, and secure app development practices.",
    icon: <Shield className="w-10 h-10 text-black" />,
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">BENEFITS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Our React Native App Development Services?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our React Native solutions offer high-performance, cross-platform apps that accelerate development and boost user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-black">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
