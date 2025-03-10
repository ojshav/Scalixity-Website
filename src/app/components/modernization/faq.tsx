"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is App Modernization?",
    answer:
      "App modernization involves updating legacy applications by adopting modern technologies, architectures, and practices to enhance performance, scalability, and security.",
  },
  {
    question: "Why is App Modernization important?",
    answer:
      "Modernizing apps helps businesses stay competitive by improving efficiency, reducing technical debt, and enabling better integration with modern platforms and cloud services.",
  },
  {
    question: "What are the different strategies for App Modernization?",
    answer:
      "Common strategies include rehosting (lift and shift), refactoring, rearchitecting, and rebuilding applications to better align with current business and tech needs.",
  },
  {
    question: "How do you decide which apps to modernize?",
    answer:
      "We assess your application's current performance, technical debt, and business value to prioritize modernization efforts and maximize ROI.",
  },
  {
    question: "Will App Modernization affect my business operations?",
    answer:
      "Our approach ensures minimal disruption by using phased rollouts, thorough testing, and backup strategies to maintain seamless business operations.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">App Modernization FAQs</h2>
        </div>

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
