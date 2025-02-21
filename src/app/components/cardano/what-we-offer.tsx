"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Cardano Blockchain Consulting",
    description: "We provide expert guidance on leveraging Cardano's blockchain for secure, scalable, and decentralized applications."
  },
  {
    title: "Smart Contract Development",
    description: "Develop robust, efficient smart contracts using Plutus and Marlowe, ensuring seamless execution on the Cardano blockchain."
  },
  {
    title: "Decentralized Application (DApp) Development",
    description: "We build scalable and user-friendly DApps powered by Cardano's secure and energy-efficient blockchain technology."
  },
  {
    title: "Cardano Wallet & API Integration",
    description: "Integrate Cardano wallets and APIs into your applications, ensuring smooth transactions and interoperability."
  },
  {
    title: "NFT & Token Development",
    description: "Leverage Cardano's native assets framework to create and manage NFTs, custom tokens, and digital assets."
  },
  {
    title: "Enterprise Blockchain Solutions",
    description: "Implement Cardano's blockchain solutions tailored to enterprise needs, enhancing transparency, security, and efficiency."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Cardano Blockchain Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in building secure, scalable, and innovative blockchain solutions using the Cardano ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer;
