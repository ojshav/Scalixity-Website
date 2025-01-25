"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the key benefits of implementing LLMs in my business?",
    answer: "LLMs can significantly improve operational efficiency, enhance customer interactions, automate complex tasks, generate high-quality content, and provide valuable insights from unstructured data. They can help reduce costs, improve decision-making, and create new opportunities for innovation."
  },
  {
    question: "How long does it take to develop and deploy a custom LLM?",
    answer: "The timeline varies depending on your specific requirements and the complexity of the implementation. Typically, a basic LLM deployment can take 2-3 months, while more complex, custom solutions might take 4-6 months. We work closely with you to establish realistic timelines based on your needs."
  },
  {
    question: "How do you ensure the security and privacy of our data?",
    answer: "We implement multiple layers of security measures, including data encryption, secure access controls, and privacy-preserving training techniques. We also ensure compliance with relevant data protection regulations and can implement on-premises solutions for sensitive data."
  },
  {
    question: "What kind of maintenance and support do you provide?",
    answer: "We offer comprehensive post-deployment support, including monitoring, performance optimization, regular updates, and technical support. We also provide training for your team and ongoing consultation to ensure you get the maximum value from your LLM implementation."
  },
  {
    question: "Can LLMs be integrated with our existing systems?",
    answer: "Yes, our LLM solutions are designed to integrate seamlessly with your existing infrastructure. We provide APIs and custom integration solutions to ensure smooth interoperability with your current systems and workflows."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#0F1629] rounded-lg"
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
                <div className="p-4 bg-[#0F1629] mt-1 rounded-lg">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

