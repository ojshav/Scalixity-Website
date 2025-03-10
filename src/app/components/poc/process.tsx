"use client";

import { motion } from "framer-motion";
import { Brain, Search, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Requirement Analysis & Feasibility Study",
    description: "We start by understanding your business needs and evaluating the feasibility of implementing AI solutions.",
    icon: <Search className="w-10 h-10 text-black" />,
  },
  {
    title: "Data Collection & Preprocessing",
    description: "We gather relevant data, clean it, and prepare it for AI model training, ensuring accuracy and efficiency.",
    icon: <Brain className="w-10 h-10 text-black" />,
  },
  {
    title: "Model Development & Testing",
    description: "Using state-of-the-art AI frameworks, we build and test models to validate their effectiveness and performance.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Deployment & Performance Evaluation",
    description: "We deploy the AI POC in a controlled environment and analyze its real-world impact before scaling.",
    icon: <Rocket className="w-10 h-10 text-black" />,
  },
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">OUR PROCESS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI POC Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach ensures a seamless AI POC development journey, from research to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-opacity-75 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
