"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "Scikit-Learn", logo: "/images/tech/scikit-learn.svg" },
      { name: "XGBoost", logo: "/images/tech/xgboost.svg" }
    ]
  },
  {
    category: "Anomaly Detection",
    items: [
      { name: "Isolation Forest", logo: "/images/tech/isolation-forest.webp" },
      { name: "AutoEncoder", logo: "/images/tech/autoencoder.webp" },
      { name: "One-Class SVM", logo: "/images/tech/one-class-svm.webp" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Apache Kafka", logo: "/images/tech/kafka.svg" },
      { name: "Hadoop", logo: "/images/tech/hadoop.svg" },
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" }
    ]
  },
  {
    category: "Real-Time Monitoring",
    items: [
      { name: "Prometheus", logo: "/images/tech/unet.webp" },
      { name: "Grafana", logo: "/images/tech/resnet.webp" },
      { name: "ELK Stack", logo: "/images/tech/vggnet.webp" }
    ]
  },
  {
    category: "Cloud & Security",
    items: [
      { name: "AWS Shield", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud Security", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure Sentinel", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "Model Deployment & Integration",
    items: [
      { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
      { name: "Docker", logo: "/images/tech/docker.svg" },
      { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Fraud Detection & Security Tech Stack
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
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
              className="bg-white p-8 rounded-xl border border-black shadow-lg"
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
