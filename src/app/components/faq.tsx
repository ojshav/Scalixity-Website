"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What kind of data is needed to train AI models for fraud detection and how secure is it?",
    answer: "The AI models we build require access to historical transaction data and user interaction logs. All data is handled with the highest security standards, ensuring full compliance with industry regulations like GDPR."
  },
  {
    question: "How do AI-driven security solutions help us stay compliant with evolving fintech regulations?",
    answer: "Our AI-driven security solutions are designed to adapt to changing regulations. They continuously monitor regulatory updates and automatically adjust their parameters to ensure ongoing compliance."
  },
  {
    question: "What level of customization is available for AI-driven biometric authentication and fraud detection systems?",
    answer: "Our solutions offer high levels of customization. We tailor the AI models to your specific business needs, integrating with your existing systems and adapting to your unique fraud patterns and customer behaviors."
  },
  {
    question: "How does the AI solution ensure the privacy and security of customer data?",
    answer: "We implement state-of-the-art encryption, access controls, and data anonymization techniques. Our AI solutions are designed with privacy-by-design principles, ensuring GDPR and other relevant data protection regulations compliance."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#1A1B26] rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#1A1B26] mt-1 rounded-lg">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

