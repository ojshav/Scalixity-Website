"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced Image Recognition",
    description: "Leverage AI-powered algorithms to accurately identify objects, patterns, and anomalies in images and videos."
  },
  {
    title: "Real-Time Processing",
    description: "Enable fast and efficient real-time analysis of visual data for applications like surveillance, automation, and augmented reality."
  },
  {
    title: "Automation of Repetitive Tasks",
    description: "Automate tasks like quality inspection, inventory tracking, and document scanning using computer vision models."
  },
  {
    title: "Improved Decision-Making",
    description: "Gain data-driven insights from visual data to optimize business processes and enhance operational efficiency."
  },
  {
    title: "Seamless Integration",
    description: "Integrate computer vision solutions with existing systems like ERPs, CRMs, and IoT devices for streamlined workflows."
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Extract valuable insights from images and videos to drive innovation and improve customer experiences."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of Computer Vision Development</h2>
        <p className="text-lg text-black mb-12">
          Explore how AI-driven computer vision solutions transform visual data into actionable insights and automation.
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
