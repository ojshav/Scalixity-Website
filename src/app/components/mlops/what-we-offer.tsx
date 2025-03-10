"use client";

import { Database, Settings, BarChart, Layers, Rocket, Shield } from "lucide-react";


const offerings = [
  {
    title: "End-to-End MLOps Strategy",
    description:
      "We develop a complete MLOps roadmap tailored to your business needs, ensuring seamless ML model deployment and management.",
    icon: <Layers className="w-10 h-10 text-black" />,
  },
  {
    title: "Automated ML Pipelines",
    description:
      "Implement CI/CD workflows for machine learning, automating data processing, model training, and deployment.",
    icon: <Settings className="w-10 h-10 text-black" />,
  },
  {
    title: "Cloud & On-Prem Deployment",
    description:
      "We help you deploy ML models on AWS, Azure, GCP, or on-premises, ensuring scalability, security, and efficiency.",
    icon: <Database className="w-10 h-10 text-black" />,
  },
  {
    title: "Model Monitoring & Optimization",
    description:
      "Set up real-time monitoring, drift detection, and performance tuning to maintain high accuracy and reliability.",
    icon: <BarChart className="w-10 h-10 text-black" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure data security, model governance, and regulatory compliance with best-in-class security practices.",
    icon: <Shield className="w-10 h-10 text-black" />,
  },
  {
    title: "Scaling & Performance Enhancement",
    description:
      "Optimize ML workflows to handle large-scale data and improve inference speed for real-time applications.",
    icon: <Rocket className="w-10 h-10 text-black" />,
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
            MLOps Consulting Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Streamline your ML lifecycle with our expert MLOps solutions, designed for automation, scalability, and efficiency.
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
