"use client";

import { motion } from "framer-motion";
import { Smartphone, Rocket, Code, Layers, Globe, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Cross-Platform Compatibility",
    description: "Develop a single codebase that runs seamlessly on iOS, Android, and web platforms.",
  },
  {
    icon: Rocket,
    title: "Faster Time to Market",
    description: "Reduce development time with Ionic’s ready-to-use components and rapid prototyping capabilities.",
  },
  {
    icon: Code,
    title: "Robust Performance",
    description: "Leverage native-like performance with optimized rendering and smooth animations.",
  },
  {
    icon: Layers,
    title: "Customizable UI Components",
    description: "Use a rich library of pre-built UI elements for a visually stunning and user-friendly experience.",
  },
  {
    icon: Globe,
    title: "Progressive Web App (PWA) Support",
    description: "Transform your Ionic app into a powerful PWA for greater accessibility and reach.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Development",
    description: "Save costs by building a single application for multiple platforms instead of separate native apps.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">BENEFITS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Ionic App Development?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Build high-performance, cross-platform applications with the flexibility and scalability of Ionic.
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
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
