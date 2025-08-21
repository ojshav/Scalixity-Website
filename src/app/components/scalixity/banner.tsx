"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxwspucxw/image/upload/v1755187046/Gemini_Generated_Image_bee7k7bee7k7bee7_aodknt.png')`,
          backgroundSize: '120% 120%',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="inline">AFFORDABLE TECH</span>
            <span className="block mt-2">SOLUTIONS</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
