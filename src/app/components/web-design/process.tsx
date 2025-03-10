"use client";

import { motion } from "framer-motion";
import { Lightbulb, PencilRuler, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We start by understanding your business, goals, and target audience to craft a web design strategy that aligns with your vision.",
    icon: <Lightbulb className="w-10 h-10 text-black" />,
  },
  {
    title: "Wireframing & UI/UX Design",
    description: "Our team creates detailed wireframes and UI/UX designs to ensure seamless user experience and a visually engaging interface.",
    icon: <PencilRuler className="w-10 h-10 text-black" />,
  },
  {
    title: "Development & Testing",
    description: "Using modern technologies, we bring the design to life with optimized, responsive, and high-performing code, followed by rigorous testing.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Launch & Optimization",
    description: "After deployment, we ensure smooth performance, SEO optimization, and provide ongoing support to maximize website effectiveness.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Web Design Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From strategy to launch, we follow a structured process to deliver high-quality and effective web design solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
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
