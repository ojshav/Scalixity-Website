"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Financial AI Agent",
    description:
      "We develop AI agents for finance and banking institutions that provide personalized financial advice and proactive customer service tailored to individual client goals and risk tolerance.",
    image: "/images/ai-chatbot.svg",
  },
  {
    title: "Underwriting & Pricing Automation",
    description:
      "By building AI algorithms that automate underwriting, we help businesses accurately assess risk, determine optimal pricing, and improve efficiency.",
    image: "/images/Automating Banking Services with Conversational AI.svg",
  },
  {
    title: "Financial Document Automation",
    description:
      "We streamline financial document processing using AI, automating data extraction, classification, and validation to reduce errors and ensure compliance.",
    image: "/images/icons/finance.svg",
  },
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black mb-6">
            AI Use Cases for Finance & Banking
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Discover how our AI solutions revolutionize the finance and banking sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F3F1EB] border border-black p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {useCase.title}
              </h3>
              <p className="text-black">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
