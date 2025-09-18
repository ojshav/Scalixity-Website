"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CampaignHero() {
  return (
    <section 
      className="w-full flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 min-h-screen"
      style={{
        backgroundColor: "#fefcfd"
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] lg:min-h-screen">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-amber-600 block mb-2">Join Scalixity&rsquo;s</span>
              <span className="text-gray-900 block">Innovation Challenges</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Compete with the best minds, showcase your skills, and
              win exciting prizes in our cutting-edge AI and technology competitions.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to make your mark?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link href="/campaign/ui-ux">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Explore Campaigns
                  </motion.button>
                </Link>
                <Link href="/campaign/ui-ux">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-100 text-amber-700 hover:bg-amber-200 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-full w-full order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1753955746/hero_section_-_2_xvsxkz.png"
                alt="Scalixity Campaign Hero"
                className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 