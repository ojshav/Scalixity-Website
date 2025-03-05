"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#080B16] text-white py-24 relative overflow-hidden">
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
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Unlock the full potential of the digital universe with our cutting-edge metaverse development solutions. We specialize in creating immersive, decentralized, and interactive virtual experiences powered by blockchain and AI.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/80 transition">
            Get Started
          </Link>
          <Link href="/portfolio" className="border border-primary text-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/20 transition">
            View Our Work
          </Link>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] opacity-50"
      >
        <Image 
          src="/metaverse-illustration.png" 
          alt="Metaverse Illustration" 
          width={800} 
          height={400} 
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
