"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering in AI refers to the process of designing and optimizing the prompts or inputs given to a language model or generative AI model, in order to improve its performance and output. It involves crafting specific instructions or questions that will guide the AI model towards producing more accurate and relevant responses or outputs. Prompt engineering can greatly enhance the effectiveness of AI models, enabling them to perform various tasks such as language translation, content generation, and image recognition with greater accuracy and efficiency.",
  },
  {
    question: "What are some common tasks that prompt engineering is used for?",
    answer:
      "Prompt engineering is commonly used for tasks such as text summarization, code generation, sentiment analysis, chatbot interactions, creative writing assistance, and data extraction from unstructured text. It ensures that AI models provide more precise and relevant outputs tailored to specific business needs.",
  },
  {
    question: "How does prompt engineering differ from traditional machine learning?",
    answer:
      "Traditional machine learning involves training models with large datasets and adjusting their parameters, whereas prompt engineering focuses on optimizing the inputs given to pre-trained models to achieve better results. It requires an understanding of how language models interpret prompts to enhance their performance without modifying their underlying architecture.",
  },
  {
    question: "What are the typical costs to hire prompt engineers?",
    answer:
      "The cost of hiring prompt engineers varies based on their experience, project complexity, and duration. Freelance prompt engineers may charge per project or hourly, while full-time hires depend on industry standards. Companies typically assess the return on investment in terms of improved AI model performance and efficiency.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Hire Prompt Engineers
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] rounded-lg border border-black shadow-md hover:shadow-lg transition-shadow" // Added black border here
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
                <div className="p-4 bg-[#F3F1EB] mt-1 rounded-lg border border-black"> {/* Added black border here as well */}
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
