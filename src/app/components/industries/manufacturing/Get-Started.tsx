"use client";

import { motion } from 'framer-motion';

export function GetStarted() {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-32 text-center">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-bounce"
        >
          Let's Kickstart Your AI-Powered Manufacturing Journey! 
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
        >
          Step into the future of manufacturing, where artificial intelligence drives innovation. Say goodbye to inefficiencies and manual bottlenecks — and welcome a world of data-driven production lines, predictive maintenance, and optimized supply chains. Embrace AI to minimize downtime, enhance product quality, and streamline operations. Together, let's redefine manufacturing excellence — making your processes smarter, faster, and more cost-effective.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110"
          >
             Get Started Now
          </motion.button>
          <motion.button 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent border-4 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-110"
          >
            🔧 Discover More
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
