"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-black mb-8"> 
            AI Solutions for Risk Assessment & Management
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Enhance your fintech strategies with AI-driven risk assessment and management solutions. Identify, analyze, and mitigate risks effectively using cutting-edge data analytics and predictive models.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#590178] text-white font-semibold rounded-lg  transition">
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
