"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI-powered customer segmentation?",
    answer: "AI-powered customer segmentation uses machine learning algorithms to categorize customers into distinct groups based on their behavior, preferences, and demographics."
  },
  {
    question: "How does AI improve customer segmentation?",
    answer: "AI processes vast amounts of data quickly, identifying hidden patterns and trends that traditional methods may miss — resulting in more accurate and dynamic segmentation."
  },
  {
    question: "Why is customer segmentation important in retail?",
    answer: "It helps businesses deliver personalized marketing, optimize product offerings, and boost customer retention by addressing the unique needs of each segment."
  },
  {
    question: "Can AI help predict customer behavior?",
    answer: "Yes! AI models analyze historical data to forecast customer actions, enabling proactive strategies for engagement and sales."
  },
  {
    question: "How long does it take to implement AI-driven segmentation?",
    answer: "The timeline varies, but AI segmentation systems can often be integrated within 2-3 months, depending on data complexity and business requirements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI-Powered Customer Segmentation: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to common questions about AI-driven customer segmentation and its impact on the retail industry.
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
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg border border-black"
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
                    <div className="p-4 bg-white mt-1 rounded-lg border border-black">
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
