"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is an AI Copilot for SaaS?",
    answer: "An AI Copilot for SaaS is an intelligent assistant that helps users navigate, automate tasks, and make data-driven decisions within a SaaS platform."
  },
  {
    question: "How does AI Copilot enhance user productivity?",
    answer: "AI Copilots streamline workflows by automating repetitive tasks, suggesting optimized actions, and providing real-time insights."
  },
  {
    question: "Can AI Copilots integrate with existing SaaS platforms?",
    answer: "Yes. AI Copilots seamlessly integrate with SaaS platforms using APIs, ensuring smooth data flow and minimal disruption."
  },
  {
    question: "Are AI Copilots customizable?",
    answer: "Absolutely. AI Copilots can be tailored to match business needs, learning from specific data and adjusting their behavior accordingly."
  },
  {
    question: "What industries benefit from AI Copilot services?",
    answer: "Industries like finance, healthcare, customer service, and e-commerce leverage AI Copilots to boost efficiency and enhance user experiences."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Copilot Services: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to your questions about AI Copilot services and how they transform SaaS platforms.
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
