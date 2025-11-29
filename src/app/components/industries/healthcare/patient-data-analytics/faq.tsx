"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Patient Data Analytics (PDA)?",
    answer: "Patient Data Analytics uses AI algorithms to collect, process, and analyze healthcare data — providing insights for better decision-making, risk prediction, and personalized patient care."
  },
  {
    question: "How can PDA improve patient outcomes?",
    answer: "PDA identifies health trends, predicts disease risks, and recommends tailored treatment plans — enabling proactive care and faster interventions."
  },
  {
    question: "Is PDA secure for handling sensitive patient information?",
    answer: "Yes. AI-powered PDA solutions use robust encryption, access controls, and comply with healthcare regulations like HIPAA to protect patient data."
  },
  {
    question: "Can PDA integrate with existing hospital systems?",
    answer: "Absolutely! PDA solutions seamlessly connect with Electronic Health Records (EHR), hospital management systems, and telemedicine platforms for real-time data insights."
  },
  {
    question: "How quickly can PDA be implemented in healthcare settings?",
    answer: "Implementation timelines vary, but most AI-driven PDA solutions can be deployed within 3-6 months, depending on system complexity and integration requirements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Patient Data Analytics: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore answers to common questions about AI-powered Patient Data Analytics and its impact on healthcare.
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

export default FAQ;
