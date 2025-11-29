"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a Personalized Medicine Platform (PMP)?",
    answer: "A Personalized Medicine Platform leverages AI and data analytics to create tailored treatment plans by analyzing genetic, clinical, and lifestyle data of individual patients."
  },
  {
    question: "How does PMP benefit patients?",
    answer: "PMP enhances patient outcomes by predicting drug responses, identifying health risks early, and suggesting customized therapies suited to each individual."
  },
  {
    question: "Is patient data secure on a PMP?",
    answer: "Absolutely. PMPs use advanced encryption, access controls, and comply with healthcare standards like HIPAA to protect sensitive patient data."
  },
  {
    question: "Can PMP integrate with existing hospital systems?",
    answer: "Yes. PMP solutions seamlessly connect with EHRs, laboratory systems, and hospital databases to provide real-time, data-driven insights."
  },
  {
    question: "What is the implementation timeline for a PMP?",
    answer: "The implementation period typically ranges from 3 to 6 months, depending on the complexity of integration and customization required."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Personalized Medicine Platform: FAQs
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Get answers to common questions about AI-powered Personalized Medicine Platforms and their transformative impact on healthcare.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black"
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
                    animate={{ opacity: 1, height: 'auto' }}
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

export default FAQ;
