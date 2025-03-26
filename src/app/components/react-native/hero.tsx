"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Build Cross-Platform Apps with React Native
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-800 max-w-3xl mx-auto mb-8"
        >
          Leverage the power of React Native to create high-performance, cross-platform mobile apps. Scalixity delivers seamless user experiences for both iOS and Android.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
