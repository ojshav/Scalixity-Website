"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20"> {/* Soft beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            Expert Midjourney Developers
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Dark gray text */}
            Unlock the full potential of AI-driven creativity with our Midjourney
            development services. Whether it&apos;s generating hyper-realistic visuals,
            designing unique AI-generated artwork, or integrating Midjourney into your
            creative workflows, we deliver solutions that bring ideas to life with unmatched
            precision and detail.
          </p>

          {/* Clickable Contact Button - Same as your format */}
          <div className="relative z-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white text-lg font-semibold hover:bg-gray-800 transition"
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
