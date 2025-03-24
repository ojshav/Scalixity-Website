"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Importing Link from Next.js

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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Hire Prompt Engineers
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Hire prompt engineers to assist you in constructing AI models using
            cutting-edge technologies such as Midjourney, DALL-E, Stable
            Diffusion, and OpenAI. Our team of dedicated prompt engineers boasts
            extensive experience in fine-tuning and customizing prompts,
            enabling you to efficiently deploy generative models.
          </p>

          {/* Contact Button */}
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
    </section>
  );
}

export default Hero;
