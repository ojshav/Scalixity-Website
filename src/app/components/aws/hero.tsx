"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Cloud Development & Consulting
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Empower your business with expert AWS cloud solutions. From serverless architectures to scalable cloud infrastructure, we optimize your cloud development with best-in-class AWS practices.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#590178] text-white font-medium text-lg transition-colors"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
