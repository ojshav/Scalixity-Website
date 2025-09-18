"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much does AI agent development cost?",
    answer:
      "The cost of developing AI agents varies based on factors like complexity, data size, and integration needs. A proof-of-concept (POC) AI agent typically costs between $10,000 and $30,000. We conduct a detailed consultation to provide a precise estimate tailored to your requirements.",
  },
  {
    question: "How long does it take to develop and deploy an AI agent?",
    answer:
      "Development timelines depend on the complexity of the AI agent. A basic solution may take 2-3 months, while advanced enterprise-grade AI agents with deep integration can take 4-6 months. We follow an agile approach to ensure efficient development and deployment.",
  },
  {
    question: "What kind of support do you provide after deploying AI agents?",
    answer:
      "We offer ongoing support, including real-time monitoring, performance optimization, security updates, and AI model retraining. Our team ensures your AI agents continuously improve and adapt to new business needs.",
  },
  {
    question: "Can AI agents integrate with our existing systems?",
    answer:
      "Yes! Our AI agents are designed for seamless integration with existing software, CRMs, cloud services, and APIs. We ensure a smooth transition without disrupting your current workflow.",
  },
  {
    question: "How do you ensure the security and privacy of our data?",
    answer:
      "We implement enterprise-grade security measures, including end-to-end encryption, access controls, and compliance with GDPR and industry standards. On-premises deployment is also available for sensitive data.",
  },
  {
    question: "How do I get started with AI agent development for my business?",
    answer:
      "Getting started is easy! Schedule a consultation with our experts to discuss your goals, challenges, and AI use cases. We will provide a strategic roadmap tailored to your business needs.",
  },
  {
    question: "Why do businesses need AI agents beyond chatbots?",
    answer:
      "AI agents go beyond simple chatbots by automating decision-making, handling complex workflows, and providing real-time insights. They can optimize processes in customer support, sales, finance, healthcare, and many other industries.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-black uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            About AI Agent Development
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            Find answers to common questions about AI agent development, costs, timelines, security, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-2 border-black rounded-lg"
              style={{ backgroundColor: "#F3F1EB" }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-t-lg"
                style={{ backgroundColor: "#F3F1EB" }}
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
                <div className="p-4 mt-1 rounded-b-lg" style={{ backgroundColor: "#F3F1EB" }}>
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
