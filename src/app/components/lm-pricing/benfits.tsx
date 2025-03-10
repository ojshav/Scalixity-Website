"use client";

import { DollarSign, Clock, BarChart, Shield, Code, Zap } from "lucide-react";

const benefits = [
  {
    title: "Cost Transparency",
    description:
      "Get clear insights into API costs, helping you optimize expenses and avoid unexpected charges.",
    icon: <DollarSign className="w-10 h-10 text-black" />,
  },
  {
    title: "Time Efficiency",
    description:
      "Save hours of manual calculations with real-time pricing estimates for different API usage scenarios.",
    icon: <Clock className="w-10 h-10 text-black" />,
  },
  {
    title: "Usage Optimization",
    description:
      "Identify the most cost-effective models and configurations based on your usage patterns.",
    icon: <BarChart className="w-10 h-10 text-black" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure pricing calculations align with data security and compliance best practices.",
    icon: <Shield className="w-10 h-10 text-black" />,
  },
  {
    title: "Developer-Friendly",
    description:
      "Easily integrate with your workflow using simple APIs and intuitive dashboards.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Scalability & Performance",
    description:
      "Designed to handle high volumes of pricing requests without compromising speed.",
    icon: <Zap className="w-10 h-10 text-black" />,
  },
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            KEY BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Our LLM API Pricing Calculator?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Gain accurate pricing insights, optimize costs, and enhance your AI model deployment with our efficient API pricing calculator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-black">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
