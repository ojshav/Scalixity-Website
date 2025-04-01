"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI SaaS Personalization?",
    answer: "AI SaaS Personalization uses machine learning algorithms to tailor user experiences in real-time by analyzing behavior, preferences, and interactions."
  },
  {
    question: "How can AI improve my SaaS platform?",
    answer: "AI boosts engagement by delivering personalized content, automates A/B testing, and predicts user actions, helping you make data-driven decisions."
  },
  {
    question: "Is AI personalization secure?",
    answer: "Yes! AI solutions use encryption, data anonymization, and strict access controls to safeguard user data and maintain privacy compliance."
  },
  {
    question: "Can AI handle large user bases?",
    answer: "Absolutely. AI personalization scales seamlessly, ensuring consistent user experiences whether you have hundreds or millions of users."
  },
  {
    question: "How quickly can AI personalization be implemented?",
    answer: "Implementation timelines vary but typically range from 4 to 8 weeks, depending on platform complexity and customization needs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] text-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            AI SaaS Personalization: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore answers to common questions about AI-driven SaaS personalization and how it transforms user experiences.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
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
