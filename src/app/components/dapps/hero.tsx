"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
            Decentralized Applications (dApps) Development
          </h1>
          <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto">
            We specialize in building secure, scalable, and efficient decentralized applications (dApps) on blockchain networks. Our services encompass the entire development lifecycle, from ideation and smart contract creation to front-end development and blockchain integration. By leveraging cutting-edge technologies and best practices, we ensure seamless deployment, optimal performance, and robust security. Whether you&apos;re launching a DeFi platform, NFT marketplace, or enterprise blockchain solution, our team is dedicated to delivering innovative and future-ready solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;
