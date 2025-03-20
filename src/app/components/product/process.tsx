"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Product Discovery & Strategy",
    description: "We begin by analyzing market trends, user needs, and business objectives to define a clear product strategy that ensures success."
  },
  {
    title: "Prototype & MVP Development",
    description: "Rapidly build prototypes and MVPs to validate concepts, gather user feedback, and refine features before full-scale development."
  },
  {
    title: "Full-Scale Product Development",
    description: "Leverage agile development methodologies to build scalable, high-performance digital products tailored to business needs."
  },
  {
    title: "Product Testing & Optimization",
    description: "Implement rigorous testing strategies to ensure reliability, security, and optimal performance for seamless user experience."
  },
  {
    title: "Product Deployment & Market Launch",
    description: "Ensure smooth deployment with cloud integration, CI/CD pipelines, and go-to-market strategies for successful product adoption."
  },
  {
    title: "Continuous Improvement & Scaling",
    description: "Monitor product performance, gather insights, and iterate for ongoing enhancements and scalability."
  }
]

export function ProductDevelopmentProcess() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Product Development Lifecycle
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From ideation to launch, our structured product development process ensures innovation, efficiency, and scalability.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/30" />

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
                {/* Timeline dot */}
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

export default ProductDevelopmentProcess;
