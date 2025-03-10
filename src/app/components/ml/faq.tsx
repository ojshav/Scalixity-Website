"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What industries benefit the most from ML development?",
    answer:
      "ML is widely used in finance, healthcare, e-commerce, cybersecurity, manufacturing, and more. It helps optimize operations, detect fraud, personalize user experiences, and make data-driven decisions.",
  },
  {
    question: "How long does it take to develop an ML model?",
    answer:
      "The timeline depends on the complexity of the model, data availability, and project requirements. It typically ranges from a few weeks to several months.",
  },
  {
    question: "What data is required for ML model training?",
    answer:
      "ML models require structured or unstructured data, including historical records, real-time data streams, and labeled datasets for supervised learning.",
  },
  {
    question: "Can ML models be deployed on cloud and on-premise?",
    answer:
      "Yes, ML models can be deployed on cloud platforms like AWS, Google Cloud, and Azure, or on-premise based on your security and infrastructure needs.",
  },
  {
    question: "How do you ensure the accuracy and reliability of ML models?",
    answer:
      "We use rigorous model evaluation techniques, hyperparameter tuning, cross-validation, and continuous monitoring to ensure high accuracy and reliability.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black"
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
                <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
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
