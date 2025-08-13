"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { usePopup } from "@/src/app/hooks/use-popup";
import LottiePlayer from "@/src/app/components/ui/lottie-player";
import ExternalLottie from "@/src/app/components/ui/external-lottie";

// Sample Lottie animation data (you can replace this with actual JSON files)
const sampleAnimationData = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 180,
  "w": 400,
  "h": 400,
  "nm": "Sample Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Circle",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "d": 1,
              "ty": "el",
              "s": {"a": 0, "k": [100, 100]},
              "p": {"a": 0, "k": [0, 0]}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [1, 0.6, 0, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ]
    }
  ]
};

export function ScalixityHero() {
  const { openPopup } = usePopup();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Spring animations for smooth movement (can be used for enhanced effects)
  // const springY = useSpring(y, { stiffness: 100, damping: 30 });
  // const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  // const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
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
            src="https://res.cloudinary.com/dxwspucxw/video/upload/v1755062729/A_city_skyline_with_a_spinning_Ferris_wheel_animated_water_and_trees_swaying_in_the_breeze._goq2x2.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-1 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
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
          From AI & CRM to GPS tracking – we help you scale without overspending. Simple pricing. Local expertise. Big results.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          At Scalixity, we deliver end-to-end technology solutions that combine innovation, reliability, and market insight. Our expertise spans AI development, CRM automation, E-commerce platforms, GPS tracking systems, and bespoke software tailored to your business goals. 
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
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
