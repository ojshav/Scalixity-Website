"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is AI-powered Documentation Intelligence?",
    answer:
      "AI-powered Documentation Intelligence automates data extraction, summarization, and classification from medical records, ensuring accuracy and efficiency in healthcare documentation.",
  },
  {
    question: "How does AI streamline clinical documentation?",
    answer:
      "AI systems transcribe doctor-patient interactions, auto-fill EHRs, and highlight key medical insights — reducing manual workload and minimizing errors.",
  },
  {
    question: "Can AI integrate with existing hospital systems?",
    answer:
      "Yes, AI documentation solutions seamlessly connect with EHR platforms and hospital databases, ensuring smooth workflow integration.",
  },
  {
    question: "Is patient data secure with AI documentation tools?",
    answer:
      "Absolutely. These tools comply with healthcare regulations like HIPAA, using encryption and strict access controls to protect sensitive data.",
  },
  {
    question: "What are the key benefits of AI in medical documentation?",
    answer:
      "The main benefits include faster data processing, improved accuracy, reduced clinician burnout, and enhanced patient care through real-time insights.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Documentation Intelligence: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI revolutionizes medical documentation and streamlines healthcare processes.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black hover:border-[#5B1DAF] transition-colors"
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
  );
}

export default FAQs;
