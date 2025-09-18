"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom iOS App Development",
    description:
      "We craft tailored iOS applications using Swift and SwiftUI, ensuring high performance and seamless user experiences.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Design sleek, user-centric interfaces with UIKit and SwiftUI, coupled with interactive prototyping to visualize app workflows.",
  },
  {
    title: "Backend Integration",
    description:
      "Seamlessly connect iOS apps with Firebase, RESTful APIs, and GraphQL backends for real-time data synchronization.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Ensure app stability and performance with XCTest, TestFlight, and continuous integration pipelines.",
  },
  {
    title: "App Store Deployment",
    description:
      "Handle end-to-end deployment processes with App Store Connect, ensuring smooth submission and compliance with Apple's guidelines.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Provide ongoing app support, bug fixes, and feature updates to keep your iOS app running smoothly.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our iOS App Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the full potential of iOS with our custom app development
            solutions. From intuitive design to seamless backend integration, we
            build scalable, secure apps tailored to your business needs.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
