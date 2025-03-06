"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Cross-Platform App Development",
    description: "We craft high-performance hybrid apps using React Native, Flutter, and Ionic — delivering seamless experiences on iOS and Android."
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Design intuitive, responsive interfaces with pixel-perfect precision, ensuring engaging user experiences across platforms."
  },
  {
    title: "Backend Integration & APIs",
    description: "Connect your hybrid apps to secure RESTful or GraphQL APIs, enabling real-time data sync and cloud connectivity."
  },
  {
    title: "Native Module Development",
    description: "Extend app functionalities with custom native modules for platform-specific features like camera access or geolocation."
  },
  {
    title: "Testing & Debugging",
    description: "Ensure app reliability with robust testing frameworks like Jest and Detox — optimizing performance and fixing bugs."
  },
  {
    title: "App Deployment & Maintenance",
    description: "Deploy hybrid apps to App Store and Google Play, with continuous updates and monitoring for peak performance."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A7ADD9] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-700 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Hybrid App Development Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Empower your business with cross-platform mobile apps — blending native performance with the flexibility of hybrid technologies. 
            From design to deployment, we create fast, dynamic apps tailored for both iOS and Android users.
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
