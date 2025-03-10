"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Cross-Platform Development",
    description: "Build high-performance apps for iOS, Android, and Windows with a single C# codebase, reducing development time and costs."
  },
  {
    title: "Native-Like Performance",
    description: "Leverage Xamarin’s native APIs and UI components to deliver a seamless, high-quality user experience across platforms."
  },
  {
    title: "Faster Time to Market",
    description: "Accelerate development with Xamarin.Forms and reusable code, enabling quicker deployment of feature-rich mobile applications."
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with third-party libraries, cloud services, and enterprise systems like Azure, AWS, and REST APIs."
  },
  {
    title: "Cost-Effective Solution",
    description: "Reduce development and maintenance costs by utilizing a shared codebase while ensuring a native experience for all platforms."
  },
  {
    title: "Robust Security & Scalability",
    description: "Ensure enterprise-grade security and scalability with built-in authentication, encryption, and cloud support."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of Xamarin App Development</h2>
        <p className="text-lg text-black mb-12">
          Build cross-platform mobile apps with Xamarin, ensuring high performance, cost-efficiency, and a seamless user experience.
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
