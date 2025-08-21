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
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute bottom-20 left-0 z-0"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755497997/e147818fb004d101c1420f0af7214c9d48b88cdc_njjxqf.png"
          alt="Wave Animation"
          className="w-full h-auto object-cover scale-y-[-1] scale-x-[-1]"
        />
      </motion.div>
      {/* Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        <div className="min-h-[60vh] lg:min-h-[80vh] mt-40">
          {/* Content Column - Left Side */}
          <motion.div
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.h1
              className="mb-1 leading-tight text-black"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '56px',
                lineHeight: '68px',
                letterSpacing: '0%'
              }}
              variants={itemVariants}
            >
              Affordable Tech Solutions, Built for UK Businesses
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-black mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              From AI & CRM to Custom tech solutions– we help you scale without overspending. Simple pricing. Local expertise. Big results.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-black mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              At Scalixity, we deliver end-to-end technology solutions that combine innovation, reliability, and market insight. Our expertise spans AI development, CRM automation, E-commerce platforms, GPS tracking systems, and bespoke software tailored to your business goals. 
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                onClick={openPopup}
                className="bg-[#A8B2E7] hover:bg-[#9BA5D9] text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Get in touch</span>
              </Button>
              
              <button 
                onClick={() => window.location.href = 'http://localhost:3000'}
                className="bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl cursor-pointer relative z-10"
              >
                Explore more
              </button>
            </motion.div>
          </motion.div>

          {/* Image - Right Side Position */}
          <motion.div
            className="absolute bottom-0 right-0"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755492148/d72df7f738f7fc142ff033c76437bf562f94ae48_ste57l.png"
                alt="Scalixity Tech Solutions"
                style={{ width: '908px', height: '635px' }}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}