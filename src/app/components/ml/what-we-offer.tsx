"use client";

import { Brain, Code, Database, LineChart, Settings, Shield } from "lucide-react";


const offerings = [
  {
    icon: Brain,
    title: "Custom ML Model Development",
    description:
      "Design and train cutting-edge machine learning models tailored to your business needs, leveraging deep learning, NLP, and computer vision.",
  },
  {
    icon: Code,
    title: "AI-Powered Application Development",
    description:
      "Integrate ML capabilities into your applications, enhancing automation, data-driven insights, and intelligent decision-making.",
  },
  {
    icon: Database,
    title: "Big Data Processing & Analysis",
    description:
      "Utilize scalable data pipelines and ML algorithms to process massive datasets, uncover patterns, and generate actionable insights.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Forecasting",
    description:
      "Implement AI-driven predictive models to optimize business strategies, risk assessment, and demand forecasting.",
  },
  {
    icon: Settings,
    title: "ML Model Optimization & Deployment",
    description:
      "Optimize, fine-tune, and deploy ML models in production environments, ensuring high efficiency, scalability, and real-time performance.",
  },
  {
    icon: Shield,
    title: "Secure & Ethical AI Solutions",
    description:
      "Develop responsible AI models with built-in security, fairness, and compliance to ensure trust and transparency.",
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
            End-to-End Machine Learning Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From custom ML model development to AI-driven analytics, we provide 
            scalable, secure, and high-performance machine learning solutions.
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

export default WhatWeOffer ;
