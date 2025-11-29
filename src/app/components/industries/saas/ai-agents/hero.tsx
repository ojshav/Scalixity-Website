"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#FFF2D5] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Empower SaaS with AI-Powered Agents
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Unlock the potential of AI-driven SaaS solutions to automate workflows, enhance customer interactions, and optimize operations with intelligent agents.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <button className="px-8 py-3 text-lg font-medium bg-[#590178] text-white rounded-lg  transition-all">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
