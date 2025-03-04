"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center text-white bg-[#9FA8DA] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl font-bold leading-tight">
          Elevate Your Business with <span className="text-black">Scalixity</span>
        </h1>
        <p className="mt-4 text-lg text-[#E3E5F5] max-w-3xl mx-auto">
          We craft bespoke, cutting-edge AI solutions that empower data-driven companies to achieve unparalleled innovation, optimize operations, and unlock new opportunities for growth and scalability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 flex space-x-4"
      >
        <a
          href="/contact"
          className="px-6 py-3 text-white bg-black rounded-full hover:opacity-80 transition"
        >
          Embark on Your AI Journey
        </a>
        <a
          href="/services"
          className="px-6 py-3 text-white bg-black rounded-full hover:opacity-80 transition"
        >
          Discover Our Royal Services
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;


