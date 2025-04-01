"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to design a mobile app?",
    answer:
      "The design process typically takes 4-8 weeks, depending on the app's complexity and the number of screens required.",
  },
  {
    question: "Do you provide UI/UX prototyping?",
    answer:
      "Yes, we create interactive prototypes to visualize the user journey before finalizing the design.",
  },
  {
    question: "Which tools do you use for mobile app design?",
    answer:
      "We use tools like Figma, Adobe XD, Sketch, and InVision to craft high-quality and user-friendly designs.",
  },
  {
    question: "Can you redesign an existing mobile app?",
    answer:
      "Absolutely! We analyze your current design, identify pain points, and create a fresh, modern UI/UX experience.",
  },
  {
    question: "Do you provide design assets after project completion?",
    answer:
      "Yes, we deliver all design files, including source files, style guides, and assets for seamless development.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Mobile App Design FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black"
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
                <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black">
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
