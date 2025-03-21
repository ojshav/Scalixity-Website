"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            AI Solutions for Healthcare
          </h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Revolutionize patient care and streamline operations with our cutting-edge AI solutions tailored for the healthcare industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-black/90 transition-colors"
          >
            Explore Healthcare AI Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
