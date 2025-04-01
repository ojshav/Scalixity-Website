"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced Customer Support",
    description: "Provide 24/7 customer service with AI chatbots that handle inquiries, troubleshoot issues, and escalate complex requests efficiently."
  },
  {
    title: "Operational Efficiency",
    description: "Automate routine tasks like appointment scheduling, data collection, and ticket generation, reducing manual workload."
  },
  {
    title: "Seamless Omnichannel Experience",
    description: "Deploy AI chatbots across web, mobile apps, and social media platforms, ensuring consistent and integrated user interactions."
  },
  {
    title: "Personalized User Engagement",
    description: "Utilize AI algorithms to analyze user data and deliver tailored responses, recommendations, and support."
  },
  {
    title: "Real-time Analytics & Insights",
    description: "Gain actionable insights into chatbot performance, user feedback, and behavior patterns for continuous optimization."
  },
  {
    title: "Scalable AI Solutions",
    description: "Ensure your AI chatbots grow with your business, maintaining speed, accuracy, and functionality as demand increases."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of Enterprise Chatbot AI Development</h2>
        <p className="text-lg text-black mb-12">
          Unlock the full potential of AI chatbots — enhancing customer service, automating processes, and driving business growth.
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
         
        </div>
      </div>
    </section>
  );
}

export default Benefits;
