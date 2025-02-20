"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function EnterpriseAppDevelopmentHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise App Development Services
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Build scalable, secure, and high-performance enterprise applications tailored to your business needs. Our team ensures seamless integration, top-tier security, and an exceptional user experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
          <div className="relative flex justify-center">
            <img
              src="/enterprise-app-development.png"
              alt="Enterprise App Development"
              className="w-full max-w-[500px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAppDevelopmentHero;
