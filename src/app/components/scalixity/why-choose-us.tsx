"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Building2, PoundSterling, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function WhyChooseUs() {
  const { openPopup } = usePopup();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: Building2,
      title: "UK-Registered Company",
      description: "Fully compliant with UK regulations and business standards",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PoundSterling,
      title: "Local GBP Pricing",
      description: "No currency conversion fees, transparent pricing in British Pounds",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Scalable for Startups & SMEs",
      description: "Solutions that grow with your business, from startup to enterprise",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need us",
      color: "from-amber-500 to-amber-600"
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
            Why Partner with Scalixity
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              UK-focused technology solutions designed for British businesses
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Icon Container */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-6"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional UK Focus Message */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-20 lg:mt-24 text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-amber-200"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Built for the UK Market
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                We understand the unique challenges and opportunities facing UK businesses. Our solutions are tailored to meet local regulations, 
                business practices, and market demands, ensuring you get technology that works seamlessly in the British business environment.
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
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  onClick={openPopup}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Start Your UK Journey
                </Button>
                
                <Button 
                  asChild
                  className="bg-[#FFC145] hover:bg-[#FFB833] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <a href="https://scalixity.com/blog/future-of-generative-ai">Explore more</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
