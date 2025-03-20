"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are the benefits of enterprise application development with your team?",
    answer:
      "We provide end-to-end enterprise application development, ensuring scalable, secure, and high-performing solutions tailored to business needs.",
  },
  {
    question: "What industries do you specialize in for enterprise applications?",
    answer:
      "We serve industries such as healthcare, finance, retail, manufacturing, education, logistics, and technology with custom enterprise solutions.",
  },
  {
    question: "How do you ensure the success of an enterprise application?",
    answer:
      "We follow a structured approach that includes business analysis, UX/UI design, agile development, testing, and continuous improvements based on user feedback.",
  },
  {
    question: "Do you provide integration with existing enterprise systems?",
    answer:
      "Yes, we specialize in integrating enterprise applications with existing ERP, CRM, cloud platforms, and third-party APIs to enhance operational efficiency.",
  },
  {
    question: "How do you handle security and compliance for enterprise applications?",
    answer:
      "We implement security best practices, including encryption, role-based access control, compliance with industry standards like GDPR, HIPAA, and SOC 2.",
  },
];

export function EnterpriseAppDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Enterprise Application Development FAQ
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Find answers to common questions about our enterprise application development services and processes.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black hover:border-black/80 transition-colors"
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
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
                      <p className="text-black/80">{faq.answer}</p>
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

export default EnterpriseAppDevelopmentFAQ;
