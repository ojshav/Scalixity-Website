"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a Personalized Financial Engine?",
    answer:
      "A Personalized Financial Engine is an AI-driven system that provides tailored financial insights, investment strategies, and budgeting recommendations based on an individual's financial goals and spending patterns.",
  },
  {
    question: "How does AI improve financial personalization?",
    answer:
      "AI analyzes a user’s financial data, spending habits, and market trends to offer real-time suggestions on saving, investing, and risk management, ensuring more accurate and dynamic financial planning.",
  },
  {
    question: "Is my financial data secure when using personalized financial engines?",
    answer:
      "Yes! Our solutions comply with industry security standards, including encryption and secure authentication, ensuring that your financial data remains protected and private.",
  },
  {
    question: "Can a financial engine replace a human financial advisor?",
    answer:
      "While AI-powered financial engines provide deep data-driven insights, human advisors offer emotional intelligence and strategic planning. The best approach is a hybrid model combining both AI and human expertise.",
  },
  {
    question: "How do these engines adapt to market fluctuations?",
    answer:
      "By continuously monitoring market trends, interest rates, and economic indicators, AI-powered financial engines adjust their recommendations to align with changing financial conditions.",
  },
  {
    question: "Do these engines support multiple financial goals?",
    answer:
      "Yes! Whether you're saving for a home, planning for retirement, or managing investments, personalized financial engines can tailor recommendations to meet various financial objectives simultaneously.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] border border-black mt-1 rounded-lg">
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
