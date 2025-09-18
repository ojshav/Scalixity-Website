"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI Frameworks & Libraries",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
      { name: "Keras", logo: "/images/tech/keras.svg" }
    ]
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "spaCy", logo: "/images/tech/spacy.svg" },
      { name: "NLTK", logo: "/images/tech/nltk.svg" },
      { name: "Hugging Face", logo: "/images/tech/huggingface.svg" }
    ]
  },
  {
    category: "Predictive Analytics & Forecasting",
    items: [
      { name: "Scikit-learn", logo: "/images/tech/scikit-learn.svg" },
      { name: "XGBoost", logo: "/images/tech/xgboost.svg" },
      { name: "Prophet", logo: "/images/tech/prophet.svg" }
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "D3.js", logo: "/images/tech/d3.svg" },
      { name: "Matplotlib", logo: "/images/tech/matplotlib.svg" },
      { name: "Seaborn", logo: "/images/tech/seaborn.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
      { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
      { name: "Redis", logo: "/images/tech/redis.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Solutions Tech Stack for Retail
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies we use to build intelligent, data-driven retail solutions — from personalized recommendations to predictive analytics.
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
              className="bg-[#F3F1EB] p-8 rounded-xl shadow-lg border-2 border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
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
