"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const chatbotFaqs = [
  {
    question: "What is an AI Chatbot for SaaS?",
    answer: "AI chatbots for SaaS are intelligent virtual assistants that handle customer inquiries, automate tasks, and provide real-time support."
  },
  {
    question: "How do AI chatbots enhance user experience?",
    answer: "They offer instant responses, personalized interactions, and 24/7 support, ensuring seamless customer experiences."
  },
  {
    question: "Can AI chatbots integrate with SaaS platforms?",
    answer: "Yes. AI chatbots easily integrate with SaaS platforms, streamlining workflows and boosting productivity."
  },
  {
    question: "Are AI chatbots secure for business use?",
    answer: "Absolutely. AI chatbots use encrypted data processing, ensuring business information remains secure."
  },
  {
    question: "What industries benefit from AI chatbots in SaaS?",
    answer: "Industries like e-commerce, healthcare, finance, and customer service benefit from AI-powered SaaS chatbots."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Chatbots in SaaS: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI chatbots revolutionize SaaS platforms by enhancing customer support and automating tasks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {chatbotFaqs.map((faq, index) => (
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