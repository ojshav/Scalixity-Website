"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "OpenAI GPT", logo: "/tech/openai.svg" },
      { name: "Hugging Face Transformers", logo: "/tech/huggingface.svg" },
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" }
    ]
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "SpaCy", logo: "/tech/spacy.svg" },
      { name: "NLTK", logo: "/tech/nltk.svg" },
      { name: "BERT", logo: "/tech/bert.svg" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Pandas", logo: "/tech/pandas.svg" },
      { name: "Apache Spark", logo: "/tech/spark.svg" },
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS Lambda", logo: "/tech/aws.svg" },
      { name: "Google Cloud Functions", logo: "/tech/gcp.svg" },
      { name: "Azure AI", logo: "/tech/azure.svg" }
    ]
  },
  {
    category: "Model Deployment & APIs",
    items: [
      { name: "FastAPI", logo: "/tech/fastapi.svg" },
      { name: "Docker", logo: "/tech/docker.svg" },
      { name: "Kubernetes", logo: "/tech/kubernetes.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#1a237e] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Tech Stack for SaaS Agents
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Powering AI-driven SaaS agents with state-of-the-art machine learning, NLP, and cloud technologies for seamless automation and intelligence.
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
              <h3 className="text-2xl font-bold text-[#1a237e] mb-6">{stack.category}</h3>
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
