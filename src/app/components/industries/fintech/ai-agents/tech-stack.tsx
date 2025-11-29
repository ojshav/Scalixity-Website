"use client";

import { motion } from 'framer-motion';

const techStack = [
  {
    title: "Natural Language Processing (NLP)",
    description: "Enhance customer interactions with AI agents using NLP for real-time support, fraud detection, and sentiment analysis.",
  },
  {
    title: "Predictive Analytics",
    description: "AI agents leverage predictive models to forecast market trends, assess credit risk, and optimize investment strategies.",
  },
  {
    title: "Automated Risk Assessment",
    description: "Implement AI algorithms to analyze transactional data and identify potential risks or suspicious activities instantly.",
  },
  {
    title: "AI-Powered Chatbots",
    description: "Deploy intelligent chatbots for seamless customer support, account inquiries, and personalized financial advice.",
  },
  {
    title: "Fraud Detection Systems",
    description: "Utilize AI to detect and prevent fraudulent transactions by analyzing patterns and flagging anomalies in real-time.",
  },
  {
    title: "Portfolio Optimization",
    description: "AI agents assess market data, identify investment opportunities, and recommend tailored strategies to maximize returns.",
  },
];

export function TechStack() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">AI Tech Stack in Fintech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{tech.title}</h3>
              <p className="text-black leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
