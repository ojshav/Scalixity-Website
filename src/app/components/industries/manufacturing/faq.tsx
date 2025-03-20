"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does AI optimize predictive maintenance?",
    answer: "AI analyzes equipment data to identify patterns and predict failures, enabling proactive maintenance and reducing unexpected downtime."
  },
  {
    question: "Can AI improve product quality in manufacturing?",
    answer: "Yes! AI-powered vision systems detect product defects in real-time, ensuring high-quality standards and minimizing waste."
  },
  {
    question: "How does AI enhance supply chain management?",
    answer: "AI processes data from suppliers, logistics, and production lines to optimize inventory levels and reduce delivery delays."
  },
  {
    question: "Is AI useful for demand forecasting?",
    answer: "Absolutely! AI models analyze historical data and market trends to predict future product demand, aligning production with customer needs."
  },
  {
    question: "How does AI contribute to energy efficiency?",
    answer: "AI monitors and adjusts energy usage across production lines, helping manufacturers cut costs and reduce their carbon footprint."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI in Manufacturing — FAQs
          </h2>
          <p className="text-xl text-black text-opacity-80 max-w-3xl mx-auto">
            Get insights into how AI is revolutionizing the manufacturing industry.
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

export default FAQ;
