"use client";

import { Brain, Settings, ShieldCheck, TrendingUp, LifeBuoy } from "lucide-react";

const services = [
  {
    title: "AI Strategy & Consultation",
    description: "We assess your business needs and define AI-driven solutions tailored to your industry and goals.",
    icon: <Brain className="w-12 h-12 text-black" />,
  },

  {
    title: "Custom AI Model Development",
    description: "We design and train AI models specific to your use case, ensuring optimal accuracy and performance.",
    icon: <Settings className="w-12 h-12 text-black" />,
  },
  {
    title: "AI Security & Compliance",
    description: "Implementing robust security measures to protect AI data and ensure regulatory compliance.",
    icon: <ShieldCheck className="w-12 h-12 text-black" />,
  },
  {
    title: "Scalability & Optimization",
    description: "Ensuring AI models are scalable and optimized for real-world performance and future expansion.",
    icon: <TrendingUp className="w-12 h-12 text-black" />,
  },
  {
    title: "Ongoing Support & Iteration",
    description: "We provide continuous support, enhancements, and improvements based on data insights and feedback.",
    icon: <LifeBuoy className="w-12 h-12 text-black" />,
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
            AI POC Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We help businesses explore and validate AI-driven solutions through rapid prototyping and proof-of-concept development.
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
