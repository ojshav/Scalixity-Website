"use client";

import { Image, Palette, Settings, Code } from "lucide-react";

const offers = [
  {
    icon: Image,
    title: "Custom Stable Diffusion Models",
    description:
      "We specialize in fine-tuning Stable Diffusion models to generate highly customized and industry-specific AI-generated visuals tailored to your unique requirements."
  },
  {
    icon: Palette,
    title: "Style Adaptation & Enhancement",
    description:
      "We provide advanced style transfer and enhancement techniques, ensuring that your AI-generated art maintains brand consistency and visual appeal."
  },
  {
    icon: Settings,
    title: "Optimized Model Deployment",
    description:
      "Our team ensures efficient deployment of Stable Diffusion models on cloud platforms, local machines, or edge devices for seamless performance."
  },
  {
    icon: Code,
    title: "API Integration & Automation",
    description:
      "We offer seamless API integration of Stable Diffusion models into your existing applications, websites, or automation pipelines for enhanced productivity."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">What We Offer</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our expertise in Stable Diffusion empowers businesses and creators with cutting-edge AI-generated image solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg transition-transform hover:scale-105"
            >
              <offer.icon className="w-12 h-12 text-black mb-6" /> {/* Icons Black */}
              <h3 className="text-xl font-bold text-black mb-4">{offer.title}</h3>
              <p className="text-black">{offer.description}</p>
              <button className="text-black hover:text-gray-700 transition-colors mt-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
