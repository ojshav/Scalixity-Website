"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is ChatGPT integration service?",
    answer:
      "ChatGPT integration service enables businesses to integrate ChatGPT into their applications, websites, and software platforms. This allows them to create conversational interfaces, chatbots, and virtual assistants that understand and respond to natural language inputs.",
  },
  {
    question: "How does ChatGPT integration work?",
    answer: "ChatGPT integration works by leveraging APIs or SDKs provided by OpenAI or other providers. We help businesses connect ChatGPT with their systems, ensuring seamless interaction and optimal performance.",
  },
  {
    question: "What types of businesses can benefit from ChatGPT integration service?",
    answer: "Any business that requires automated customer interactions, personalized recommendations, or AI-driven assistance can benefit from ChatGPT integration. This includes e-commerce, healthcare, finance, and customer support industries.",
  },
  {
    question: "How long does it take to integrate ChatGPT into my application?",
    answer: "The integration timeline depends on the complexity of the project. A basic integration can take a few days, while more advanced customizations may take several weeks.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-black uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            ChatGPT Integration Services
          </h2>
        </div>

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
