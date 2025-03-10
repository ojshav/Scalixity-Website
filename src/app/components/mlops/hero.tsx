"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-24 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Accelerate AI Deployments with Expert MLOps Consulting
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Streamline your AI workflows with Scalixity's MLOps solutions — integrating model training, deployment, and monitoring for continuous innovation.
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
          <Link href="/services" className="border border-black text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
