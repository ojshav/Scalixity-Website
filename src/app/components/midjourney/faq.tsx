"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is MidJourney, and how does it work?",
    answer:
      "MidJourney is an AI-powered platform that generates high-quality images from text prompts. It utilizes advanced machine learning models to interpret descriptions and create visually stunning artwork.",
  },
  {
    question: "How can I access MidJourney?",
    answer:
      "MidJourney is accessible through its Discord server. Users can interact with the AI by entering text prompts in designated channels to generate images.",
  },
  {
    question: "What kind of images can MidJourney create?",
    answer:
      "MidJourney can generate a wide range of images, including fantasy art, landscapes, portraits, concept designs, and abstract visuals, all based on user-provided text descriptions.",
  },
  {
    question: "Do I need technical skills to use MidJourney?",
    answer:
      "No technical skills are required. MidJourney is designed for anyone to use by simply providing text prompts, making AI-generated art accessible to everyone.",
  },
  {
    question: "Is MidJourney free to use?",
    answer:
      "MidJourney offers both free and paid subscription plans. Free users have limited generations per month, while paid plans provide additional benefits and extended usage limits.",
  },
  {
    question: "Can I use MidJourney images for commercial purposes?",
    answer:
      "Users with paid subscriptions have commercial usage rights, while free users may have restrictions. It is recommended to check MidJourney’s terms of service for detailed licensing information.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            MidJourney AI FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#0F1629] rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#0F1629] mt-1 rounded-lg">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
