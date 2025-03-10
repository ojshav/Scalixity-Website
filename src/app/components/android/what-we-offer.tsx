"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Android App Development",
    description: "Crafting tailor-made Android apps with cutting-edge features and seamless user experiences."
  },
  {
    title: "UI/UX Design for Android",
    description: "Designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction."
  },
  {
    title: "Native App Development",
    description: "Building high-performance, platform-specific apps using Kotlin and Java for robust Android solutions."
  },
  {
    title: "Cross-Platform Development",
    description: "Leveraging frameworks like Flutter and React Native to create apps that work flawlessly across devices."
  },
  {
    title: "App Testing & Quality Assurance",
    description: "Ensuring bug-free apps with thorough testing for security, performance, and user experience."
  },
  {
    title: "App Deployment & Maintenance",
    description: "Seamlessly deploying apps to Google Play Store and providing ongoing support and updates."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Android App Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your business with custom Android apps — from native to cross-platform solutions, we deliver high-performance mobile experiences tailored to your needs.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-gray-700 transition-colors"
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
