"use client";

import { motion } from 'framer-motion';
import { Cpu, Cloud, Code, Settings } from 'lucide-react';

const techStack = [
  {
    title: "AI & Machine Learning Frameworks",
    description: "We utilize cutting-edge frameworks like TensorFlow, PyTorch, and ONNX to build and optimize AI copilots with deep learning capabilities.",
    icon: <Cpu className="w-10 h-10 text-black" />
  },
  {
    title: "Large Language Models (LLMs)",
    description: "Our copilots leverage state-of-the-art LLMs such as GPT-4, Claude, Llama, and custom fine-tuned transformer models.",
    icon: <Code className="w-10 h-10 text-black" />
  },
  {
    title: "Cloud & Infrastructure",
    description: "We deploy AI copilots on robust cloud platforms like AWS, Azure, and Google Cloud, ensuring scalability, security, and seamless integration.",
    icon: <Cloud className="w-10 h-10 text-black" />
  },
  {
    title: "APIs & Integrations",
    description: "Our solutions seamlessly integrate with RESTful APIs, GraphQL, and enterprise tools like Slack, Microsoft Teams, and CRM systems.",
    icon: <Settings className="w-10 h-10 text-black" />
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Copilot Development Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI Copilot solutions are built with the latest advancements in AI, cloud computing, and seamless integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black flex items-start space-x-4"
            >
              <div>{tech.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{tech.title}</h3>
                <p className="text-black leading-relaxed">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
 