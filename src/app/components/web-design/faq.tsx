"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to design a website?",
    answer:
      "The timeline depends on project complexity, but a standard website design typically takes 4-6 weeks.",
  },
  {
    question: "Do you offer responsive web design?",
    answer:
      "Yes, all our designs are fully responsive, ensuring a seamless experience across all devices.",
  },
  {
    question: "What platforms do you design websites for?",
    answer:
      "We design websites for platforms like WordPress, Webflow, Shopify, and custom-built solutions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we analyze your current website and provide a modern, user-friendly design to enhance user experience.",
  },
  {
    question: "Do you provide design files after project completion?",
    answer:
      "Yes, we deliver all design assets, including source files, wireframes, and style guides.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Web Design FAQs</h2>
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
