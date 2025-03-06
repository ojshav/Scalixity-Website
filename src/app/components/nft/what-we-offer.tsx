"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "NFT Marketplace Development",
    description: "We build robust NFT marketplaces that allow seamless trading, minting, and showcasing of digital assets."
  },
  {
    title: "Smart Contract Development",
    description: "Develop secure and efficient smart contracts using Solidity and Rust to manage NFT minting, transfers, and royalties."
  },
  {
    title: "NFT Minting Solutions",
    description: "Enable NFT creators to easily mint their tokens with customizable attributes, ensuring full control over their digital assets."
  },
  {
    title: "Wallet Integration",
    description: "Integrate popular crypto wallets like MetaMask and Trust Wallet for secure NFT transactions and asset management."
  },
  {
    title: "Cross-Chain NFT Solutions",
    description: "Implement cross-chain interoperability to allow NFTs to move seamlessly between different blockchain networks."
  },
  {
    title: "NFT Storage Solutions",
    description: "Ensure secure storage and retrieval of NFT metadata using decentralized storage solutions like IPFS and Arweave."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            NFT Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your digital assets with custom NFT solutions — from marketplaces to smart contracts — built for security and scalability.
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
