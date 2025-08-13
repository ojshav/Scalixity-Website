"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import Link from "next/link";
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
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32" style={{ backgroundColor: "#fefcfd" }}>
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
              Client Testimonials
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trusted by businesses across the UK and internationally
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="group"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Top-Left Colored Quote Icon */}
                  <motion.div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 'bg-orange-500'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Client Info - Top Right */}
                  <div className="ml-16 mb-3">
                    <h4 className="font-bold text-gray-900 text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-sm text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    "{testimonial.content}"
                  </blockquote>

                  {/* Bottom-Right Faded Quote Icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-gray-300 opacity-40"
                    whileHover={{ scale: 1.1, opacity: 0.6 }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* International Clients Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-amber-200"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                International Clients
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                While we're based in the UK, our solutions serve businesses worldwide. From London to Mumbai, 
                we deliver technology that transcends borders while maintaining local compliance and support.
              </p>
              
                             {/* Client Logos Placeholder */}
               <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8">
                 <div className="text-gray-500 text-sm font-medium">UK Clients</div>
                 <div className="text-gray-400">•</div>
                 <div className="text-gray-500 text-sm font-medium">European Markets</div>
                 <div className="text-gray-400">•</div>
                 <div className="text-gray-500 text-sm font-medium">Asia Pacific</div>
                 <div className="text-gray-400">•</div>
                 <div className="text-gray-500 text-sm font-medium">North America</div>
               </div>

               {/* CTA Button */}
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
               >
                                <Button 
                 onClick={openPopup}
                 className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
               >
                 Join Our Success Stories
               </Button>
               </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
