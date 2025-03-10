"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    description: "We start by understanding your business needs, user requirements, and chatbot objectives to ensure alignment with your goals."
  },
  {
    title: "AI Model Selection",
    description: "Choosing the right AI framework such as GPT, Dialogflow, or AWS Lex, based on complexity, industry, and language processing needs."
  },
  {
    title: "Conversational Flow Design",
    description: "We design user-friendly chatbot conversation flows, integrating NLP, intent recognition, and response generation for natural interactions."
  },
  {
    title: "Development & Integration",
    description: "Building the chatbot and integrating it with CRMs, ERPs, messaging platforms, APIs, and databases for seamless functionality."
  },
  {
    title: "Testing & Optimization",
    description: "Performing rigorous testing, fine-tuning NLP models, and optimizing responses for accuracy, security, and user experience."
  },
  {
    title: "Deployment & Support",
    description: "Launching the chatbot on your preferred channels, providing continuous monitoring, updates, and support to enhance performance."
  }
];

export function Process() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">Process</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Enterprise Chatbot AI Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From planning to deployment, we follow a structured approach to build intelligent and scalable AI-powered chatbots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#A8B2E7] border border-black rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-black" />
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              </div>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
