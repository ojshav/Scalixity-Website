"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What types of AI solutions do you develop?",
    answer: "We develop a wide range of AI solutions, including machine learning models, natural language processing systems, computer vision applications, predictive analytics tools, and AI-powered automation systems. Our solutions are tailored to meet the specific needs of various industries and business challenges."
  },
  {
    question: "How long does it typically take to develop an AI solution?",
    answer: "The development timeline for an AI solution can vary depending on the complexity of the project and the specific requirements. Simple projects might take a few weeks, while more complex enterprise-level solutions could take several months. We work closely with our clients to establish realistic timelines and milestones throughout the development process."
  },
  {
    question: "Do you provide support and maintenance after the AI solution is deployed?",
    answer: "Yes, we offer comprehensive support and maintenance services for all our AI solutions. This includes monitoring system performance, making necessary updates and optimizations, and providing technical support to ensure the continued success and efficiency of your AI implementation."
  },
  {
    question: "How do you ensure the security and privacy of data used in AI development?",
    answer: "Data security and privacy are top priorities in our AI development process. We implement robust security measures, including data encryption, secure access controls, and compliance with relevant data protection regulations. We also offer on-premises deployment options for clients with strict data security requirements."
  },
  {
    question: "Can your AI solutions integrate with our existing systems and software?",
    answer: "Absolutely. Our AI solutions are designed to integrate seamlessly with existing systems and software. We have experience working with various platforms and can develop custom integrations to ensure our AI solutions work harmoniously within your current technology ecosystem."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Find answers to common questions about our AI development services.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] rounded-lg border border-gray-600 hover:border-black transition-colors shadow-md"
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
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-gray-600 shadow-inner">
                      <p className="text-gray-900">{faq.answer}</p>
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


