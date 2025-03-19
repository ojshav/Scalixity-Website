"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the key benefits of developing an NFT marketplace?",
    answer: "Developing an NFT marketplace allows creators to tokenize digital assets, ensuring verifiable ownership, seamless transactions, and potential revenue through royalties."
  },
  {
    question: "How does NFT minting work?",
    answer: "NFT minting involves creating a unique digital asset on the blockchain, embedding metadata, and deploying it through a smart contract to ensure secure and transparent ownership."
  },
  {
    question: "Can you integrate multi-chain support into NFT marketplaces?",
    answer: "Yes, we provide multi-chain support, allowing NFT marketplaces to operate across multiple blockchains, enhancing liquidity and user access."
  },
  {
    question: "What security measures do you implement for NFT platforms?",
    answer: "We implement robust security protocols, including smart contract audits, encryption, and anti-fraud mechanisms to protect assets and transactions."
  },
  {
    question: "How do you handle royalty distribution in NFT marketplaces?",
    answer: "We develop automated royalty distribution systems using smart contracts, ensuring creators receive their earnings in real-time after each secondary sale."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            NFT Marketplace Development FAQ
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore answers to common questions about our NFT marketplace development services.
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
