"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What Constitutes a Generative AI Integration Framework?",
    answer: "A Generative AI integration framework involves combining advanced machine learning algorithms, natural language processing, and data infrastructure to seamlessly enhance business operations. It includes API interfaces, secure data exchange protocols, and model fine-tuning to ensure AI solutions meet specific enterprise needs."
  },
  {
    question: "What Business Advantages Does Generative AI Integration Offer?",
    answer: "Generative AI offers numerous advantages such as automating repetitive tasks, enhancing decision-making with data-driven insights, creating personalized customer experiences, and optimizing processes. Businesses can improve efficiency, reduce operational costs, and drive innovation with AI-powered solutions."
  },
  {
    question: "What is the Duration of the Generative AI Integration Procedure?",
    answer: "The integration process typically takes 3 to 6 months, depending on the complexity of the business needs. It includes stages like analysis, development, testing, deployment, and training, with regular updates and collaboration to ensure smooth implementation."
  },
  {
    question: "Is Continuous Technical Support Available?",
    answer: "Yes, we offer continuous technical support throughout the integration process and beyond. Our dedicated support team ensures smooth operations, resolves issues promptly, and provides updates to keep the system up-to-date as technologies evolve."
  },
  {
    question: "How Robust are the Security Measures?",
    answer: "We implement top-tier security measures, including encryption, secure APIs, and compliance with industry standards such as GDPR and HIPAA. Our solutions are designed to ensure data privacy and security, providing businesses with peace of mind throughout the integration process."
  },
  {
    question: "What Kind of ROI Can Businesses Expect From Implementing AI Integration Services?",
    answer: "The Return on Investment (ROI) from AI integration can vary significantly depending on the industry, the specific application, and the quality of the implementation. However, when executed correctly, AI can bring substantial benefits such as operational efficiencies, increased customer engagement, and new revenue streams. Typically, businesses see measurable results within the first year, particularly in areas like customer service, automated marketing, and data analytics. While the initial setup may require time for systems to 'learn,' the long-term ROI from AI integration can result in cost savings and enhanced profitability."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] text-black rounded-lg border border-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-black" />
                ) : (
                  <ChevronDown className="text-black" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
                  <p className="text-black">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
