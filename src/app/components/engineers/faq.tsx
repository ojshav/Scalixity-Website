"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What does an AI Engineer do?",
    answer: "AI Engineers design, develop, and deploy machine learning models and AI-powered systems to solve complex business problems. They work with deep learning, natural language processing, and computer vision technologies."
  },
  {
    question: "What programming languages do AI Engineers use?",
    answer: "AI Engineers primarily use Python, R, C++, and JavaScript. Python is the most popular due to its extensive libraries for machine learning and deep learning."
  },
  {
    question: "Which industries benefit from AI Engineering?",
    answer: "AI Engineering is used in healthcare, finance, e-commerce, autonomous vehicles, cybersecurity, and many more sectors to improve efficiency, automate tasks, and enhance decision-making."
  },
  {
    question: "What are the key skills required for AI Engineers?",
    answer: "AI Engineers should have expertise in machine learning, deep learning, data science, cloud computing, and software engineering. Strong mathematical and statistical knowledge is also essential."
  },
  {
    question: "What tools and frameworks do AI Engineers use?",
    answer: "AI Engineers work with TensorFlow, PyTorch, Scikit-Learn, OpenCV, Hugging Face, and cloud platforms like AWS, Google Cloud, and Azure AI."
  },
  {
    question: "How do AI Engineers ensure model performance and security?",
    answer: "They optimize models through techniques like pruning and quantization, conduct rigorous testing, and implement security measures to prevent adversarial attacks and data breaches."
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
            AI Engineers: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about AI Engineering, tools, and industry applications.
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
