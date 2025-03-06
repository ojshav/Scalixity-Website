"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Cardano Blockchain Expertise",
    description: "We have deep knowledge of Cardano's blockchain architecture, ensuring robust and scalable application development."
  },
  {
    title: "Smart Contract Development",
    description: "Develop secure and efficient smart contracts using Cardano's Plutus and Marlowe frameworks."
  },
  {
    title: "Decentralized Application (DApp) Development",
    description: "We build innovative DApps on Cardano, leveraging its secure and sustainable ecosystem."
  },
  {
    title: "Cardano Wallet & API Integration",
    description: "Integrate Cardano wallets and APIs into your applications for seamless transactions and interoperability."
  },
  {
    title: "Tokenization & Asset Management",
    description: "Leverage Cardano's native tokens for secure and efficient asset issuance and management."
  },
  {
    title: "Enterprise Blockchain Solutions",
    description: "Implement enterprise-grade blockchain solutions using Cardano's decentralized and energy-efficient infrastructure."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Us for Cardano App Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise in Cardano blockchain development ensures secure, scalable, and efficient solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;
