"use client";

import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Enhanced Risk Assessment",
    description: "AI models analyze vast amounts of data to predict and mitigate potential risks, enabling smarter policy decisions.",
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Advanced AI algorithms identify suspicious patterns, helping insurers proactively combat fraudulent claims.",
  },
  {
    title: "Automated Claims Processing",
    description: "Streamline claims handling by leveraging AI for faster, more accurate claim validation and payouts.",
  },
  {
    title: "Personalized Policy Recommendations",
    description: "AI tailors insurance products to individual customers, boosting satisfaction and sales.",
  },
  {
    title: "Predictive Customer Insights",
    description: "Gain insights into customer behavior and trends to craft proactive engagement strategies.",
  },
  {
    title: "Operational Efficiency",
    description: "Reduce manual workloads and operational costs by automating routine processes with AI.",
  }
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-r from-indigo-800 to-violet-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">Key Benefits of AI in Insurance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-indigo-900 p-8 rounded-xl border border-violet-700 hover:border-violet-500 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;


