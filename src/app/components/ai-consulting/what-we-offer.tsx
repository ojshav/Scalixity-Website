"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Strategy & Roadmap",
    description:
      "We assist businesses in defining clear AI strategies that align with their objectives. Our roadmap ensures seamless adoption and maximum ROI.",
  },
  {
    title: "AI Model Development & Optimization",
    description:
      "From building custom AI models to optimizing existing ones, we ensure your AI solutions are efficient, accurate, and scalable.",
  },
  {
    title: "AI Integration & Deployment",
    description:
      "We help integrate AI capabilities into your existing systems, ensuring smooth transitions and operational efficiency.",
  },
  {
    title: "AI Governance & Compliance",
    description:
      "Our experts ensure your AI solutions adhere to industry regulations and ethical AI standards, maintaining compliance and security.",
  },
  {
    title: "AI Performance Monitoring & Support",
    description:
      "We offer continuous monitoring and support to optimize AI performance, making necessary adjustments for sustained business impact.",
  },
  {
    title: "AI Training & Enablement",
    description:
      "We empower teams with the knowledge and skills to leverage AI effectively, ensuring smooth adoption across all levels.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our AI Consulting Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We help businesses harness the full potential of AI, from strategy and development to deployment and optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-[#3D3D3D] hover:border-black transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
