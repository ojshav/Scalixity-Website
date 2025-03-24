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
          Step into the Metaverse: Build, Explore, and Innovate
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black max-w-3xl mx-auto mb-8"
        >
          Unlock the full potential of the digital universe with our cutting-edge metaverse development solutions. We specialize in creating immersive, decentralized, and interactive virtual experiences powered by blockchain and AI.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-transparent text-black border border-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
