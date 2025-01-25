"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description: "We begin by thoroughly understanding your business needs and AI objectives."
  },
  {
    number: "02",
    title: "Data Assessment",
    description: "Our team evaluates your data quality and prepares it for AI model training."
  },
  {
    number: "03",
    title: "AI Model Selection",
    description: "We choose the most appropriate AI models and algorithms for your specific use case."
  },
  {
    number: "04",
    title: "Development & Training",
    description: "Our experts develop and train the AI models using your data and industry best practices."
  },
  {
    number: "05",
    title: "Testing & Validation",
    description: "Rigorous testing ensures the AI solution meets performance and accuracy standards."
  },
  {
    number: "06",
    title: "Deployment & Integration",
    description: "We seamlessly integrate the AI solution into your existing systems and workflows."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our AI Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to delivering high-quality AI solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

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
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <div className="text-primary text-sm font-bold mb-2">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
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

