"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import Link from "next/link";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ScalixityCTA() {
  const { openPopup } = usePopup();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  
  // Spring animations for smooth movement
  const springY1 = useSpring(y1, { stiffness: 80, damping: 25 });
  const springY2 = useSpring(y2, { stiffness: 60, damping: 20 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden" 
      style={{ backgroundColor: "#fefcfd" }}
    >
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: springY1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-amber-200 animate-pulse"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full opacity-20 blur-sm"
        animate={{
          y: [-5, 15, -5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-amber-400 rounded-full opacity-15 blur-sm"
        animate={{
          y: [15, -5, 15],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: springY2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,119,198,0.3),transparent_50%)]"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-amber-600 leading-tight relative"
              style={{ fontFamily: 'Playfair Display, serif' }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(217, 119, 6, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Ready to Scale Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-bold relative"
              style={{ fontFamily: 'Playfair Display, serif' }}
              whileHover={{ 
                scale: 1.01,
                color: "#d97706"
              }}
              transition={{ duration: 0.3 }}
            >
              Get affordable tech solutions that deliver real results. No overspending, just smart solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5,
                rotateY: 5
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <Button 
                onClick={openPopup}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Get Free Quote</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5,
                rotateY: -5
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <Link href="/services">
                <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">View Solutions</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Info with Enhanced Animation */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed relative"
              style={{ fontFamily: 'Playfair Display, serif' }}
              whileHover={{ 
                scale: 1.01,
                color: "#374151"
              }}
              transition={{ duration: 0.3 }}
            >
              Based in the UK, delivering affordable tech solutions that help businesses scale without overspending.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: springY2 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
