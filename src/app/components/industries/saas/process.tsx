"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Discovery & Goal Alignment",
    description: "We start by understanding your SaaS product goals, identifying pain points, and defining AI strategies tailored to your business."
  },
  {
    number: "02",
    title: "Data Gathering & Preprocessing",
    description: "Our team collects and processes relevant data, ensuring accuracy and consistency to train robust AI models."
  },
  {
    number: "03",
    title: "Model Design & Selection",
    description: "We design AI models focused on predictive analytics, automation, or personalization, aligned with your SaaS objectives."
  },
  {
    number: "04",
    title: "AI Model Development",
    description: "Using cutting-edge algorithms, we build and train AI models to enhance your SaaS platform's functionality."
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "Rigorous testing ensures AI model accuracy, performance, and scalability, fine-tuned to your software's requirements."
  },
  {
    number: "06",
    title: "Deployment & Integration",
    description: "We seamlessly integrate AI into your SaaS platform, ensuring smooth operations with minimal disruption."
  }
]

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI Development Process for SaaS
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A step-by-step process designed to embed AI into your SaaS platform, boosting efficiency, automation, and user experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-[#F3F1EB] p-6 rounded-xl border border-black">
                      <div className="text-black text-sm font-bold mb-2">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                      <p className="text-black">{step.description}</p>
                    </div>
                  </div>
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
