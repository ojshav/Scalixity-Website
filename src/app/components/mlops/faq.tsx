"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is MLOps and why is it important?",
    answer:
      "MLOps (Machine Learning Operations) is a set of practices that streamline and automate the deployment, monitoring, and management of machine learning models in production. It ensures model reliability, scalability, and collaboration between data science and IT teams.",
  },
  {
    question: "How does MLOps improve model deployment?",
    answer:
      "MLOps automates the CI/CD pipeline for machine learning models, ensuring faster, more reliable deployments. It reduces manual errors, enables rollback strategies, and supports continuous model improvements.",
  },
  {
    question: "Can MLOps be integrated with cloud platforms?",
    answer:
      "Yes, MLOps integrates seamlessly with cloud platforms like AWS, Azure, and Google Cloud, allowing scalable model training, deployment, and monitoring.",
  },
  {
    question: "What are the key components of MLOps?",
    answer:
      "Key components of MLOps include model versioning, CI/CD pipelines, automated testing, monitoring, data validation, and infrastructure management.",
  },
  {
    question: "How does MLOps enhance collaboration?",
    answer:
      "MLOps bridges the gap between data scientists and operations teams by providing a unified workflow, clear documentation, and automated processes to streamline model lifecycle management.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">MLOps Consulting Services FAQs</h2>
        </div>

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
                <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
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
