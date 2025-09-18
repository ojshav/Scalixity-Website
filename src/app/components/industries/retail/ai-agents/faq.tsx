"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are AI agents in retail?",
    answer: "AI agents are intelligent systems that use machine learning and natural language processing to personalize customer experiences, optimize inventory, and automate support services in the retail industry."
  },
  {
    question: "How do AI agents enhance customer engagement?",
    answer: "AI agents offer personalized product recommendations, answer customer queries instantly, and provide round-the-clock virtual assistance — boosting customer satisfaction and loyalty."
  },
  {
    question: "Can AI agents help with inventory management?",
    answer: "Yes! AI agents analyze sales data, forecast demand, and detect stock shortages or surpluses — ensuring efficient inventory management."
  },
  {
    question: "Are AI agents secure for handling customer data?",
    answer: "Absolutely. AI agents use advanced encryption methods and comply with data protection regulations like GDPR to keep customer information safe and secure."
  },
  {
    question: "How quickly can AI agents be integrated into retail systems?",
    answer: "Integration timelines vary, but AI agents can typically be deployed within 2-4 months, depending on the complexity of your retail infrastructure."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Agents in Retail: FAQs
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Find out how AI agents are transforming the retail industry — from customer interactions to sales predictions.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border-2 border-[#6B5B95] shadow-md hover:border-[#4A3F6D] transition-colors"
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border-2 border-[#6B5B95] shadow-md">
                      <p className="text-black/80">{faq.answer}</p>
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
