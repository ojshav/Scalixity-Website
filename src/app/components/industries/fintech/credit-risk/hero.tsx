"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20"> {/* Beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            Credit Risk Management Solutions
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Darker gray text */}
            Safeguard your financial decisions with AI-powered credit risk management. Our solutions leverage advanced analytics and machine learning to assess risk, predict defaults, and optimize lending strategies. Empower your organization with real-time insights and data-driven decision-making.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
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
