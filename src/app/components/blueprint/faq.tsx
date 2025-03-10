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
    <section className="bg-[#F3F1EB] py-20"> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">App Blueprint FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg border border-gray-600" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-900 font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-gray-600">
                  <p className="text-gray-800">{faq.answer}</p>
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
