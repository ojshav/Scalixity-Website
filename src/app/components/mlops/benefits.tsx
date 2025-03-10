"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Accelerated Model Deployment",
    description: "Streamline the deployment of AI models with automated pipelines, reducing time-to-market and ensuring faster innovation."
  },
  {
    title: "Improved Model Monitoring",
    description: "Continuously track model performance in real-time, detect drift, and retrain models to maintain accuracy and reliability."
  },
  {
    title: "Scalable Infrastructure",
    description: "Leverage cloud-native solutions and containerization to build scalable AI pipelines that grow with your business."
  },
  {
    title: "Efficient Collaboration",
    description: "Enhance collaboration between data scientists, DevOps, and AI teams by unifying workflows and automating repetitive tasks."
  },
  {
    title: "Cost Optimization",
    description: "Optimize resource allocation and model retraining processes, minimizing computational costs while maximizing AI performance."
  },
  {
    title: "Compliance & Security",
    description: "Ensure data privacy, secure model endpoints, and maintain regulatory compliance throughout the AI lifecycle."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Benefits of MLOps Consulting Services</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mt-4">
            Unlock the full potential of AI with streamlined model operations, automation, and continuous integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-lg border border-black flex items-start gap-4"
            >
              <CheckCircle className="text-[#5B1DAF] w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
                <p className="text-black mt-2">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
