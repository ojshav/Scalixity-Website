"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How is AI used in construction?",
    answer:
      "AI is used for predictive maintenance, project planning optimization, risk management, and automating routine tasks to enhance efficiency in construction projects.",
  },
  {
    question: "Can AI improve construction site safety?",
    answer:
      "Yes, AI analyzes real-time data from sensors and cameras to identify potential hazards, ensuring proactive safety measures on construction sites.",
  },
  {
    question: "What are the benefits of AI for project management?",
    answer:
      "AI helps in accurate project timelines, resource allocation, and budget forecasting, reducing delays and cost overruns.",
  },
  {
    question: "How does AI assist in design and planning?",
    answer:
      "AI-powered tools generate optimized building designs, simulate structural integrity, and suggest sustainable materials, enhancing the design process.",
  },
  {
    question: "Is AI reliable for construction data analysis?",
    answer:
      "Absolutely. AI models process vast datasets with precision, offering actionable insights for better decision-making.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI in Construction: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI transforms construction projects with smart planning, site safety, and data-driven insights.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg text-black border border-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
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
                    <div className="p-4 bg-[#F3F1EB] text-black rounded-lg mt-1 border border-black">
                      <p>{faq.answer}</p>
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
