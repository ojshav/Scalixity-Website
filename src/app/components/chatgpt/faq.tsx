"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How will Generative AI integrate with our existing Enterprise systems and workflows?",
    answer: "Generative AI integrates with existing systems and workflows by leveraging APIs and middleware for seamless data exchange. It complements current processes through machine learning and automation, enhancing efficiency without disrupting established operations."
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
  },
  {
    question: "What are the best tools for ChatGPT Development?",
    answer: "Some of the tools that our ChatGPT developers use are Google Dialogflow, Microsoft BotFramework, Amazon Lex, and Rasa."
  },
  {
    question: "What are the names of the ChatGPT models?",
    answer: "The ChatGPT models include GPT-3, GPT-3.5 Turbo, and GPT-4, each with different capabilities for natural language processing and AI-driven conversations."
  },
  {
    question: "How much does it cost to develop a Chatbot?",
    answer: "The cost of developing a chatbot depends on factors like functionality, integrations, and AI capabilities. Basic chatbots can start from a few thousand dollars, while advanced AI-powered chatbots may require a larger investment. We provide customized estimates based on your specific requirements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      {" "}
      {/* Lavender background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border-2 border-black shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-700" />
                ) : (
                  <ChevronDown className="text-gray-700" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border-2 border-black">
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
