"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Stable Diffusion, and how does it work?",
    answer:
      "Stable Diffusion is a cutting-edge AI model for generating high-quality images from text prompts. It leverages diffusion models to iteratively refine images, creating visually stunning results with fine-grained control over artistic style and composition.",
  },
  {
    question: "What industries can benefit from Stable Diffusion technology?",
    answer:
      "Stable Diffusion is widely used across industries such as gaming, fashion, advertising, entertainment, and healthcare. It enables businesses to create custom visuals, concept art, product designs, and more, streamlining creative workflows.",
  },
  {
    question: "Can Stable Diffusion be customized for specific use cases?",
    answer:
      "Yes, we provide tailored Stable Diffusion solutions to meet your specific needs. Our developers can fine-tune models, integrate APIs, and build custom workflows to align with your business goals.",
  },
  {
    question: "What hardware or infrastructure is required to run Stable Diffusion?",
    answer:
      "Stable Diffusion requires a GPU with sufficient VRAM (typically 8GB or more) for optimal performance. We offer deployment solutions on cloud platforms such as AWS, Google Cloud, and on-premise setups for efficient processing.",
  },
  {
    question: "Do you provide ongoing support and model updates?",
    answer:
      "Yes, our team offers continuous support, model optimization, and updates to ensure your Stable Diffusion implementation remains efficient, scalable, and up to date with the latest advancements.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Stable Diffusion Development
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#0F1629] rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#0F1629] mt-1 rounded-lg">
                  <p className="text-gray-400">{faq.answer}</p>
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
