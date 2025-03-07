"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the typical timeline for developing an Enterprise AI solution?",
    answer:
      "The timeline varies based on project complexity, but most Enterprise AI solutions take between 3 to 6 months from planning to deployment.",
  },
  {
    question: "What industries have you worked with for AI implementation?",
    answer:
      "We have implemented AI solutions across multiple industries including healthcare, finance, e-commerce, manufacturing, retail, and education.",
  },
  {
    question: "How do you ensure AI models align with business goals?",
    answer:
      "We conduct in-depth strategy sessions with stakeholders to ensure AI solutions align with business objectives and deliver measurable impact.",
  },
  {
    question: "How do you ensure AI solutions are secure and compliant?",
    answer:
      "We follow industry-leading security protocols, including data encryption, role-based access control, and compliance with GDPR, HIPAA, and SOC2.",
  },
  {
    question: "Do you provide support after AI deployment?",
    answer:
      "Yes, we offer ongoing AI model monitoring, optimization, and updates to ensure long-term performance and scalability.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Enterprise AI FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-600 rounded-lg">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-t-lg"
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
                <div className="p-4 bg-[#A8B2E7] border-t border-gray-600 rounded-b-lg">
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

