"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Flutter App Development",
    description: "Creating high-performance, cross-platform apps with Flutter for seamless experiences on both iOS and Android."
  },
  {
    title: "UI/UX Design for Flutter Apps",
    description: "Designing beautiful, responsive, and intuitive interfaces that captivate users and enhance functionality."
  },
  {
    title: "Cross-Platform Development",
    description: "Building a single codebase for mobile, web, and desktop apps, ensuring fast development and consistent performance."
  },
  {
    title: "API Integration & Backend Support",
    description: "Seamlessly connecting your app with RESTful APIs, databases, and cloud services for dynamic functionalities."
  },
  {
    title: "App Testing & Quality Assurance",
    description: "Ensuring bug-free, smooth-running apps with comprehensive testing and performance optimization."
  },
  {
    title: "App Deployment & Maintenance",
    description: "Publishing apps to Google Play and Apple App Store with ongoing support and feature updates."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#F0F4F8] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-700 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Flutter App Development Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Unlock the full potential of Flutter — delivering fast, flexible, and scalable apps tailored to your business needs.
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
              className="bg-white p-8 rounded-xl border border-gray-300 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
