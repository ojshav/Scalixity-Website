"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20"> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            Flutter App Development
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Darker gray text */}
            Transform your mobile presence with Flutter. Our cross-platform app development solutions ensure seamless performance, beautiful UI, and faster time-to-market. Leverage the power of Flutter to create feature-rich apps for both iOS and Android, with a single codebase.
          </p>

          {/* Clickable Contact Button */}
          <div className="relative z-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#590178] text-white text-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;
