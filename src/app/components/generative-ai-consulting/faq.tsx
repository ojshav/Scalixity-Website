"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the key benefits of implementing Generative AI in my business?",
    answer: "Generative AI can significantly enhance various aspects of your business, including improved efficiency, increased productivity, enhanced creativity, personalized customer experiences, and data-driven decision making. It can automate complex tasks, generate high-quality content, and provide valuable insights from large datasets."
  },
  {
    question: "How long does it typically take to implement a Generative AI solution?",
    answer: "The implementation timeline can vary depending on the complexity of the solution and your specific business needs. Typically, a basic implementation can take 2-3 months, while more complex, enterprise-wide solutions may take 6-12 months. We work closely with you to establish a realistic timeline and ensure a smooth implementation process."
  },
  {
    question: "How do you ensure the security and privacy of our data when developing Generative AI solutions?",
    answer: "We take data security and privacy very seriously. Our approach includes implementing robust encryption methods, secure data handling practices, and adherence to industry standards and regulations such as GDPR, HIPAA, and CCPA. We also offer on-premises deployment options for clients with strict data security requirements."
  },
  {
    question: "Can Generative AI solutions be integrated with our existing systems and workflows?",
    answer: "Yes, our Generative AI solutions are designed to integrate seamlessly with your existing systems and workflows. We use APIs, microservices, and other integration methods to ensure our solutions work harmoniously with your current infrastructure, minimizing disruption to your operations while maximizing the benefits of AI technology."
  },
  {
    question: "What kind of ongoing support and maintenance do you provide after implementation?",
    answer: "We offer comprehensive post-implementation support, including system monitoring, performance optimization, regular updates, and technical support. We also provide training for your team and ongoing consultation to ensure you continue to maximize the value of your Generative AI implementation as your business evolves."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-600 uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our Generative AI consulting services
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#A8B2E7] border-2 border-black rounded-lg hover:bg-[#979fce] transition-colors"
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
                    <div className="p-4 bg-[#A8B2E7] border-2 border-black mt-1 rounded-lg">
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

