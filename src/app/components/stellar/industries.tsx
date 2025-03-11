"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  { name: "Finance", icon: "/images/icons/finance.svg" },
  { name: "Cross-Border Payments", icon: "/images/icons/transportation.svg" },
  { name: "Remittances", icon: "/images/icons/fintech.svg" },
  { name: "Tokenization", icon: "/images/icons/data-security.svg" },
  { name: "Micropayments", icon: "/images/icons/saas.svg" },
  { name: "DeFi Solutions", icon: "/images/icons/insurance.svg" },
  { name: "Asset Management", icon: "/images/icons/fintech.svg" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" }
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Stellar App Development Across Key Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Stellar blockchain solutions empower industries with fast, secure, and cost-effective financial applications, enhancing accessibility and efficiency.
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
