"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Accelerated AI Model Development",
    description: "Harness the expertise of AI engineers to rapidly design, train, and deploy advanced AI models tailored to your business needs."
  },
  {
    title: "Custom AI Solutions",
    description: "From predictive analytics to natural language processing, our AI engineers build custom solutions that align with your strategic goals."
  },
  {
    title: "Seamless Integration",
    description: "Integrate AI models into your existing infrastructure, ensuring smooth interoperability with cloud platforms, databases, and enterprise systems."
  },
  {
    title: "Scalability & Optimization",
    description: "Our AI experts optimize models for performance and scalability, allowing your AI solutions to grow with your business demands."
  },
  {
    title: "Real-Time Decision Making",
    description: "Empower your operations with AI models capable of processing data in real-time for instant insights and automation."
  },
  {
    title: "Continuous Monitoring & Improvement",
    description: "Benefit from ongoing AI model monitoring, retraining, and updates to maintain accuracy and relevance over time."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of AI Engineers</h2>
        <p className="text-lg text-black mb-12">
          Discover how our AI engineers drive innovation and build intelligent systems tailored to your unique business challenges.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-black bg-[#F3F1EB] text-black hover:border-gray-700 transition"
            >
              <CheckCircle className="text-black w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
