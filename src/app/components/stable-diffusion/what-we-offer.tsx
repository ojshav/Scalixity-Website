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
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What We Offer</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our expertise in Stable Diffusion empowers businesses and creators with cutting-edge AI-generated image solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              {/* Change icon color to black */}
              <offer.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{offer.title}</h3>
              <p className="text-gray-400">{offer.description}</p>
              {/* If there's a "Learn More" button, change its color */}
              <button className="text-black hover:text-gray-500 transition-colors">
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
