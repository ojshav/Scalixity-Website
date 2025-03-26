"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    category: "Programming Languages",
    technologies: ["Python", "R", "C++", "JavaScript", "Julia"]
  },
  {
    category: "Machine Learning Frameworks",
    technologies: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "XGBoost"]
  },
  {
    category: "Deep Learning Platforms",
    technologies: ["Hugging Face", "DeepMind", "OpenAI", "NVIDIA Deep Learning"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS SageMaker", "Google Vertex AI", "Azure AI", "Docker", "Kubernetes"]
  },
  {
    category: "Big Data & Databases",
    technologies: ["Apache Spark", "Hadoop", "SQL", "NoSQL", "MongoDB"]
  },
  {
    category: "Computer Vision",
    technologies: ["OpenCV", "YOLO", "Detectron2", "MMDetection", "MediaPipe"]
  },
  {
    category: "Natural Language Processing",
    technologies: ["spaCy", "NLTK", "Transformers", "BERT", "GPT Models"]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Engineers Technology Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI engineers use cutting-edge technologies to build scalable, high-performance artificial intelligence solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-2xl shadow-lg border-2 border-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-black mb-4">{stack.category}</h3>
              <ul className="list-disc list-inside text-black space-y-2">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="text-lg">{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
