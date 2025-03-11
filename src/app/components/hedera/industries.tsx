"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Finance", icon: "/images/icons/finance.svg" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Education", icon: "/images/icons/education.svg" },
  { name: "Manufacturing", icon: "/images/icons/manufacturing.svg" },
  { name: "Retail", icon: "/images/icons/retail.svg" },
  { name: "Technology", icon: "/images/icons/automotive.svg" },
  { name: "Energy", icon: "/images/icons/energy.svg" }
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Industries with Hedra&apos;s Decentralized Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hedra&apos;s innovative decentralized ledger technology empowers diverse industries by offering secure, transparent, and scalable solutions. From healthcare to finance, we redefine how businesses operate, fostering trust and enhancing digital ecosystems. Partner with us to leverage Hedra&apos;s technology for seamless digital transformation.
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
