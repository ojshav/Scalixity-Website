"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: "#F3F1EB" }} // Soft Warm Beige Background
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#000000" }}>
            Expert Midjourney Developers
          </h1>
          <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: "#000000" }}>
            Unlock the full potential of AI-driven creativity with our Midjourney
            development services. Whether it&apos;s generating hyper-realistic visuals,
            designing unique AI-generated artwork, or integrating Midjourney into your
            creative workflows, we deliver solutions that bring ideas to life with unmatched
            precision and detail.
          </p>
          
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  );
}

export default Hero;

