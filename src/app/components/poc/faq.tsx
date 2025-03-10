"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is AI PoC development?",
    answer:
      "AI PoC (Proof of Concept) development is the process of creating a small-scale, functional prototype to test and validate an AI solution's feasibility before full-scale implementation.",
  },
  {
    question: "Why should I invest in an AI PoC?",
    answer:
      "An AI PoC helps mitigate risks by identifying technical challenges early, providing stakeholders with tangible insights, and ensuring the AI solution aligns with business goals.",
  },
  {
    question: "How long does it take to build an AI PoC?",
    answer:
      "The timeline for an AI PoC depends on the project's complexity, but typically ranges from 4 to 8 weeks. It involves data collection, model development, and initial testing.",
  },
  {
    question: "What technologies are used in AI PoC development?",
    answer:
      "We utilize a range of AI technologies including machine learning, natural language processing, computer vision, and AI frameworks like TensorFlow and PyTorch.",
  },
  {
    question: "What happens after a successful AI PoC?",
    answer:
      "After a successful AI PoC, we strategize for full-scale implementation, scaling the AI model, integrating it into existing systems, and optimizing its performance.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">AI PoC Development FAQs</h2>
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
