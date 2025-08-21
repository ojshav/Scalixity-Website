"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ClientTestimonials() {
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechFlow Solutions Ltd",
      location: "London, UK",
      role: "CEO",
      content: "Scalixity transformed our business operations with their AI-powered CRM solution. The local UK support and GBP pricing made everything seamless.",
      rating: 5,
      avatar: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753994862/client_avatar_1_uk_scalixity.jpg"
    },
    {
      name: "Rajesh Patel",
      company: "Global Innovations Inc",
      location: "Mumbai, India",
      role: "CTO",
      content: "Working with Scalixity has been exceptional. Their e-commerce platform helped us scale internationally while maintaining local compliance.",
      rating: 5,
      avatar: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753994862/client_avatar_2_uk_scalixity.jpg"
    },
    {
      name: "Emma Thompson",
      company: "Green Logistics Co",
      location: "Manchester, UK",
      role: "Operations Director",
      content: "The GPS tracking solution from Scalixity revolutionized our fleet management. 24/7 support and local expertise made all the difference.",
      rating: 5,
      avatar: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753994862/client_avatar_3_uk_scalixity.jpg"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 xl:py-28 bg-[#A8B2E7]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Scalixity Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trusted by businesses across the UK and internationally
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="group"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Top-Left Colored Quote Icon */}
                  <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#C47BD1]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  {/* Client Info - Top Right */}
                  <div className="ml-12 sm:ml-16 mb-2 sm:mb-3">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-3 sm:mb-4 gap-1 sm:gap-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i}>
                        <Star className="w-5 h-5 sm:w-7 sm:h-7 text-amber-500 fill-current" />
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Bottom-Right Faded Quote Icon */}
                  <motion.div
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-gray-300 opacity-40"
                    whileHover={{ scale: 1.1, opacity: 0.6 }}
                  >
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16 sm:mt-24 lg:mt-32 xl:mt-48"
          >
            <Button 
              onClick={openPopup}
              className="w-full sm:w-auto bg-[#A8B2E7] hover:bg-[#A8B2E7] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
            >
           Join Our Success Stories
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
