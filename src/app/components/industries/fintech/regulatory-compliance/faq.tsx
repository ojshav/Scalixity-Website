"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why is regulatory code change important for fintech companies?",
    answer:
      "Regulatory changes directly impact financial services, requiring companies to stay compliant to avoid penalties, maintain trust, and ensure seamless operations.",
  },
  {
    question: "How do you track and monitor regulatory updates?",
    answer:
      "We use AI-powered tools to track legal changes across jurisdictions, providing real-time alerts and compliance impact assessments.",
  },
  {
    question: "What happens if we don’t update our systems to comply with new regulations?",
    answer:
      "Non-compliance can lead to hefty fines, reputational damage, and even legal action. Keeping your systems updated ensures smooth operations and regulatory adherence.",
  },
  {
    question: "Can regulatory code changes be automated?",
    answer:
      "Yes, automation can streamline compliance processes by updating financial software, validating changes through automated testing, and integrating updates with minimal disruption.",
  },
  {
    question: "How long does it take to implement a regulatory code change?",
    answer:
      "The timeline depends on the complexity of the update. Simple adjustments can be made within days, while larger regulatory shifts may take weeks or months to fully implement and test.",
  },
  {
    question: "Do you provide ongoing compliance support after implementation?",
    answer:
      "Yes! We offer continuous monitoring, risk assessments, and automated compliance updates to keep your systems aligned with evolving regulations.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-black font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F3F1EB] border border-black mt-1 rounded-lg">
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
