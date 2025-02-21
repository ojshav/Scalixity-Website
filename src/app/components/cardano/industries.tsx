"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'


const industries = [
  { name: "Finance", icon: "/icons/finance.svg" },
  { name: "Supply Chain", icon: "/icons/supply-chain.svg" },
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Real Estate", icon: "/icons/real-estate.svg" },
  { name: "Gaming", icon: "/icons/gaming.svg" },
  { name: "Identity Management", icon: "/icons/identity.svg" },
  { name: "NFT & Digital Art", icon: "/icons/nft.svg" },
  { name: "Education", icon: "/icons/education.svg" }
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Cardano App Development Across Key Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Cardano blockchain solutions cater to diverse industries, delivering secure, decentralized, and high-performance applications that drive innovation and efficiency.
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries;
