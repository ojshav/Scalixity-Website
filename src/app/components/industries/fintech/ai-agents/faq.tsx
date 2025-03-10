"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do AI agents prevent fraud in fintech?",
    answer: "AI agents detect fraudulent activities by analyzing transaction patterns in real-time, flagging suspicious behavior instantly."
  },
  {
    question: "Can AI agents enhance customer service?",
    answer: "Yes, AI chatbots provide personalized support, answering queries and offering tailored financial solutions round the clock."
  },
  {
    question: "How do AI agents optimize financial portfolios?",
    answer: "AI algorithms assess risk factors and suggest optimal investment strategies to maximize returns."
  },
  {
    question: "Are AI agents used for credit scoring?",
    answer: "Absolutely. AI models analyze alternative data sources to create more accurate and inclusive credit scores."
  },
  {
    question: "What insights can AI agents provide to fintech companies?",
    answer: "AI extracts actionable insights from vast datasets, helping fintech firms make data-driven decisions for growth and efficiency."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Agents in Fintech: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Learn how AI agents revolutionize fintech by enhancing fraud detection, customer service, and financial strategies.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg text-black border border-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
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
                    <div className="p-4 bg-[#F3F1EB] text-black rounded-lg mt-1 border border-black">
                      <p>{faq.answer}</p>
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

export default FAQ;
