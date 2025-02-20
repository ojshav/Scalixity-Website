"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Assessment & Strategy Development",
    description: "We start by analyzing your business needs and identifying how AWS application development can drive efficiency and innovation. Our strategy ensures seamless integration with your existing cloud environment."
  },
  {
    title: "Prototype & MVP Development",
    description: "We rapidly develop prototypes and minimum viable products (MVPs) to test functionalities, gather feedback, and iterate based on real-world usage."
  },
  {
    title: "Full-Scale AWS Application Deployment",
    description: "Once validated, we implement a robust, scalable, and secure application leveraging AWS best practices and cutting-edge services such as Lambda, ECS, and DynamoDB."
  },
  {
    title: "Optimization & Continuous Support",
    description: "Post-deployment, we monitor performance, optimize workloads, and provide ongoing support to enhance application efficiency and maintain cloud cost-effectiveness."
  }
]

export function ProcessAWSAppDev() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our AWS Application Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a structured approach to AWS application development, ensuring secure, scalable, and high-performing solutions tailored to your business needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

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
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
