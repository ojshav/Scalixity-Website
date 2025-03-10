"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is an enterprise chatbot AI?",
    answer: "An enterprise chatbot AI is an advanced AI-powered assistant designed to automate customer support, enhance user engagement, and streamline business operations with conversational AI."
  },
  {
    question: "What technologies are used in chatbot AI development?",
    answer: "We use NLP frameworks like spaCy and NLTK, machine learning models from TensorFlow and PyTorch, and cloud platforms such as OpenAI GPT, Dialogflow, and AWS Lex."
  },
  {
    question: "How secure are enterprise chatbots?",
    answer: "Our chatbots implement end-to-end encryption, user authentication, and compliance with data privacy regulations like GDPR and HIPAA to ensure security."
  },
  {
    question: "Can enterprise chatbots integrate with existing systems?",
    answer: "Yes, our chatbots can integrate with CRMs, ERPs, messaging apps, and third-party APIs to ensure seamless automation and data exchange."
  },
  {
    question: "What industries benefit from AI-powered chatbots?",
    answer: "Industries such as healthcare, finance, e-commerce, customer support, and HR leverage AI chatbots to automate interactions and improve user experience."
  },
  {
    question: "How do AI chatbots improve customer experience?",
    answer: "AI chatbots provide instant, 24/7 responses, personalize interactions using machine learning, and handle multiple queries simultaneously, enhancing efficiency."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Enterprise Chatbot AI: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about our chatbot AI development services and capabilities.
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
  )
}

export default FAQ;
