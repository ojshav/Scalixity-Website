"use client";

import { motion } from "framer-motion";
import { Lightbulb, ClipboardList, Code, Smartphone, Rocket, Wrench } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Requirement Analysis",
    description: "We gather business needs, define user goals, and establish key functionalities for your Ionic app.",
  },
  {
    icon: ClipboardList,
    title: "UI/UX Design",
    description: "Our designers create an intuitive and visually engaging interface for seamless user experiences.",
  },
  {
    icon: Code,
    title: "Development & Coding",
    description: "Using Ionic, Angular, and Capacitor, we build a high-performance, cross-platform app.",
  },
  {
    icon: Smartphone,
    title: "Testing & Quality Assurance",
    description: "We conduct thorough testing to ensure app stability, performance, and security across devices.",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "We publish your app to Google Play, the App Store, or as a Progressive Web App (PWA).",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "We provide ongoing updates, bug fixes, and feature enhancements to keep your app up to date.",
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Ionic App Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A structured and agile-driven approach to building powerful cross-platform apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <step.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
