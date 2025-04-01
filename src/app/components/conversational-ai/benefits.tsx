"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "24/7 Customer Support",
    description: "AI chatbots provide instant responses anytime, reducing wait times and boosting customer satisfaction."
  },
  {
    title: "Personalized User Experiences",
    description: "Advanced AI models analyze user behavior to deliver tailored responses and recommendations."
  },
  {
    title: "Cost-Effective Automation",
    description: "Automate customer service and routine inquiries, reducing operational costs without compromising quality."
  },
  {
    title: "Multilingual Support",
    description: "Reach a global audience by integrating AI-driven language models to offer seamless multilingual assistance."
  },
  {
    title: "Seamless Platform Integration",
    description: "Integrate AI chatbots with CRMs, ERPs, and messaging apps like WhatsApp and Slack for smooth workflows."
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage AI analytics to gather insights from customer interactions and improve service strategies."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#A8B2E7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Key Benefits of Conversational AI Development</h2>
        <p className="text-lg text-black mb-12">
          Discover how AI-powered conversational solutions enhance customer interactions and optimize business operations.
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
