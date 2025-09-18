"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does AI enhance personalized shopping experiences?",
    answer: "AI analyzes customer data, browsing history, and purchasing behavior to deliver personalized product recommendations, improving user engagement and boosting sales."
  },
  {
    question: "Can AI improve demand forecasting for retail businesses?",
    answer: "Yes, AI models predict demand trends by analyzing historical data, seasonal patterns, and market shifts, allowing retailers to optimize inventory levels and prevent stockouts or overstocking."
  },
  {
    question: "Is AI suitable for both online and offline retail?",
    answer: "Absolutely! AI can power e-commerce recommendation engines, optimize supply chains, and even enhance in-store experiences with smart checkout systems and dynamic pricing strategies."
  },
  {
    question: "How does AI help with customer service in retail?",
    answer: "AI chatbots and virtual assistants provide instant customer support, handle FAQs, process orders, and offer personalized shopping assistance, ensuring seamless customer interactions."
  },
  {
    question: "What post-implementation support do you offer for AI solutions?",
    answer: "We provide continuous support, including model monitoring, retraining, performance optimization, and team training to ensure your AI solutions stay efficient and adaptive."
  }
]

export function FAQ() {  
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-medium text-black mt-4 mb-6">
            AI Solutions for Retail — FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Find answers to common questions about AI’s impact on the retail industry.
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
              className="mb-4 border border-black rounded-lg"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg text-black border-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-black">{faq.question}</span>
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
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg text-black border border-black">
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
