"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionize Travel with AI-Powered Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Personalize experiences, optimize routes, and predict trends — harness the power of AI to elevate your travel business and create unforgettable customer journeys.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-500 text-white font-medium text-lg hover:bg-white hover:text-blue-900 transition-colors w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;
