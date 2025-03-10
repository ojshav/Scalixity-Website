"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is React Native used for?",
    answer:
      "React Native is used for building cross-platform mobile applications that run on both iOS and Android from a single codebase.",
  },
  {
    question: "Why should I choose React Native for app development?",
    answer:
      "React Native offers faster development, cost efficiency, and a seamless user experience across multiple platforms with a native-like feel.",
  },
  {
    question: "Can a React Native app perform as well as a native app?",
    answer:
      "Yes, with proper optimization, React Native apps can achieve near-native performance, making it an excellent choice for mobile development.",
  },
  {
    question: "Will my React Native app work on both iOS and Android?",
    answer:
      "Yes! React Native allows you to develop a single app that runs smoothly on both iOS and Android, reducing development time and cost.",
  },
  {
    question: "Do you provide maintenance and updates for React Native apps?",
    answer:
      "Yes, we offer post-launch support, updates, and performance optimizations to ensure your app stays up to date and runs efficiently.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">React Native App Development FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-black" />
                ) : (
                  <ChevronDown className="text-black" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
                  <p className="text-black">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
