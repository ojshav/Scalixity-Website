"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI Integration for SaaS?",
    answer: "AI Integration for SaaS enables platforms to leverage artificial intelligence for automation, data analysis, and enhanced decision-making."
  },
  {
    question: "How does AI improve SaaS efficiency?",
    answer: "AI optimizes SaaS platforms by automating workflows, personalizing user experiences, and providing predictive analytics."
  },
  {
    question: "Can AI be integrated into existing SaaS solutions?",
    answer: "Yes, AI can seamlessly integrate with existing SaaS platforms using APIs, enhancing functionality without major disruptions."
  },
  {
    question: "Is AI customization available for SaaS platforms?",
    answer: "Absolutely. AI models can be tailored to specific business needs, ensuring optimized performance and relevance."
  },
  {
    question: "What industries benefit from AI-driven SaaS?",
    answer: "Industries such as finance, healthcare, customer service, and e-commerce use AI to enhance efficiency, security, and user engagement."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Integration for SaaS: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about AI integration in SaaS platforms and its benefits.
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
