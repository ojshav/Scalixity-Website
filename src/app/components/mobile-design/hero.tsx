"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Mobile App Design Services
          </h1>
          <p className="text-xl text-black/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Craft seamless, engaging, and visually stunning mobile experiences.
            We design user-centric apps that drive growth and enhance customer interaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-900 transition-transform transform hover:scale-105 w-full sm:w-auto"
            >
             Let&apos;s Build Your App
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
