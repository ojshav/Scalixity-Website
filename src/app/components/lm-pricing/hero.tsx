
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] py-24 text-center">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-black mb-6"
        >
          LLM API Pricing Calculator
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black/80 max-w-3xl mx-auto mb-8"
        >
          Instantly estimate the costs of using Large Language Model APIs. Get transparent, real-time calculations tailored to your usage.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
         
         <Link href="/contact" className="border border-black text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
