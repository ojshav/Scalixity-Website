"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "24/7 Customer Support",
    description: "AI chatbots provide instant and accurate responses anytime, reducing wait times and improving customer satisfaction."
  },
  {
    title: "Cost Efficiency",
    description: "Automating customer interactions reduces operational costs while maintaining high-quality service."
  },
  {
    title: "Personalized User Experience",
    description: "Advanced AI chatbots analyze user behavior and preferences to deliver personalized recommendations and support."
  },
  {
    title: "Scalability",
    description: "Handle multiple customer interactions simultaneously without compromising service quality."
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate AI chatbots with existing business tools like CRMs, ERPs, and messaging platforms."
  },
  {
    title: "Enhanced Analytics & Insights",
    description: "Gain valuable insights from chatbot interactions to improve business strategies and customer engagement."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#080B16] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Key Benefits of AI Chatbots</h2>
        <p className="text-lg text-gray-400 mb-12">
          Discover how AI-powered chatbots can revolutionize customer interactions and business efficiency.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <CheckCircle className="text-green-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
