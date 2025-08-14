"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { usePopup } from "@/src/app/hooks/use-popup";

export function ScalixityHero() {
  const { openPopup } = usePopup();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source 
            src="https://res.cloudinary.com/dxwspucxw/video/upload/v1755086715/heropage-uk_scalixity_h8molw.mp4" 
            type="video/mp4" 
          />
           browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#FFC145' }}
          variants={itemVariants}
        >
          Affordable Tech Solutions,{" "}
          <span className="text-amber-600">Built for UK Businesses</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          From AI & CRM to Custom tech solutions– we help you scale without overspending. Simple pricing. Local expertise. Big results.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          At Scalixity, we deliver end-to-end technology solutions that combine innovation, reliability, and market insight. Our expertise spans AI development, CRM automation, E-commerce platforms, GPS tracking systems, and bespoke software tailored to your business goals. 
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={openPopup}
            className="bg-black hover:bg-gray-800 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Get in touch</span>
          </Button>
          
          <Button 
            asChild
            className="bg-[#FFC145] hover:bg-[#FFB833] text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
          >
            <a href="http://localhost:3000">Explore more</a>
          </Button>
        </motion.div>


      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
