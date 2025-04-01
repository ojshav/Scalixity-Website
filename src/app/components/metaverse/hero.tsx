"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl text-black font-bold mb-6"
        >
          Step into the Metaverse: Build, Explore, and Innovate
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-900 max-w-3xl mx-auto mb-8"
        >
          Unlock the full potential of the digital universe with our cutting-edge metaverse development solutions. We specialize in creating immersive, decentralized, and interactive virtual experiences powered by blockchain and AI.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:opacity-80 md:py-4 md:text-lg md:px-10">
            Get Started
          </Link>
          
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] opacity-50"
      >
        
      </motion.div>
    </section>
  );
}

export default Hero;
