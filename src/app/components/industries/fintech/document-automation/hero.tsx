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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Streamlined Financial Document Automation
          </h1>
          <p className="text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
            Empower your fintech operations with AI-driven financial document automation. Reduce manual errors, accelerate processing, and enhance compliance seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black opacity-10 animate-pulse"></div>
      </div>
    </section>
  );
}

export default Hero;
