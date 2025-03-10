"use client";

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Consultation & Strategy Development",
    description: "We collaborate with you to understand your AI goals, define key use cases, and outline a tailored AI engineering strategy."
  },
  {
    title: "Data Collection & Preparation",
    description: "We gather, clean, and structure relevant datasets to train and fine-tune AI models, ensuring high-quality data pipelines."
  },
  {
    title: "Model Development & Training",
    description: "Our AI engineers design and train custom machine learning models using state-of-the-art algorithms and frameworks."
  },
  {
    title: "AI Model Evaluation & Optimization",
    description: "We rigorously test AI models for accuracy, performance, and bias, optimizing them for real-world deployment."
  },
  {
    title: "Integration & Deployment",
    description: "We seamlessly integrate AI models into your existing systems, ensuring smooth deployment across platforms and environments."
  },
  {
    title: "Monitoring & Continuous Improvement",
    description: "We provide ongoing model monitoring, retraining, and performance updates to keep your AI solutions ahead of the curve."
  }
]

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Engineering Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured AI engineering process ensures cutting-edge solutions tailored to your business goals and technological landscape.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/20" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;
