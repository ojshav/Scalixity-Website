"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance", icon: "/icons/finance.svg" },
  { name: "E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Education", icon: "/icons/education.svg" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg" },
  { name: "Retail", icon: "/icons/retail.svg" },
  { name: "Technology", icon: "/icons/technology.svg" },
  { name: "Energy", icon: "/icons/energy.svg" }
]

export function IndustriesAWS() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            AWS Solutions Tailored for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AWS cloud expertise spans multiple industries, providing specialized solutions to optimize operations, enhance security, and drive innovation.
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
