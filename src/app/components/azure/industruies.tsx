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

export function Industries() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Azure Solutions Tailored for Every Industry
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Microsoft Azure delivers scalable, secure, and intelligent cloud solutions, empowering businesses across industries to drive digital transformation and operational excellence.
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
              <div 
                className="p-6 rounded-full mb-4 border-2 border-black" 
                style={{ backgroundColor: '#F3F1EB' }}
              >
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
