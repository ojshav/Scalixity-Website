"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  {
    name: "Finance",
    icon: "/images/icons/finance.svg",
    description: "We provide secure and scalable decentralized finance (DeFi) solutions, enabling users to access financial services without intermediaries.",
    solutions: [
      "DeFi Lending & Borrowing",
      "Decentralized Exchanges",
      "Yield Farming & Staking",
      "Stablecoins & Payments"
    ]
  },
  {
    name: "Healthcare",
    icon: "/images/icons/healthcare.svg",
    description: "Blockchain-powered healthcare solutions improve security, privacy, and interoperability in patient data management and clinical research.",
    solutions: [
      "Medical Records on Blockchain",
      "Supply Chain Transparency",
      "Secure Telemedicine",
      "Healthcare Tokenization"
    ]
  },
  {
    name: "Supply Chain",
    icon: "/images/icons/publishing.svg",
    description: "Enhancing transparency and efficiency in global supply chains through blockchain-based tracking and authentication.",
    solutions: [
      "Immutable Product Tracking",
      "Automated Smart Contracts",
      "Fraud Prevention",
      "Sustainable Sourcing"
    ]
  },
  {
    name: "Gaming & NFTs",
    icon: "/images/icons/gaming.webp",
    description: "Revolutionizing the gaming industry with NFT-based ownership and blockchain-backed in-game assets.",
    solutions: [
      "Play-to-Earn Games",
      "NFT Marketplaces",
      "Game Asset Tokenization",
      "Interoperable Metaverses"
    ]
  }
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Blockchain-Powered dApps Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build decentralized applications tailored to industry-specific needs, unlocking new possibilities in security, transparency, and automation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-card p-6 rounded-full mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">{industry.name}</h3>
              {industry.description && (
                <p className="text-sm text-muted-foreground mt-2 text-center">{industry.description}</p>
              )}
              {industry.solutions && (
                <ul className="text-sm text-muted-foreground mt-2 list-disc pl-5">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries;
