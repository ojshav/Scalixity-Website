"use client";

import { Calculator, LineChart, DollarSign, Settings, Code, ClipboardList } from "lucide-react";


const offerings = [
  {
    title: "Real-Time Cost Estimation",
    description:
      "Get instant calculations based on API usage, token consumption, and pricing tiers to optimize your expenses.",
    icon: <Calculator className="w-10 h-10 text-black" />,
  },
  {
    title: "Multi-Provider Comparison",
    description:
      "Compare pricing across top LLM providers like OpenAI, Anthropic, Google, and others to find the best cost-effective solution.",
    icon: <LineChart className="w-10 h-10 text-black" />,
  },
  {
    title: "Custom Usage Scenarios",
    description:
      "Simulate various usage patterns and adjust parameters like token limits, requests per second, and concurrency levels.",
    icon: <Settings className="w-10 h-10 text-black" />,
  },
  {
    title: "Dynamic Token Cost Breakdown",
    description:
      "Get detailed insights on input/output token usage, including per-query costs and cumulative expenses over time.",
    icon: <DollarSign className="w-10 h-10 text-black" />,
  },
  {
    title: "Developer-Friendly API Integration",
    description:
      "Seamlessly integrate with our API to fetch real-time cost data and embed the calculator within your application.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Detailed Usage Reports",
    description:
      "Generate comprehensive cost reports, exportable in multiple formats, to help with budgeting and resource planning.",
    icon: <ClipboardList className="w-10 h-10 text-black" />,
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
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            LLM API Pricing Calculator
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Optimize your AI infrastructure costs with our advanced LLM API pricing calculator, offering real-time insights and cost control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg flex flex-col items-start"
            >
              <div className="mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-2">{offer.title}</h3>
              <p className="text-black">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;