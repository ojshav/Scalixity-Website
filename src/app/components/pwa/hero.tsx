"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Supercharge Your Web Presence with PWA Development
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
        >
          Build lightning-fast, reliable, and offline-ready Progressive Web Apps (PWAs) to enhance user engagement and deliver a seamless experience across devices.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-[#9b5de5] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#7b3fbf] transition">
            Get Started
          </Link>
          <Link href="/portfolio" className="border border-[#9b5de5] text-[#9b5de5] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#9b5de5]/20 transition">
            View Portfolio
          </Link>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] opacity-70"
      >
        <Image 
          src="/pwa-illustration.png" 
          alt="PWA Illustration" 
          width={800} 
          height={400} 
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
}

export default Hero;