"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile App Design Services
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Craft seamless, engaging, and visually stunning mobile experiences.
            We design user-centric apps that drive growth and enhance customer interaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-transform transform hover:scale-105 w-full sm:w-auto"
            >
              Let’s Build Your App
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <Image src="/logos/app1.svg" alt="App 1" width={100} height={50} />
          <Image src="/logos/app2.svg" alt="App 2" width={100} height={50} />
          <Image src="/logos/app3.svg" alt="App 3" width={100} height={50} />
          <Image src="/logos/app4.svg" alt="App 4" width={100} height={50} />
        </div>
      </div>

      <div className="absolute bottom-10 text-center w-full">
        <p className="text-gray-400">50+ Apps Designed | 5M+ Downloads</p>
      </div>
    </section>
  );
}

export default Hero;

