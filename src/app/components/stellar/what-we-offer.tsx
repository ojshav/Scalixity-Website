"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Stellar Blockchain Consulting",
    description: "We provide expert guidance on leveraging Stellar's blockchain for fast, low-cost, and scalable financial applications."
  },
  {
    title: "Smart Contract Development",
    description: "Develop secure and efficient smart contracts using Stellar's Soroban framework for decentralized applications."
  },
  {
    title: "Decentralized Application (DApp) Development",
    description: "We build innovative DApps powered by Stellar's blockchain, ensuring seamless transactions and user-friendly experiences."
  },
  {
    title: "Stellar Wallet & API Integration",
    description: "Integrate Stellar wallets and APIs into your applications for seamless asset transfers and interoperability."
  },
  {
    title: "Tokenization & Asset Issuance",
    description: "Leverage Stellar's tokenization capabilities to create and manage digital assets, stablecoins, and security tokens."
  },
  {
    title: "Enterprise Blockchain Solutions",
    description: "Implement Stellar's blockchain solutions tailored to enterprise needs, enhancing cross-border payments and financial inclusion."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider"> 
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6"> 
            Stellar Blockchain Development Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto"> 
            We specialize in building fast, secure, and cost-effective blockchain solutions using the Stellar ecosystem.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors" 
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3> 
              <p className="text-black leading-relaxed">{service.description}</p> 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer;
