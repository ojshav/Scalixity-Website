"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can digital solutions improve my food business?",
    answer: "Digital solutions can streamline online ordering, automate inventory management, enhance customer engagement, and optimize delivery logistics, helping you improve efficiency and profitability."
  },
  {
    question: "Can I integrate online ordering with my existing POS system?",
    answer: "Yes! Most modern food tech solutions offer seamless integration with POS systems, making it easier to manage orders, payments, and customer data in one place."
  },
  {
    question: "How does AI help in the food industry?",
    answer: "AI helps in demand forecasting, personalized recommendations, automated kitchen management, and food safety compliance, reducing waste and improving customer satisfaction."
  },
  {
    question: "Is online food ordering safe and secure?",
    answer: "Yes! With secure payment gateways, encrypted transactions, and compliance with industry regulations, online food ordering platforms ensure customer data and financial security."
  },
  {
    question: "How can I ensure food safety and compliance using technology?",
    answer: "You can use IoT sensors for temperature monitoring, automated quality checks, and compliance tracking systems to ensure food safety and adherence to industry regulations."
  },
  {
    question: "Can technology help reduce food waste?",
    answer: "Yes! AI-powered inventory management and predictive analytics can help reduce food waste by tracking usage patterns and optimizing stock levels."
  }
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
