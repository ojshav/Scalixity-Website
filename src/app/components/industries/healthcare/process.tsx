"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Assessment & Planning",
    description: "We analyze your healthcare organization's needs and develop a tailored AI implementation strategy."
  },
  {
    number: "02",
    title: "Data Preparation",
    description: "Our team collects, cleans, and prepares healthcare data for AI model training, ensuring privacy and compliance."
  },
  {
    number: "03",
    title: "AI Model Development",
    description: "We develop and train custom AI models specifically designed for your healthcare applications."
  },
  {
    number: "04",
    title: "Integration & Testing",
    description: "Seamless integration of AI solutions into your existing healthcare systems, followed by rigorous testing."
  },
  {
    number: "05",
    title: "Deployment & Training",
    description: "We deploy the AI solution and provide comprehensive training to your healthcare staff."
  },
  {
    number: "06",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization of the AI system to ensure optimal performance and adaptation to new healthcare challenges."
  }
]

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our AI Implementation Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A systematic approach to integrating AI solutions in healthcare settings
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
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
                  {/* Timeline Dot */}
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
