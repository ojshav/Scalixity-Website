"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Content Generation",
    description:
      "Create high-quality, contextually relevant content at scale for various business needs.",
    image: "/images/use-cases/Code Generation.svg",
  },
  {
    title: "Customer Support",
    description:
      "Implement intelligent chatbots and virtual assistants for 24/7 customer service.",
    image: "/images/use-cases/Customer Support.svg",
  },
  {
    title: "Data Analysis",
    description:
      "Extract valuable insights from large volumes of unstructured text data.",
    image: "/images/use-cases/Data Analysis.svg",
  },
  {
    title: "Code Generation",
    description:
      "Accelerate development with AI-powered code suggestions and automation.",
    image: "/images/use-cases/Code Generation.svg",
  },
  {
    title: "Document Processing",
    description:
      "Automate the analysis and processing of complex documents and contracts.",
    image: "/images/use-cases/Document Processing.svg",
  },
  {
    title: "Knowledge Management",
    description:
      "Build intelligent knowledge bases and information retrieval systems.",
    image: "/images/use-cases/Knowledge Management.svg",
  },
];

export function UseCases() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            USE CASES
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            LLM Applications Across Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how our LLM solutions can transform different aspects of
            your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl overflow-hidden border border-black hover:border-black transition-colors"
            >
              <div className="relative h-[200px]">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">
                  {useCase.title}
                </h3>
                <p className="text-black">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
