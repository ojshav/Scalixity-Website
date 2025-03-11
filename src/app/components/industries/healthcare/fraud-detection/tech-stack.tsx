"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "Scikit-Learn", logo: "/tech/scikit-learn.svg" },
      { name: "XGBoost", logo: "/tech/xgboost.svg" }
    ]
  },
  {
    category: "Anomaly Detection",
    items: [
      { name: "Isolation Forest", logo: "/tech/isolation-forest.svg" },
      { name: "AutoEncoder", logo: "/tech/autoencoder.svg" },
      { name: "One-Class SVM", logo: "/tech/one-class-svm.svg" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Apache Kafka", logo: "/tech/kafka.svg" },
      { name: "Hadoop", logo: "/tech/hadoop.svg" },
      { name: "MongoDB", logo: "/tech/mongodb.svg" }
    ]
  },
  {
    category: "Real-Time Monitoring",
    items: [
      { name: "Prometheus", logo: "/tech/prometheus.svg" },
      { name: "Grafana", logo: "/tech/grafana.svg" },
      { name: "ELK Stack", logo: "/tech/elk.svg" }
    ]
  },
  {
    category: "Cloud & Security",
    items: [
      { name: "AWS Shield", logo: "/tech/aws-shield.svg" },
      { name: "Google Cloud Security", logo: "/tech/gcp-security.svg" },
      { name: "Azure Sentinel", logo: "/tech/azure-sentinel.svg" }
    ]
  },
  {
    category: "Model Deployment & Integration",
    items: [
      { name: "FastAPI", logo: "/tech/fastapi.svg" },
      { name: "Docker", logo: "/tech/docker.svg" },
      { name: "Kubernetes", logo: "/tech/kubernetes.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Fraud Detection & Security Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Leveraging AI-powered tools and robust security frameworks to detect fraud, analyze patterns, and protect your digital infrastructure in real time.
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
              <h3 className="text-2xl font-bold text-[#5B1DAF] mb-6">{stack.category}</h3>
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
