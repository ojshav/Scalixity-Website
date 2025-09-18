"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "AI-Powered Chatbots & Virtual Assistants",
    description: "Enhance user experience by integrating AI chatbots that provide instant support, automate workflows, and personalize interactions in real-time.",
    image: "/images/ai-chatbot.svg"
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Leverage AI to predict user behavior, revenue trends, and operational insights, helping you make data-driven decisions and optimize strategies.",
    image: "/images/ai-disease-prediction.svg"
  },
  {
    title: "Intelligent Workflow Automation",
    description: "Automate repetitive tasks using AI, reducing manual errors and increasing operational efficiency across your SaaS platform.",
    image: "/images/ai.svg"
  },
  {
    title: "Customer Retention & Churn Prediction",
    description: "Identify at-risk customers with AI algorithms and implement proactive strategies to boost retention and reduce churn rates.",
    image: "/images/ai-voice-ordering.svg"
  },
  {
    title: "Personalized Recommendation Engines",
    description: "Deliver tailored product suggestions and content to users based on their preferences, driving engagement and boosting conversions.",
    image: "/images/Customer Support.svg"
  },
  {
    title: "Fraud Detection & Risk Mitigation",
    description: "Protect your SaaS platform with AI models that detect suspicious activities, ensuring secure transactions and mitigating potential risks.",
    image: "/images/FinTech Mobile App.svg"
  }
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Use Cases for SaaS
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the full potential of AI to streamline operations, boost user engagement, and scale your SaaS platform effortlessly.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center border-2 border-black bg-[#F3F1EB] p-8 rounded-xl"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-black mb-8">{useCase.description}</p>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden border-2 border-black">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
