"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF2D5] py-20"> {/* Beige background */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6"> {/* Black text */}
            AI Engineers Development Services
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto"> {/* Darker gray text */}
            Unlock the full potential of artificial intelligence with our AI engineering solutions. Our expert AI engineers design, build, and deploy custom AI models and intelligent systems tailored to your business needs. From developing machine learning algorithms to integrating AI into your existing infrastructure, we empower your organization with cutting-edge technology. Let us transform your data into actionable insights and automation, driving innovation and efficiency.
          </p>

          {/* Clickable Contact Us Button */}
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
      
    </section>
  )
}

export default Hero;
