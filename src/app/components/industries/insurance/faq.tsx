"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How is AI used in insurance?",
    answer: "AI is used to automate claims processing, detect fraud, assess risks accurately, personalize policies, and enhance customer support through virtual assistants."
  },
  {
    question: "Can AI improve fraud detection in insurance?",
    answer: "Yes, AI algorithms analyze patterns and anomalies in data to identify suspicious claims, helping insurers prevent fraud in real-time."
  },
  {
    question: "What are the benefits of AI for underwriting?",
    answer: "AI streamlines underwriting by analyzing vast data sets, providing precise risk assessments, and offering data-backed policy recommendations."
  },
  {
    question: "How does AI enhance customer experience in insurance?",
    answer: "AI-powered chatbots and virtual assistants provide instant support, personalized policy suggestions, and proactive alerts, improving client satisfaction."
  },
  {
    question: "Is AI secure for insurance data processing?",
    answer: "Absolutely. AI models are designed with robust encryption and compliance mechanisms to safeguard sensitive insurance data."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Updated background color */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span> {/* Updated font color */}
          <h2 className="text-4xl font-bold text-black mt-4 mb-6"> {/* Updated font color */}
            AI in Insurance: Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto"> {/* Updated font color */}
            Explore how AI transforms the insurance industry. Get answers to common questions about AI’s role in claims processing, fraud prevention, and customer experience.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg text-black border-2 border-black" 
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
                    <div className="p-4 bg-[#F3F1EB] text-black rounded-lg mt-1 border-2 border-black"> {/* Updated box color and border */}
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