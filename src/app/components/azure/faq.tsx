"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are the benefits of using Azure for cloud computing?",
    answer:
      "Azure provides a secure, scalable, and flexible cloud platform with a wide range of services, including AI, machine learning, IoT, and hybrid cloud solutions. It integrates seamlessly with Microsoft tools and services."
  },
  {
    question: "How does Azure ensure the security of my data?",
    answer:
      "Azure follows a multi-layered security approach, including advanced threat protection, encryption, identity management, and compliance with industry standards such as ISO, GDPR, and HIPAA."
  },
  {
    question: "Can Azure help with cloud migration?",
    answer:
      "Yes, Azure offers migration tools like Azure Migrate, Database Migration Service, and Site Recovery to streamline and accelerate the cloud adoption process."
  },
  {
    question: "What Azure services are available for AI & ML?",
    answer:
      "Azure provides AI/ML services like Azure Machine Learning, Cognitive Services, and Bot Services to help businesses build and deploy intelligent applications."
  },
  {
    question: "How does Azure pricing work?",
    answer:
      "Azure follows a pay-as-you-go model with cost-saving options like reserved instances, hybrid benefits, and cost management tools to optimize spending based on workload needs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-600 uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Azure Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our Azure cloud services and solutions.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-gray-600"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
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
                    <div className="p-4 bg-[#A8B2E7] mt-1 rounded-lg border border-gray-600">
                      <p className="text-gray-800">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
