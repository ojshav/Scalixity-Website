"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = {
  "Natural Language Processing (NLP)": [
    { name: "SpaCy", logo: "/images/tech/spacy.svg" },
    { name: "NLTK", logo: "/images/tech/nltk.svg" }
  ],
  "AI & ML Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" }
  ],
  "Conversational AI Platforms": [
    { name: "Dialogflow", logo: "/images/tech/dialogflow.svg" },
    { name: "Rasa", logo: "/images/tech/rasa.svg" }
  ],
  "Deployment & Integration": [
    { name: "AWS Lex", logo: "/images/tech/aws.svg" },
    { name: "Microsoft Bot Framework", logo: "/images/tech/mxnet.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="py-24" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            CONVERSATIONAL AI TECH STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Conversational AI Technology Stack
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We build intelligent AI-powered chatbots and virtual assistants using cutting-edge NLP models and AI frameworks for seamless customer interaction.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-black mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center"
                  >
                    <div
                      className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center mb-2"
                      style={{ backgroundColor: "#F3F1EB" }}
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-contain filter invert"
                      />
                    </div>
                    <span className="text-sm text-black">{item.name}</span>
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
