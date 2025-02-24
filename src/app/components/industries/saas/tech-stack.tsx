"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  "AI Models": [
    { name: "GPT-4", logo: "/tech/gpt-4.svg" },
    { name: "BERT", logo: "/tech/bert.svg" },
    { name: "Stable Diffusion", logo: "/tech/stable-diffusion.svg" }
  ],
  "Cloud Infrastructure": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "Development Tools": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "LangChain", logo: "/tech/langchain.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our AI-Powered SaaS Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="bg-card rounded-xl border border-border p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category}</h3>
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
                    <span className="text-base text-muted-foreground text-center">{item.name}</span>
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
