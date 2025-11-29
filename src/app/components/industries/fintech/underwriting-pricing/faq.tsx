"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does AI improve the underwriting process?",
    answer: "AI enhances underwriting by analyzing vast amounts of data, identifying risk patterns, and making fast, accurate decisions while minimizing human errors."
  },
  {
    question: "Can your underwriting model be customized for our specific industry?",
    answer: "Yes, our AI-powered underwriting solutions are fully customizable to meet the specific risk assessment needs of different financial sectors, including banking, insurance, and lending."
  },
  {
    question: "How does AI-driven pricing benefit financial institutions?",
    answer: "AI-driven pricing helps financial institutions set competitive, personalized rates by analyzing customer profiles, risk factors, and market trends in real-time."
  },
  {
    question: "Is your AI underwriting process compliant with financial regulations?",
    answer: "Absolutely. We ensure compliance with industry standards such as GDPR, FCRA, and other financial regulations through robust auditing and transparent decision-making models."
  },
  {
    question: "How does AI detect fraud during underwriting?",
    answer: "Our AI models analyze transactional behaviors, detect anomalies, and flag suspicious activities using predictive analytics and fraud detection algorithms."
  },
  {
    question: "What kind of data is used for AI-based underwriting?",
    answer: "We utilize a combination of structured and unstructured data, including credit scores, financial history, behavioral insights, and alternative data sources to build comprehensive risk profiles."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
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
                <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
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
