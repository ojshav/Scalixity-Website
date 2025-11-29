"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#FFF2D5] text-black py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 tracking-tight"
        >
          <span className="font-black">Unlock Insights with AI-Driven Patient Data Analytics</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto mb-8"
        >
          Empower healthcare decisions with real-time AI analytics. Identify patterns, predict health risks, and personalize treatments — all while ensuring data security and operational efficiency. Drive smarter, data-driven patient care with cutting-edge AI technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact">
            <button className="px-8 py-3 text-lg font-bold bg-[#590178] text-white rounded-lg transition-all">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
