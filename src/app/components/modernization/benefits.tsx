"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Enhanced Performance & Scalability",
    description: "Modernizing your apps ensures faster load times, improved responsiveness, and the ability to scale effortlessly as your business grows."
  },
  {
    title: "Cost Optimization",
    description: "Reduce infrastructure and maintenance costs by transitioning to cloud-native solutions and modern architectures."
  },
  {
    title: "Improved Security",
    description: "Legacy systems are vulnerable to cyberattacks. Modern apps incorporate the latest security protocols and compliance standards."
  },
  {
    title: "Better User Experience",
    description: "Enhance user satisfaction with intuitive interfaces, seamless navigation, and modern design principles."
  },
  {
    title: "Integration with Emerging Technologies",
    description: "Enable AI, machine learning, and IoT capabilities by adopting a flexible and modern app infrastructure."
  },
  {
    title: "Business Agility & Innovation",
    description: "Foster innovation by adopting microservices and cloud solutions, allowing quick deployment of new features."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Benefits of App Modernization</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-6 rounded-lg border border-black flex flex-col items-start"
            >
              <CheckCircle className="text-black mb-4" size={32} />
              <h3 className="text-xl font-semibold text-black mb-2">{benefit.title}</h3>
              <p className="text-black/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
