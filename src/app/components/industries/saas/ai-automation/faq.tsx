"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AI Automation in SaaS?",
    answer: "AI automation in SaaS utilizes artificial intelligence to streamline workflows, enhance user experiences, and optimize operational efficiency without human intervention."
  },
  {
    question: "How can AI agents automate SaaS processes?",
    answer: "AI agents handle repetitive tasks like data processing, customer support, and predictive maintenance, reducing manual workload and boosting productivity."
  },
  {
    question: "Are AI-powered SaaS platforms secure?",
    answer: "Yes. AI algorithms detect anomalies, prevent security breaches, and ensure data compliance, providing an extra layer of protection."
  },
  {
    question: "What are the benefits of AI automation for SaaS businesses?",
    answer: "It enhances customer interactions, reduces operational costs, offers real-time insights, and ensures scalable growth for SaaS platforms."
  },
  {
    question: "Can AI customization fit any SaaS model?",
    answer: "Absolutely. AI models can be tailored to suit specific business needs, whether for sales automation, user analytics, or resource optimization."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            AI Automation in SaaS: FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get insights into how AI automation transforms SaaS platforms, boosting efficiency and innovation.
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
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
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
                    <div className="p-4 bg-[#F3F1EB] border-t border-black rounded-lg">
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
