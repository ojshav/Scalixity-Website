"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Cardano Strategy & Planning",
    description: "We conduct an in-depth analysis of your business requirements and blockchain goals, defining clear objectives and creating a comprehensive roadmap to guide the development of a secure, scalable Cardano-based solution."
  },
  {
    title: "Smart Contract & DApp Prototyping",
    description: "We design and develop prototypes and MVPs on the Cardano blockchain to validate core functionalities, test smart contract security, and ensure the feasibility of decentralized applications before full-scale deployment."
  },
  {
    title: "Blockchain Development & Integration",
    description: "Our experts build and integrate customized Cardano smart contracts, decentralized applications (DApps), and blockchain solutions, ensuring security, transparency, and interoperability within your ecosystem."
  },
  {
    title: "Security Audits & Performance Optimization",
    description: "We perform rigorous security audits to identify and mitigate vulnerabilities, optimize transaction efficiency, and implement best practices for compliance with Cardano blockchain standards."
  },
  {
    title: "Deployment & Network Launch",
    description: "We seamlessly deploy your Cardano applications on the mainnet or testnet, ensuring a smooth transition with scalable infrastructure, robust functionality, and real-world usability."
  },
  {
    title: "Continuous Improvement & Scaling",
    description: "Post-deployment, we monitor blockchain performance, enhance features based on user feedback, and implement scalability solutions to support long-term growth and evolving market demands."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Cardano App Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our structured approach ensures secure, scalable, and efficient Cardano blockchain solutions tailored to your needs.
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
