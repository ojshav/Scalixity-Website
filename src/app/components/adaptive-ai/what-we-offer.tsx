"use client"
import { motion } from 'framer-motion';

const services = [
  {
    title: "Intelligent Automation Planning",
    description:
      "We work on intelligent automation planning and strategy implementation. This involves helping the clients in identifying the automated workflows and tasks that can reduce operation costs, increase work productivity and improve customer experience using an Adaptive AI solution.",
  },
  {
    title: "Data Preparation & Analysis",
    description:
      "We help you in pre-processing and manipulating large data sets to identify patterns and insights, with data cleaning and transformation. Our team can also help in using the data to train adaptive AI models.",
  },
  {
    title: "Model Training & Development",
    description:
      "Our AI engineers design and develop machine learning and deep learning models using various techniques and algorithms. The trained model developed for the client is then optimized by fine-tuning it to improve accuracy and performance.",
  },
  {
    title: "Model Deployment & Integration",
    description:
      "We also make sure the trained model is scalable and can be easily deployed on multiple devices. We help you in the process of implementing and integrating the trained adaptive AI models. Our team also ensures that it meets the desired performance and accuracy levels to meet pre-defined business goals.",
  },
  {
    title: "AI Support & Maintenance",
    description:
      "Adaptive AI support and maintenance are critical for ensuring the continued success of AI-based solutions and achieving the desired business outcomes. Our team can help you with support and maintenance activities such as updating the models with new data, retraining them periodically to improve their accuracy, and fixing bugs or errors in the code.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-400 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Adaptive AI Development Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We build resilient AI applications that incorporate adaptive AI features, enabling self-directed learning to adapt to evolving circumstances and yield exceptional outcomes. Explore more with our Adaptive AI development services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
