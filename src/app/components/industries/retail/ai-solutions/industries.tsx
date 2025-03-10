"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const industries = [
  { name: "Personalized Shopping Experiences", icon: "/images/icons/marketing.svg" },
  { name: "Inventory & Stock Optimization", icon: "/images/icons/retail.svg" },
  { name: "Dynamic Pricing Strategies", icon: "/images/icons/marketing.svg" },
  { name: "Customer Support Automation", icon: "/images/icons/ecommerce.svg" },
  { name: "Fraud Detection & Prevention", icon: "/images/icons/legal.svg" },
  { name: "Supply Chain Efficiency", icon: "/images/icons/manufacturing.svg" }
]

export function Industries() {
  return (
    <section className="bg-[#F5EFE4] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI Solutions Transforming Retail Industries
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Leverage AI technologies to enhance customer experiences, streamline operations, and boost retail innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
            >
              {industry.icon ? (
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
              )}
              <h3 className="text-lg font-bold text-black mb-2">{industry.name}</h3>
              <p className="text-black/80 text-center">
                AI-powered solutions to optimize processes and drive innovation.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries;
