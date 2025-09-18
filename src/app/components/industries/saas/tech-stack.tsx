"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  "AI Models": [
    { name: "GPT-4", logo: "/images/tech/gpt-4.svg" },
    { name: "BERT", logo: "/images/tech/bert.svg" },
    { name: "Stable Diffusion", logo: "/images/tech/stable-diffusion.svg" }
  ],
  "Cloud Infrastructure": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Development Tools": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "LangChain", logo: "/images/tech/langchain.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI-Powered SaaS Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Harnessing the latest AI models, cloud platforms, and tools to build scalable and intelligent SaaS solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black p-8"
            >
              <h3 className="text-xl font-semibold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-20 h-20 relative mb-3">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base text-black text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
