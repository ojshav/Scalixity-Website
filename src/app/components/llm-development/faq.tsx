"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are the key benefits of using LLMs for my business?",
    answer:
      "LLMs can significantly enhance various aspects of your business, including improved customer service through chatbots, automated content generation, advanced data analysis, and personalized user experiences. They can also streamline operations, reduce costs, and provide valuable insights from large volumes of text data.",
  },
  {
    question: "How long does it typically take to develop and deploy a custom LLM solution?",
    answer:
      "The timeline for developing and deploying a custom LLM solution can vary depending on the complexity of your requirements and the scale of the project. Generally, it can take anywhere from a few weeks to several months. We work closely with you to establish a realistic timeline based on your specific needs and priorities.",
  },
  {
    question:
      "How do you ensure the security and privacy of our data when developing LLM solutions?",
    answer:
      "We take data security and privacy very seriously. We implement robust encryption methods, secure data handling practices, and adhere to industry standards and regulations such as GDPR. We also offer on-premises deployment options for clients with strict data security requirements.",
  },
  {
    question: "Can LLMs be integrated with our existing systems and workflows?",
    answer:
      "Yes, LLMs can be seamlessly integrated with your existing systems and workflows. We design our solutions to work harmoniously with your current infrastructure, whether through APIs, microservices, or other integration methods. This ensures minimal disruption to your operations while maximizing the benefits of LLM technology.",
  },
  {
    question: "How do you measure the success and ROI of an LLM implementation?",
    answer:
      "We work with you to define key performance indicators (KPIs) that align with your business objectives. These may include metrics such as improved customer satisfaction scores, increased efficiency in content generation, reduced response times, or cost savings in specific operations. We provide regular reports and analytics to track these KPIs and demonstrate the ROI of your LLM implementation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
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
                <div className="p-4 bg-[#F3F1EB] border border-black mt-1 rounded-lg">
                  <p className="text-black">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
