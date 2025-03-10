"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are AI Analytics in SaaS?",
    answer: "AI Analytics in SaaS use machine learning and data science techniques to extract insights, optimize operations, and drive data-informed decision-making."
  },
  {
    question: "How does AI enhance data visualization?",
    answer: "AI processes large data sets in real-time, generating dynamic dashboards and predictive graphs for better business insights."
  },
  {
    question: "Can AI analytics predict business trends?",
    answer: "Yes. AI models identify patterns, forecast customer behavior, and highlight emerging trends to support strategic planning."
  },
  {
    question: "Are AI analytics secure for SaaS platforms?",
    answer: "Absolutely. AI detects anomalies, prevents data breaches, and ensures compliance with industry security standards."
  },
  {
    question: "What industries benefit from AI analytics in SaaS?",
    answer: "Industries like finance, healthcare, e-commerce, and marketing leverage AI analytics to uncover insights and improve efficiency."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Analytics in SaaS: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI analytics empowers SaaS platforms with data-driven insights, predictive modeling, and automated reporting.
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
