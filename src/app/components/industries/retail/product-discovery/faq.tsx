"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI-powered product discovery?",
    answer: "AI-powered product discovery uses machine learning algorithms to help customers find relevant products quickly by analyzing their behavior, preferences, and search patterns."
  },
  {
    question: "How does AI improve product recommendations?",
    answer: "AI analyzes customer data — including past purchases, browsing history, and real-time interactions — to deliver highly personalized product suggestions."
  },
  {
    question: "Can AI product discovery boost sales?",
    answer: "Yes! By guiding customers to products they genuinely want, AI reduces bounce rates and increases conversions, driving overall sales growth."
  },
  {
    question: "Does AI product discovery work across all platforms?",
    answer: "Absolutely. AI solutions integrate seamlessly across websites, mobile apps, and in-store kiosks, ensuring a consistent and intuitive shopping experience."
  },
  {
    question: "Is AI product discovery suitable for small retailers?",
    answer: "Yes! AI scales to fit businesses of all sizes, helping small retailers enhance customer experiences and compete effectively in the digital marketplace."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Product Discovery in Retail: FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the power of AI-driven product discovery — helping customers find what they need while boosting engagement and sales.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg">
                      <p className="text-muted-foreground">{faq.answer}</p>
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
