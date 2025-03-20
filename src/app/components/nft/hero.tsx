"use client"
import { motion } from 'framer-motion';


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20"> {/* Soft, warm beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            NFT Marketplace Development
          </h1>
          <p className="text-xl text-black/80 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Darker gray text */}
            Launch and scale your NFT marketplace with our cutting-edge blockchain solutions. We provide secure, scalable, and feature-rich platforms to empower creators, collectors, and businesses in the digital asset ecosystem.
          </p>
          
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

export default Hero;
