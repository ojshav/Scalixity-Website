'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CompetitionCTA() {
  return (
         <div className="w-full py-8 md:py-12" style={{ backgroundColor: '#fefcfd' }}>
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
                     {/* Left Section - Text Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-6"
           >
            {/* Top Badge */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full">
                Join 500+ Global Designers
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Showcase Your
              <span className="block text-amber-600">Design Excellence?</span>
              <span className="block text-amber-600">Submit Now!</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Don&rsquo;t miss your chance to compete with the world&rsquo;s best designers. Submit your innovative UI/UX solution and stand a chance to win amazing prizes, career opportunities, and global recognition.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Full-time Designer Role</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Substantial Prize Money</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Global Recognition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Mentorship Opportunities</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-6"
            >
              <Link href="/contact">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Contact Us to Register
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Single Prominent Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden xl:block"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px]">
              <Image
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1753700324/YouTube_Banner_-_Global_Figma_Design_Challenge_sp0jf6.svg"
                alt="UI/UX Design Competition"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 