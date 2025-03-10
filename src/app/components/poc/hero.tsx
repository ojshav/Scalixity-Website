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
          AI POC Development Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black/80 max-w-3xl mx-auto mb-8"
        >
          Transform innovative AI concepts into actionable Proof of Concepts (POCs). Test, validate, and scale AI solutions tailored to your business goals with Scalixity.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition">
            Get Started
          </Link>
          <Link href="/portfolio" className="border border-black text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
