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
          Build Powerful iOS Apps with Cutting-Edge Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black/70 max-w-3xl mx-auto mb-8"
        >
          Elevate your business with high-performance, user-centric iOS applications. We blend creativity and technology to deliver seamless mobile experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black/80 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
