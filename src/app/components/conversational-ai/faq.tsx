"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Conversational AI?",
    answer: "Conversational AI refers to artificial intelligence-driven chatbots and voice assistants that use NLP and machine learning to enable human-like interactions."
  },
  {
    question: "What are the benefits of using Conversational AI?",
    answer: "Conversational AI improves customer support, automates workflows, enhances user engagement, and provides personalized experiences at scale."
  },
  {
    question: "Which platforms can Conversational AI be integrated with?",
    answer: "Conversational AI can be integrated with websites, mobile apps, messaging platforms (WhatsApp, Messenger, Slack), and voice assistants like Alexa and Google Assistant."
  },
  {
    question: "How do you ensure NLP accuracy in AI chatbots?",
    answer: "We use advanced NLP models, continuous training with real-world data, and fine-tuning techniques to improve chatbot understanding and response accuracy."
  },
  {
    question: "Can Conversational AI support multiple languages?",
    answer: "Yes, we build multilingual Conversational AI solutions that support global users, ensuring seamless communication across different languages."
  },
  {
    question: "How secure is Conversational AI?",
    answer: "We implement data encryption, authentication protocols, and compliance with industry regulations (GDPR, HIPAA) to ensure AI-driven conversations are secure and private."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F1EB] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Conversational AI Development FAQ
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get answers to common questions about our Conversational AI development services and capabilities.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg border border-black" 
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
                    <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-black">
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
