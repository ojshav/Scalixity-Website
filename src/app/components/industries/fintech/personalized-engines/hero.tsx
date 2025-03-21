"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
          <h1 className="text-3xl md:text-5xl font-semibold text-black mb-8">
            Empower Your Future with Personalized Financial Engines
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Unlock tailored financial strategies using AI-powered insights. Optimize investments, manage savings, and achieve your financial goals with precision and personalization.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
