"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the typical timeline for developing and deploying an adaptive AI solution?",
    answer:
      "The typical timeline for developing and deploying an adaptive AI solution spans approximately 3 to 6 months. The exact duration depends on the project’s complexity and specific requirements. We provide a detailed project plan and timeline tailored to your needs following our initial consultation.",
  },
  {
    question: "What industries have you successfully implemented adaptive AI solutions in?",
    answer:
      "We have successfully deployed adaptive AI solutions across various industries, including healthcare, fintech, SaaS, manufacturing, travel, insurance, and marketing. Our expertise allows us to tailor solutions that align with industry-specific challenges and opportunities.",
  },
  {
    question: "How do you ensure that the adaptive AI solution will align with our business goals?",
    answer:
      "We begin with a thorough consultation to understand your business needs and objectives. Our AI solutions are designed with a strategic roadmap, ensuring they integrate seamlessly into your existing workflow and provide measurable value.",
  },
  {
    question: "How do you ensure that your adaptive AI solutions are secure and compliant with industry regulations?",
    answer:
      "We implement robust security measures, including end-to-end encryption, role-based access controls, and compliance with industry standards such as GDPR and HIPAA. Our solutions are designed to meet the highest security and compliance requirements.",
  },
  {
    question: "What kind of support do you provide after the adaptive AI solution is deployed?",
    answer:
      "We provide ongoing support, including system monitoring, performance optimization, regular updates, and AI model retraining. Our team ensures that your AI solution remains efficient, scalable, and aligned with evolving business needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Adaptive AI Systems Development
          </h2>
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
