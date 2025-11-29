"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const offerings = [
  {
    title: "Custom AI Model Development",
    description: "We design and train tailored AI models to solve complex business challenges, leveraging machine learning, deep learning, and neural networks."
  },
  {
    title: "Data Preprocessing & Annotation",
    description: "Our AI engineers clean, label, and prepare your data, ensuring optimal model training and high-performance AI solutions."
  },
  {
    title: "Algorithm Optimization",
    description: "We fine-tune AI algorithms for accuracy, efficiency, and speed, enhancing model performance for real-world applications."
  },
  {
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI models into your existing systems, including cloud platforms, APIs, and edge devices."
  },
  {
    title: "Continuous Model Monitoring & Improvement",
    description: "We provide ongoing monitoring and retraining of AI models, ensuring they evolve with new data and business needs."
  },
  {
    title: "Explainable AI (XAI) Solutions",
    description: "Implement transparent AI models, allowing you to understand AI decision-making processes and build trust with stakeholders."
  }
];

export function WhatWeOffer() {
  return (
    <section className="py-24" style={{ backgroundColor: '#590178' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-white">AI ENGINEERING SERVICES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">What We Offer</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Explore our specialized AI engineering services, empowering your business with innovative, high-performance artificial intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-lg border-2 border-black bg-[#F3F1EB] text-black hover:border-gray-700 transition"
            >
              <CheckCircle className="text-black w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p>{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
 