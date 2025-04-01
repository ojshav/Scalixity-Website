"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom React Development",
    description: "Tailored React solutions for building dynamic, high-performance user interfaces with seamless user experiences."
  },
  {
    title: "Single Page Applications (SPAs)",
    description: "We create fast, responsive SPAs with smooth navigation, reducing load times and enhancing user interaction."
  },
  {
    title: "React Component Libraries",
    description: "Building reusable, scalable component libraries to accelerate development and ensure design consistency."
  },
  {
    title: "API Integration & State Management",
    description: "Seamless integration of REST & GraphQL APIs with robust state management using Redux, Zustand, or React Query."
  },
  {
    title: "React Native Development",
    description: "Cross-platform mobile apps using React Native, delivering native-like performance for iOS and Android."
  },
  {
    title: "Testing & Optimization",
    description: "Comprehensive testing and performance optimization to ensure your React apps are fast, secure, and bug-free."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our ReactJS Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the power of ReactJS — from dynamic SPAs to cross-platform mobile apps, we build fast, interactive, and scalable solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-gray-500 transition-colors"
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

export default WhatWeOffer;
