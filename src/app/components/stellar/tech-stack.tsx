"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = {
  "Stellar Smart Contract Development": [
    { name: "Soroban", logo: "/images/tech/soroban.svg" }
  ],
  "Blockchain Frameworks": [
    { name: "Stellar Core", logo: "/images/tech/stellar-core.webp" },
    { name: "Stellar SDK", logo: "/images/tech/stellar-sdk.webp" }
  ],
  "Decentralized Application (DApp) Development": [
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" },
    { name: "Python", logo: "/images/tech/python.svg" }
  ],
  "Wallet & API Integrations": [
    { name: "Stellar Horizon API", logo: "/images/tech/horizon-api.webp" },
    { name: "Stellar Wallet SDK", logo: "/images/tech/stellar-wallet.svg" }
  ]
}

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">STELLAR TECH STACK</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Our Stellar Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage the most advanced Stellar technologies to build secure, scalable, and high-performance blockchain applications.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
