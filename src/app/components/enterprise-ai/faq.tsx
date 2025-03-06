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
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Enterprise AI FAQs</h2>
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
