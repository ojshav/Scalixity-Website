"use client"
import { motion } from 'framer-motion';
import Link from 'next/link'

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
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Enterprise Generative AI Development
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We help Enterprises utilize the potential of Generative AI to build intelligent systems capable of learning, adapting, and evolving. Our team of specialists focuses on providing state-of-the-art Enterprise generative AI development services that are customized to suit your individual business requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#590178] text-white font-medium text-lg transition-opacity"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;

