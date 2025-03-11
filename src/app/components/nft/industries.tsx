"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  {
    name: "Art & Collectibles",
    icon: "/icons/art.svg",
    description: "Empower artists and creators by enabling seamless minting, trading, and showcasing of unique digital assets. Our NFT solutions enhance visibility and monetization opportunities.",
    solutions: [
      "NFT Art Platforms",
      "Digital Collectibles Marketplaces",
      "Auction Systems",
      "Royalty Management"
    ]
  },
  {
    name: "Gaming",
    icon: "/icons/gaming.svg",
    description: "Revolutionize in-game economies by tokenizing assets, creating play-to-earn models, and offering secure marketplaces for buying, selling, and trading game items.",
    solutions: [
      "In-Game Asset Tokenization",
      "NFT-Based Rewards Systems",
      "Gaming Marketplaces",
      "Player-Owned Economies"
    ]
  },
  {
    name: "Real Estate",
    icon: "/icons/realestate.svg",
    description: "Introduce transparency and liquidity in real estate by tokenizing property assets, enabling fractional ownership, and streamlining property sales.",
    solutions: [
      "Real Estate Tokenization",
      "Fractional Ownership Platforms",
      "Property NFT Marketplaces",
      "Smart Contract-Based Transactions"
    ]
  },
  {
    name: "Music & Media",
    icon: "/icons/music.svg",
    description: "Empower artists by tokenizing music and media content, ensuring secure royalty distribution, and fostering direct engagement with fans.",
    solutions: [
      "Music NFT Platforms",
      "Royalty Distribution Systems",
      "Fan Engagement Portals",
      "Content Ownership Verification"
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
            Transforming Industries with NFT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We design innovative NFT solutions tailored to revolutionize digital asset management across various industries.
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
