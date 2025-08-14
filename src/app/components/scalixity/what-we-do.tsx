"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Settings, ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import Link from "next/link";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function WhatWeDo() {
  const { openPopup } = usePopup();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const imageVariants = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const cards = [
    {
      title: "CRM & Automation",
      benefit: "Streamline your business processes with intelligent automation",
      benefit2: "Reduce manual tasks and increase productivity with AI-powered workflows",
      benefit3: "Get real-time insights and analytics to make data-driven decisions",
      icon: Settings,
      image: "https://res.cloudinary.com/dxwspucxw/video/upload/v1755077898/A_20video_20of_20the_20provided_20image_2C_20with_20the_20background_20being_20white_20and_20adaptable._wxqdfy.mp4",
      imageAlt: "CRM Automation Solutions"
    },
    {
      title: "E-commerce Solutions",
      benefit: "Build powerful online stores that convert visitors to customers",
      benefit2: "Optimize user experience with responsive design and fast loading",
      benefit3: "Integrate payment gateways and inventory management seamlessly",
      icon: ShoppingCart,
      image: "https://res.cloudinary.com/dxwspucxw/video/upload/v1755079686/A_20video_20of_20the_20provided_20image_2C_20with_20the_20background_20being_20white_20and_20adaptable.-2_dwmphw.mp4",
      imageAlt: "E-commerce Solutions"
    },
    {
      title: "Custom tech Solutions",
      benefit: "Tailored software development for your unique business needs",
      benefit2: "Scalable applications built with modern technologies and best practices",
      benefit3: "Ongoing support and maintenance to ensure long-term success",
      icon: MapPin,
      image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1755033636/Gemini_Generated_Image_1slmp31slmp31slm_ef34e4.png",
      imageAlt: "Custom Software Solutions"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Scalixity Offers
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive technology solutions designed for UK businesses
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <card.icon className="w-8 h-8 text-amber-600" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit}
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit2}
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {card.benefit3}
                    </p>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        y: 0
                      }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <Button 
                        asChild
                        className="bg-[#FFC145] hover:bg-[#FFB833] text-white px-6 py-2 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                      >
                        <Link href="/work">Explore more</Link>
                      </Button>
                      
                      <Button 
                        onClick={openPopup}
                        className="bg-black hover:bg-gray-800 text-white px-6 py-2 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                      >
                        Get in Touch
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <motion.div
                    className="relative"
                    variants={imageVariants}
                    animate="float"
                    whileHover={{ 
                      scale: 1.05,
                      z: 20,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <Link href="/work" className="block cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <motion.img
                          src={card.image}
                          alt={card.imageAlt}
                          className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover drop-shadow-2xl"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.4, ease: "easeOut" }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                        {/* Constant Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.3)] pointer-events-none"></div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
