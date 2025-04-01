"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: "Stellar Blockchain Expertise",
    description: "We specialize in Stellar blockchain development, ensuring seamless and efficient financial solutions."
  },
  {
    title: "Smart Contract & Soroban Development",
    description: "Develop secure and scalable smart contracts using Stellar's Soroban framework."
  },
  {
    title: "Decentralized Finance (DeFi) Solutions",
    description: "Leverage Stellar's fast and low-cost transactions for building DeFi applications."
  },
  {
    title: "Cross-Border Payment Solutions",
    description: "Enable fast, secure, and cost-effective global payments with Stellar’s blockchain infrastructure."
  },
  {
    title: "Tokenization & Asset Issuance",
    description: "Utilize Stellar’s built-in asset issuance capabilities to tokenize real-world assets."
  },
  {
    title: "Stellar Wallet & API Integration",
    description: "Integrate Stellar wallets and APIs into your applications for seamless financial transactions."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHY US</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Us for Stellar App Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our expertise in Stellar blockchain development ensures secure, fast, and scalable solutions tailored to your business needs.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                  <p className="text-black">{reason.description}</p>
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
