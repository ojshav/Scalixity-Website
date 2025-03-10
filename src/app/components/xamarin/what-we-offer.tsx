"use client"

import { motion } from 'framer-motion';

const offerings = [
  {
    title: "Cross-Platform App Development",
    description: "Build seamless mobile applications that run smoothly on both iOS and Android using a single codebase with Xamarin.",
  },
  {
    title: "UI/UX Design Integration",
    description: "Craft intuitive, responsive, and visually appealing user interfaces tailored to enhance user experience across devices.",
  },
  {
    title: "Cloud Integration",
    description: "Leverage cloud services like Azure to enable real-time data sync, push notifications, and secure storage for your apps.",
  },
  {
    title: "App Testing & QA",
    description: "Ensure app stability and performance with comprehensive testing strategies using Xamarin Test Cloud.",
  },
  {
    title: "Custom Xamarin Solutions",
    description: "Tailored Xamarin app solutions to meet your business goals, from enterprise apps to consumer-facing products.",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing app maintenance, bug fixes, and feature updates to keep your Xamarin apps running at peak performance.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">Xamarin App Development Services</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Discover how our Xamarin expertise helps you create powerful, cross-platform mobile applications with seamless performance and native experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-black rounded-lg bg-[#F3F1EB]"
            >
              <h3 className="text-xl font-semibold text-black mb-4">{offer.title}</h3>
              <p className="text-gray-800">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
