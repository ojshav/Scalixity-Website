"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI Frameworks & Libraries",
    items: [
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/tech/pytorch.svg" },
      { name: "Keras", logo: "/tech/keras.svg" }
    ]
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "spaCy", logo: "/tech/spacy.svg" },
      { name: "NLTK", logo: "/tech/nltk.svg" },
      { name: "Hugging Face", logo: "/tech/huggingface.svg" }
    ]
  },
  {
    category: "Document Parsing & Extraction",
    items: [
      { name: "Apache Tika", logo: "/tech/tika.svg" },
      { name: "DocParser", logo: "/tech/docparser.svg" },
      { name: "PDF.js", logo: "/tech/pdfjs.svg" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Pandas", logo: "/tech/pandas.svg" },
      { name: "NumPy", logo: "/tech/numpy.svg" },
      { name: "MongoDB", logo: "/tech/mongodb.svg" }
    ]
  },
  {
    category: "Cloud & Integration",
    items: [
      { name: "AWS", logo: "/tech/aws.svg" },
      { name: "Google Cloud", logo: "/tech/gcp.svg" },
      { name: "Azure", logo: "/tech/azure.svg" }
    ]
  },
  {
    category: "Monitoring & Logging",
    items: [
      { name: "Prometheus", logo: "/tech/prometheus.svg" },
      { name: "Grafana", logo: "/tech/grafana.svg" },
      { name: "ELK Stack", logo: "/tech/elk.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-blue-800 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Documentation Intelligence Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the cutting-edge AI technologies we use to build intelligent, scalable, and efficient document processing solutions.
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
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-gray-600 text-sm text-center">{item.name}</span>
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
