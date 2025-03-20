"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Problem Definition",
    description: "Building AI-powered products and services requires answering crucial questions. The model is developed to solve a specific problem and for an intended use case. We help in the process of planning the AI model suitable for your needs."
  },
  {
    title: "Data Collection, Training, and Evaluation",
    description: "We gather, preprocess, and label high-quality datasets essential for training AI models. Using cutting-edge techniques, we refine and optimize models to ensure peak performance."
  },
  {
    title: "Model Design and Evaluation",
    description: "Our team carefully selects architectures and algorithms suited for the intended use case. We conduct rigorous testing and fine-tuning to achieve optimal accuracy and efficiency."
  },
  {
    title: "Deployment",
    description: "Once the AI model meets quality standards, we seamlessly integrate it into your existing systems, ensuring smooth functionality and minimal disruption."
  },
  {
    title: "Deployment & Maintenance",
    description: "Post-deployment, we provide continuous monitoring, performance optimizations, and necessary updates to keep the AI solution reliable and efficient."
  }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our ChatGPT Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our ChatGPT developers undertake a meticulous approach to understand your company’s objectives
            and create an engaging, user-friendly, and smooth OpenAI solution for your target audience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-500" /> {/* Dark gray line */}

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center"> {/* Black circle */}
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" /> {/* Lavender dot inside */}
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-gray-500 transition-colors">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
