"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced Productivity",
    description: "AI copilots assist with automating repetitive tasks, streamlining workflows, and boosting overall team efficiency."
  },
  {
    title: "Real-Time Decision Support",
    description: "Receive AI-driven insights and recommendations in real-time, helping users make informed decisions faster."
  },
  {
    title: "Context-Aware Assistance",
    description: "AI copilots understand user context and provide relevant suggestions, from writing code to drafting content."
  },
  {
    title: "Seamless Integration",
    description: "Integrate AI copilots into your existing tools and platforms, enhancing productivity without disrupting current workflows."
  },
  {
    title: "Continuous Learning",
    description: "Leverage AI models that learn and adapt over time, improving responses and support with every interaction."
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Extract actionable insights from AI interactions to drive innovation and optimize processes."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of AI Copilot Development</h2>
        <p className="text-lg text-black mb-12">
          Discover how AI copilots enhance productivity, automate tasks, and provide real-time support tailored to your business needs.
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

        <div className="mt-12">
          <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
