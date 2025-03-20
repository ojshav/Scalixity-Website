"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Native App Development",
    description: "We design and build high-performance native apps for iOS and Android, ensuring seamless user experiences tailored to your brand."
  },
  {
    title: "Cross-Platform Development",
    description: "Leverage frameworks like React Native to create apps that work flawlessly across both iOS and Android platforms."
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive, engaging interfaces with pixel-perfect designs, enhancing user interaction and retention."
  },
  {
    title: "App Integration & API Development",
    description: "Seamlessly connect your app with third-party services, cloud storage, and internal APIs for extended functionality."
  },
  {
    title: "Performance Optimization",
    description: "Ensure fast load times, smooth animations, and minimal resource consumption for top-tier app performance."
  },
  {
    title: "App Store Deployment & Support",
    description: "From App Store and Google Play submission to post-launch maintenance, we’ve got you covered every step of the way."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Native App Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Build stunning, high-performance mobile apps with native development. We create engaging, feature-rich apps for iOS and Android, optimized for speed, security, and user experience. Let’s turn your ideas into seamless mobile solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-gray-700 transition-colors"
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
