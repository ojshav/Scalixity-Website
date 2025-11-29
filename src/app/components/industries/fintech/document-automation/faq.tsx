"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Financial Document Automation?",
    answer: "Financial Document Automation uses AI and machine learning to automatically process, extract, and validate data from financial documents like invoices, contracts, and statements."
  },
  {
    question: "How does AI help in automating financial documents?",
    answer: "AI leverages natural language processing (NLP) and computer vision to recognize patterns, extract key information, and reduce manual data entry errors in financial workflows."
  },
  {
    question: "Which types of financial documents can be automated?",
    answer: "We automate various financial documents, including invoices, purchase orders, balance sheets, tax forms, and loan applications."
  },
  {
    question: "Can your solution integrate with existing financial systems?",
    answer: "Yes, our Financial Document Automation platform integrates with ERP systems, accounting software, and cloud storage platforms through secure APIs."
  },
  {
    question: "What industries benefit from Financial Document Automation?",
    answer: "Industries like banking, insurance, fintech, and accounting firms use financial document automation to enhance efficiency and accuracy."
  },
  {
    question: "How secure is the document processing?",
    answer: "We ensure top-level security with end-to-end encryption, access controls, and compliance with regulations like GDPR and SOC 2."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Financial Document Automation: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover answers to common questions about our AI-powered financial document automation services.
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
