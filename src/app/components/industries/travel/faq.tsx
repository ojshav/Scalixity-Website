"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can AI enhance travel experiences?",
    answer: "AI personalizes travel experiences by offering tailored recommendations, dynamic pricing, and real-time itinerary adjustments based on user preferences and behavior."
  },
  {
    question: "What is dynamic pricing in the travel industry?",
    answer: "Dynamic pricing uses AI algorithms to adjust ticket prices in real-time based on demand, seasonality, competitor rates, and other market factors, ensuring competitive pricing."
  },
  {
    question: "Can AI help with customer support in travel?",
    answer: "Yes! AI chatbots provide instant customer support by answering common queries, assisting with bookings, and handling cancellations or modifications 24/7."
  },
  {
    question: "How does AI improve travel itinerary planning?",
    answer: "AI analyzes user data, weather patterns, and local events to create personalized travel itineraries, helping travelers optimize their time and experiences."
  },
  {
    question: "Is AI safe for managing travel data?",
    answer: "Absolutely! AI systems use encryption, access controls, and real-time monitoring to secure sensitive travel data, ensuring customer privacy and data integrity."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Solutions for Travel — FAQs
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI revolutionizes the travel industry by enhancing personalization, optimizing pricing, and providing seamless support.
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
                <span className="font-semibold text-black">
                  {faq.question}
                </span>
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
