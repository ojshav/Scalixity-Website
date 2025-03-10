"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI Copilot development?",
    answer: "AI Copilot development involves creating AI-driven assistants that enhance productivity by automating tasks, providing contextual suggestions, and improving decision-making."
  },
  {
    question: "What industries benefit from AI Copilots?",
    answer: "AI Copilots can be used across various industries, including software development, customer support, finance, healthcare, and content creation."
  },
  {
    question: "What technologies are used in AI Copilot development?",
    answer: "AI Copilots leverage NLP, machine learning, large language models (LLMs), and integration with APIs and automation tools."
  },
  {
    question: "Can AI Copilots integrate with existing software?",
    answer: "Yes, AI Copilots can be seamlessly integrated with existing applications, CRMs, and workflow automation tools to enhance efficiency."
  },
  {
    question: "How do you ensure AI Copilots are accurate and reliable?",
    answer: "We use fine-tuned AI models, continuous learning, and rigorous testing to ensure accuracy, reliability, and security in AI Copilot solutions."
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
            AI Copilot Development FAQ
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about AI Copilot development and how it can boost productivity.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black" 
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
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
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

export default FAQ;
