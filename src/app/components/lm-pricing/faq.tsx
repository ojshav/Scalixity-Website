"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is an LLM API Pricing Calculator?",
    answer:
      "An LLM API Pricing Calculator helps estimate the cost of using Large Language Models by calculating based on token usage, API calls, and other relevant factors.",
  },
  {
    question: "How do you calculate the cost of using an LLM API?",
    answer:
      "The cost is calculated based on input and output token usage, the number of API calls, and the selected model's pricing, often charged per token or per request.",
  },
  {
    question: "Can I compare different LLM models using this calculator?",
    answer:
      "Yes, the calculator allows you to compare costs for various LLM models, helping you choose the most cost-effective option for your use case.",
  },
  {
    question: "Is the pricing estimate accurate?",
    answer:
      "The estimates are based on current pricing information provided by LLM providers. However, final costs may vary depending on additional factors like premium features or rate limits.",
  },
  {
    question: "Do I need technical knowledge to use the calculator?",
    answer:
      "No, the calculator is user-friendly and designed for both technical and non-technical users to easily estimate their LLM API costs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">LLM API Pricing Calculator FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white border border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-black" />
                ) : (
                  <ChevronDown className="text-black" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white mt-1 border border-black rounded-lg">
                  <p className="text-black">{faq.answer}</p>
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
