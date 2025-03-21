"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI Frameworks & Libraries",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
      { name: "Keras", logo: "/images/tech/keras.svg" },
    ],
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "spaCy", logo: "/images/tech/spacy.svg" },
      { name: "NLTK", logo: "/images/tech/nltk.svg" },
      { name: "Hugging Face", logo: "/images/tech/huggingface.svg" },
    ],
  },
  {
    category: "Document Parsing & Extraction",
    items: [
      { name: "Apache Tika", logo: "/images/tech/tika.webp" },
      { name: "DocParser", logo: "/images/tech/docparser.webp" },
      { name: "PDF.js", logo: "/images/tech/pdfjs.webp" },
    ],
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Pandas", logo: "/images/tech/pandas.svg" },
      { name: "NumPy", logo: "/images/tech/numpy.svg" },
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    ],
  },
  {
    category: "Cloud & Integration",
    items: [
      { name: "AWS", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure", logo: "/images/tech/azure.svg" },
    ],
  },
  {
    category: "Monitoring & Logging",
    items: [
      { name: "Prometheus", logo: "/images/tech/prometheus.webp" },
      { name: "Grafana", logo: "/images/tech/grafana.webp" },
      { name: "ELK Stack", logo: "/images/tech/elk.webp" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] text-black py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Documentation Intelligence Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore the cutting-edge AI technologies we use to build
            intelligent, scalable, and efficient document processing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-6">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-black text-sm text-center">
                      {item.name}
                    </span>
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
