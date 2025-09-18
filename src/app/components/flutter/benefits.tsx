"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Cross-Platform Compatibility",
    description: "Develop seamless mobile applications that run efficiently on both iOS and Android from a single codebase."
  },
  {
    title: "Faster Time-to-Market",
    description: "Speed up development cycles with Flutter's hot reload feature, enabling real-time code updates and rapid prototyping."
  },
  {
    title: "Rich UI/UX Designs",
    description: "Create visually stunning and highly customizable interfaces using Flutter's extensive widget library."
  },
  {
    title: "High Performance",
    description: "Ensure smooth and fast app performance by leveraging Flutter's native compilation and direct access to platform APIs."
  },
  {
    title: "Cost-Effective Development",
    description: "Reduce costs by using a single codebase for multiple platforms, cutting development and maintenance expenses."
  },
  {
    title: "Scalable Solutions",
    description: "Build scalable apps with Flutter's flexible architecture, allowing your app to grow alongside your business."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of Flutter App Development</h2>
        <p className="text-lg text-black mb-12">
          Unlock the full potential of Flutter — delivering cross-platform apps with stunning UI, high performance, and rapid development.
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
