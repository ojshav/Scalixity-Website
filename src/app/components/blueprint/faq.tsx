"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is an App Blueprint?",
    answer:
      "An App Blueprint is a detailed roadmap that outlines the design, architecture, and functionality of your mobile or web application before development begins."
  },
  {
    question: "Why do I need an App Blueprint?",
    answer:
      "A well-structured blueprint helps in reducing development time, mitigating risks, and ensuring a seamless workflow, resulting in a successful app launch."
  },
  {
    question: "What does your blueprint service include?",
    answer:
      "Our blueprint service includes wireframing, prototyping, technical architecture, UI/UX planning, and a comprehensive project roadmap."
  },
  {
    question: "Can I make changes to the blueprint during the process?",
    answer:
      "Yes, we follow an iterative approach where you can review and suggest modifications at various stages of blueprint creation."
  },
  {
    question: "How long does it take to complete an App Blueprint?",
    answer:
      "The timeline varies based on project complexity, but typically, an App Blueprint is completed within 2-4 weeks."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">App Blueprint FAQs</h2>
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
