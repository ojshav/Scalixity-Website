"use client";

import { Smartphone, Code, Rocket, ShieldCheck, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Cross-Platform Development",
    description: "We build high-performance mobile apps that run seamlessly on both iOS and Android using a single codebase.",
    icon: <Smartphone className="w-12 h-12 text-black" />,
  },
  {
    title: "Custom App Development",
    description: "Tailor-made solutions designed to match your unique business needs, ensuring scalability and user engagement.",
    icon: <Code className="w-12 h-12 text-black" />,
  },
  {
    title: "App Optimization & Performance",
    description: "We ensure your app is optimized for speed, efficiency, and smooth user experiences across all devices.",
    icon: <Rocket className="w-12 h-12 text-black" />,
  },
  {
    title: "Security & Compliance",
    description: "Implementing top-tier security practices to protect user data and comply with industry regulations.",
    icon: <ShieldCheck className="w-12 h-12 text-black" />,
  },
  {
    title: "Scalability & Future-Ready Solutions",
    description: "Our apps are built to scale, accommodating future growth and evolving user demands.",
    icon: <TrendingUp className="w-12 h-12 text-black" />,
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "We provide continuous updates, bug fixes, and enhancements to keep your app running at its best.",
    icon: <Users className="w-12 h-12 text-black" />,
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            React Native App Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We provide top-notch React Native development services to build high-performance, scalable, and secure mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              </div>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
