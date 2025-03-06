"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Smart Contract Consulting",
    description: "We provide strategic advice on smart contract architecture, ensuring security, efficiency, and optimal blockchain integration."
  },
  {
    title: "Smart Contract Development",
    description: "Our team writes and deploys secure, scalable smart contracts tailored to your business needs using Solidity, Rust, and Vyper."
  },
  {
    title: "Smart Contract Auditing",
    description: "Thorough security audits to identify and mitigate vulnerabilities, ensuring your smart contracts are robust and safe."
  },
  {
    title: "Token Development",
    description: "Create custom tokens (ERC-20, ERC-721, ERC-1155) for ICOs, NFTs, and other blockchain-based digital assets."
  },
  {
    title: "Integration & Deployment",
    description: "Seamlessly integrate smart contracts into your existing systems, deploy on blockchain networks, and manage upgrades."
  },
  {
    title: "Decentralized Application (DApp) Development",
    description: "We build secure and user-friendly DApps powered by smart contracts for a range of industries and use cases."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Smart Contract Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our end-to-end smart contract services, from consulting and development to deployment and auditing.
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
