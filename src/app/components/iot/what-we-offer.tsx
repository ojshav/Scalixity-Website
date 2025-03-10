"use client";

import { Cloud, Wifi, Shield, Cpu, Code, Database } from "lucide-react";


const offerings = [
  {
    icon: Cloud,
    title: "Cloud-Connected IoT Solutions",
    description:
      "Seamless integration with leading cloud platforms like AWS IoT, Azure IoT, and Google Cloud IoT for real-time data processing and scalability.",
  },
  {
    icon: Wifi,
    title: "IoT Device Connectivity",
    description:
      "End-to-end IoT device development with support for WiFi, Bluetooth, Zigbee, LoRaWAN, and other communication protocols.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Robust security mechanisms including encryption, secure device authentication, and data protection to prevent cyber threats.",
  },
  {
    icon: Cpu,
    title: "Edge Computing & AI Integration",
    description:
      "Leverage edge AI and machine learning for real-time decision-making and reduced latency in IoT applications.",
  },
  {
    icon: Code,
    title: "Custom IoT Software Development",
    description:
      "Tailored IoT applications, dashboards, and APIs to provide intelligent data analytics, automation, and remote monitoring.",
  },
  {
    icon: Database,
    title: "Data Analytics & Insights",
    description:
      "Harness IoT-generated data with AI-powered analytics to drive predictive maintenance, process optimization, and business intelligence.",
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
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Comprehensive IoT Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We provide end-to-end IoT solutions, from device connectivity to AI-powered analytics, ensuring smart, scalable, and secure IoT deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <offering.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">
                {offering.title}
              </h3>
              <p className="text-black">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
