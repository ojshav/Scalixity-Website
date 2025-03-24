"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Innovate with Hedra Technology
            </h1>
            <p className="text-xl text-black/80 mb-8">
              Unlock the full potential of Hedra&apos;s cutting-edge decentralized ledger technology. Our solutions empower businesses by providing secure, transparent, and highly scalable digital ecosystems. We streamline your digital transformation journey by fostering trust-driven networks, enhancing operational efficiency, and delivering next-generation technology integration.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-900 transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
