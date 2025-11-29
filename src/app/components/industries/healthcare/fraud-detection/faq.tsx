"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI-powered fraud detection?",
    answer: "AI-powered fraud detection uses machine learning algorithms to identify suspicious patterns, detect anomalies, and prevent fraudulent activities in real-time."
  },
  {
    question: "How does AI improve security measures?",
    answer: "AI enhances security by continuously monitoring data, predicting threats through pattern recognition, and triggering automated responses to mitigate risks."
  },
  {
    question: "Can AI detect insider threats?",
    answer: "Yes, AI models analyze user behavior and flag unusual activities, helping to detect insider threats and unauthorized access within an organization."
  },
  {
    question: "Is AI fraud detection customizable for different industries?",
    answer: "Absolutely. AI models can be tailored to suit industry-specific risks, whether it's banking, e-commerce, healthcare, or insurance."
  },
  {
    question: "How accurate are AI systems in detecting fraud?",
    answer: "AI systems are highly accurate, thanks to continuous learning from data. They improve over time, reducing false positives and enhancing detection precision."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI in Fraud Detection & Security: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI agents safeguard your business by detecting and preventing fraud in real-time.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black hover:border-black/50 transition-colors"
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
