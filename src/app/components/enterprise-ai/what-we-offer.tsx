"use client";

import { CheckCircle } from "lucide-react";

const offerings = [
  {
    title: "Custom AI Solutions",
    description:
      "We design and implement AI-driven solutions tailored to your business needs, ensuring efficiency and scalability.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Optimize your operations with AI automation, reducing costs and improving workflow efficiency.",
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Harness the power of AI for advanced data analytics, providing actionable insights for informed decision-making.",
  },
  {
    title: "Machine Learning Model Development",
    description:
      "We develop and fine-tune machine learning models that drive predictive analytics and intelligent decision-making.",
  },
  {
    title: "AI Integration & Deployment",
    description:
      "Seamlessly integrate AI into your existing systems with minimal disruption to your business operations.",
  },
  {
    title: "Continuous AI Optimization",
    description:
      "Ensure long-term AI performance with ongoing monitoring, updates, and optimization strategies.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">What We Offer</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock business growth with our Enterprise AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-6 rounded-xl border-2 border-gray-600 flex items-start gap-4 shadow-lg"
            >
              <CheckCircle className="text-black w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-black">{offer.title}</h3>
                <p className="text-black mt-2">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
