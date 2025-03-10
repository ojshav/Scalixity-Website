"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
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
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Get Started
          </Link>
          <Link href="/portfolio" className="border border-black text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            View Portfolio
          </Link>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] opacity-80"
      >
        <Image 
          src="/react-native-illustration.png" 
          alt="React Native App Development" 
          width={800} 
          height={400} 
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
