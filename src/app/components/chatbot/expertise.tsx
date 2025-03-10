"use client";

import { Bot, MessageSquare, Settings, Globe, Users, Code } from 'lucide-react';

const chatbotExpertise = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "We develop intelligent chatbots that enhance customer interactions, automate support, and improve engagement."
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Design",
    description: "Our experts craft human-like conversational flows, ensuring a seamless and engaging user experience."
  },
  {
    icon: Settings,
    title: "Custom Chatbot Development",
    description: "Tailored chatbot solutions designed to meet specific business needs, from lead generation to customer service automation."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Enable global reach with chatbots that understand and respond in multiple languages, enhancing accessibility and inclusivity."
  },
  {
    icon: Users,
    title: "Chatbot Training & Optimization",
    description: "We continuously train and optimize AI models to improve chatbot accuracy, efficiency, and responsiveness."
  },
  {
    icon: Code,
    title: "Seamless Integration",
    description: "Integrate chatbots with CRM, ERP, and other business systems for automated workflows and enhanced productivity."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI Chatbot Development Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Leverage our expertise in AI chatbot development to transform customer interactions and business automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotExpertise.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
