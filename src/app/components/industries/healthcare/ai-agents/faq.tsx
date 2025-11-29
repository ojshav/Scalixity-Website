"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are AI agents in healthcare?",
    answer: "AI agents are intelligent systems that use machine learning and natural language processing to automate tasks like patient inquiries, diagnostics support, and real-time health monitoring."
  },
  {
    question: "How do AI agents enhance patient engagement?",
    answer: "AI agents provide 24/7 virtual support, answer patient queries, schedule appointments, and offer personalized health advice — ensuring seamless communication between patients and healthcare providers."
  },
  {
    question: "Can AI agents integrate with existing hospital systems?",
    answer: "Yes, AI agents are designed to integrate smoothly with Electronic Health Records (EHR), telemedicine platforms, and other hospital management systems to optimize workflows."
  },
  {
    question: "Are AI agents secure for handling sensitive patient data?",
    answer: "Absolutely. AI agents use advanced encryption, access controls, and comply with regulations like HIPAA to safeguard all patient information."
  },
  {
    question: "How quickly can AI agents be deployed in a healthcare setting?",
    answer: "The deployment timeline depends on the complexity of integration, but most AI agent solutions can be implemented within 2-6 months for focused applications."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Agents in Healthcare: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to common questions about AI agents and their impact on healthcare.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border-2 border-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border-2 border-black">
                      <p className="text-black">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
