"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#5b0bb5] to-[#a57be0] text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Build Powerful iOS Apps with Cutting-Edge Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
        >
          Elevate your business with high-performance, user-centric iOS applications. We blend creativity and technology to deliver seamless mobile experiences.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link href="/contact" className="bg-[#22c55e] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#16a34a] transition">
            Get Started
          </Link>
          <Link href="/portfolio" className="border border-[#22c55e] text-[#22c55e] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#22c55e]/20 transition">
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
          src="/ios-illustration.png" 
          alt="iOS Development Illustration" 
          width={800} 
          height={400} 
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
