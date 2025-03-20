"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How will Generative AI integrate with our existing Enterprise systems and workflows?",
    answer: "Generative AI integrates with existing systems and workflows by leveraging APIs and middleware for seamless data exchange. It complements current processes through machine learning and automation, enhancing efficiency without disrupting established operations. This allows Generative AI to provide insights and augment decision-making while fitting into the existing technological ecosystem."
  },
  {
    question: "What approach do you use for model validation, testing, and performance evaluation?",
    answer: "We adopt a comprehensive approach for model validation, including cross-validation, A/B testing, and performance metrics tailored to your specific goals. We test the models in real-world scenarios, ensuring they meet performance expectations before deployment."
  },
  {
    question: "What regulatory and compliance considerations do you address for Enterprise Generative AI projects?",
    answer: "We ensure compliance with industry-specific regulations such as GDPR, HIPAA, and other relevant standards. Our team follows best practices in data security, privacy, and transparency to ensure that your project adheres to all regulatory requirements."
  },
  {
    question: "Can you provide an estimate of the total costs involved in implementing and maintaining the Enterprise Generative AI solution?",
    answer: "The cost depends on factors like scope, complexity, and customizations required for your project. We work closely with you to define the project's requirements and provide a detailed estimate that includes development, deployment, and ongoing maintenance costs."
  },
  {
    question: "What is the expected Return on Investment (ROI) of implementing AI in Enterprise systems?",
    answer: "The ROI of implementing AI varies depending on the specific use cases, but businesses typically see significant improvements in efficiency, productivity, and decision-making. We provide detailed analytics to help measure the ROI and track the benefits over time."
  },
  {
    question: "What is the expected timeline for Enterprise Generative AI development and deployment?",
    answer: "The timeline for development and deployment depends on the project's scope and complexity. Typically, it ranges from 3 to 6 months, with milestones for testing, validation, and final deployment. We ensure transparency and work closely with you to establish a realistic timeline."
  },
  {
    question: "Are there scalability options to accommodate future business growth or changing requirements?",
    answer: "Yes, our Generative AI solutions are designed to scale as your business grows. We ensure that your solution is flexible and can accommodate future expansions or changes in requirements with minimal effort."
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border-2 border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-black" />
                ) : (
                  <ChevronDown className="text-black" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] border-2 border-black mt-1 rounded-lg">
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
