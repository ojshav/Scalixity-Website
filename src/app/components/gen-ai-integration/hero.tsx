"use client"
import { motion } from "framer-motion";
import Link from "next/link"; // Ensure this import is present

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Generative AI Integration Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We help businesses with Generative AI integration services, deploying advanced Gen AI applications into existing operational patterns. This approach lays a clear path towards streamlined processes, fuels the ignition of breakthrough concepts, and optimizes operational efficiency, all while drawing from the boundless potential that Generative AI holds.
          </p>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors z-10 relative"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
      {/* Ensure this background element doesn't interfere with the button */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0" />
    </section>
  );
}

export default Hero;
