"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Importing Link from Next.js

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-medium text-black mb-6">
            AI Solutions for Retail Transformation
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Revolutionize your retail business with AI-driven solutions. From personalized shopping experiences to predictive analytics, we help you harness the power of AI to boost sales, optimize operations, and enhance customer satisfaction.
          </p>

          {/* Get Started Button */}
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;
