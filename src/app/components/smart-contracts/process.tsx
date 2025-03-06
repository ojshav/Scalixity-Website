"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Consultation & Strategy Development",
    description: "We begin with a thorough understanding of your business goals, identifying how smart contracts can streamline operations, enhance security, and drive innovation."
  },
  {
    title: "Smart Contract Architecture & Design",
    description: "Our team designs robust, secure smart contract architectures, ensuring they are tailored to your business logic and seamlessly integrate with your existing systems."
  },
  {
    title: "Development & Testing",
    description: "We write, test, and optimize smart contracts using secure coding practices. Rigorous testing ensures functionality, security, and gas efficiency before deployment."
  },
  {
    title: "Security Audits & Optimization",
    description: "Our experts conduct comprehensive security audits to identify vulnerabilities, optimize smart contract performance, and ensure compliance with blockchain standards."
  },
  {
    title: "Deployment & Integration",
    description: "We deploy your smart contracts onto the desired blockchain networks, integrating them into your ecosystem for real-time, trustless execution."
  },
  {
    title: "Maintenance & Upgrades",
    description: "Post-deployment, we offer ongoing support, monitoring contract performance, and implementing upgrades to meet evolving business needs and security requirements."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Smart Contract Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our structured development process ensures your smart contracts are secure, efficient, and tailored to drive your business forward.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
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

export default Process;
