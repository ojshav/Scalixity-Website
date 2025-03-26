"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are smart contracts?",
    answer: "Smart contracts are self-executing contracts with terms directly written into code, automating and securing transactions without intermediaries."
  },
  {
    question: "What industries can benefit from smart contracts?",
    answer: "Industries like finance, real estate, supply chain, insurance, and healthcare can leverage smart contracts for automation, transparency, and security."
  },
  {
    question: "How do smart contracts enhance security?",
    answer: "Smart contracts use blockchain's immutable and decentralized nature, ensuring data integrity and reducing risks of fraud or tampering."
  },
  {
    question: "Can you develop custom smart contracts for my business?",
    answer: "Yes, we design and develop tailored smart contracts that align with your specific business needs and ensure seamless integration."
  },
  {
    question: "What blockchain platforms do you use for smart contract development?",
    answer: "We work with platforms like Ethereum, Binance Smart Chain, Polygon, and more, choosing the best fit for your project."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-gray-700 mt-4 mb-6">
            Smart Contract Development FAQ
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Find answers to common questions about our smart contract development services and how they can transform your business.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg"
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
                    <div className="p-4 bg-[#F3F1EB] border border-black mt-1 rounded-lg">
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
