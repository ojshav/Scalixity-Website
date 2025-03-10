"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is IoT development, and how can it benefit my business?",
    answer:
      "IoT development involves creating smart, connected devices and systems that collect, process, and transmit data to improve business efficiency, automation, and real-time decision-making.",
  },
  {
    question: "Which industries can benefit from IoT solutions?",
    answer:
      "IoT solutions are widely used in industries such as healthcare, manufacturing, agriculture, smart homes, logistics, and retail to enhance productivity, security, and automation.",
  },
  {
    question: "What technologies do you use for IoT development?",
    answer:
      "We use a combination of hardware (sensors, microcontrollers), cloud platforms, edge computing, AI, and secure communication protocols such as MQTT, HTTP, and Bluetooth.",
  },
  {
    question: "How secure are IoT solutions?",
    answer:
      "We implement end-to-end encryption, device authentication, and secure cloud integration to ensure data privacy and prevent unauthorized access.",
  },
  {
    question: "Can IoT systems be integrated with existing business software?",
    answer:
      "Yes, we design IoT solutions that seamlessly integrate with your existing ERP, CRM, cloud platforms, and third-party applications for smooth operations.",
  },
  {
    question: "How long does it take to develop and deploy an IoT solution?",
    answer:
      "The timeline depends on complexity, hardware integration, and required features. A simple solution may take weeks, while complex deployments may take months.",
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
