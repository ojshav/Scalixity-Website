"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Credit Risk Management?",
    answer: "Credit Risk Management is the process of assessing, monitoring, and mitigating the risk of financial losses due to borrower defaults or credit deterioration."
  },
  {
    question: "What technologies are used in Credit Risk Analysis?",
    answer: "We use machine learning models, big data analytics, and AI-driven frameworks like TensorFlow, Scikit-Learn, and cloud platforms such as AWS, Azure, and Google Cloud."
  },
  {
    question: "How does AI improve Credit Risk Management?",
    answer: "AI automates risk assessment, detects fraud patterns, and predicts potential defaults with high accuracy using real-time data analytics."
  },
  {
    question: "Can your solution integrate with existing banking systems?",
    answer: "Yes, our credit risk management platform seamlessly integrates with banking CRMs, financial databases, and regulatory reporting tools via APIs."
  },
  {
    question: "Which industries benefit from Credit Risk Management solutions?",
    answer: "Banks, fintech companies, insurance firms, and lending institutions leverage credit risk management to ensure financial stability and reduce losses."
  },
  {
    question: "How do you ensure regulatory compliance?",
    answer: "We align our credit risk models with regulations like Basel III, IFRS 9, and GDPR, ensuring secure and transparent risk assessment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Credit Risk Management: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about our AI-driven credit risk management solutions.
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
