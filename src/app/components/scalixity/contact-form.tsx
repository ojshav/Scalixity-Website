"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Label } from "@/src/app/components/ui/label";


export default function ContactForm() {
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



  return (
    <section id="contact-form" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[#F3F1EB]">
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
            <p className="text-sm sm:text-base text-black font-medium mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Free Strategy Call
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
              Book Your Free Strategy Call
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to transform your business? Let&apos;s discuss your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send us a message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-white"
                    style={{ height: '60px' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-white"
                    style={{ height: '60px' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                    Phone number
                  </Label>
                  <div className="flex gap-2">
                                          <select className="px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-white" style={{ height: '60px', width: '100px', backgroundColor: 'white !important', color: 'black' }}>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                      </select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="flex-1 px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-white"
                      style={{ height: '60px' }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="services" className="text-gray-700 font-medium mb-2 block">
                    Services Interested in
                  </Label>
                                      <select
                      id="services"
                      className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-white"
                      style={{ height: '60px', backgroundColor: 'white !important', color: 'black' }}
                    >
                    <option value="">Select a service or type your own</option>
                    <option value="crm">CRM & Automation</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="gps">GPS Tracking</option>
                    <option value="ai">AI Development</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other (type below)</option>
                  </select>
                  <Input
                    id="servicesCustom"
                    type="text"
                    placeholder="Or type your specific service here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-base mt-2 bg-white"
                    style={{ height: '50px' }}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    How can we help? *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us a little about the project..."
                    rows={4}
                    className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none text-lg bg-white"
                    style={{ height: '120px' }}
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-[#A8B2E7] hover:bg-[#9BA5D9] text-white py-3 px-8 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Let&apos;s start a conversation
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Whether you&apos;re a startup looking to scale or an established business seeking digital transformation, 
                    we&apos;re here to help. Our UK-based team provides local expertise with global reach.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-[#A8B2E7] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Email
                    </h4>
                    <p className="text-black text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      hello@scalixity.co.uk
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-[#A8B2E7] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Visit Us
                    </h4>
                    <p className="text-black text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      London, United Kingdom
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-[#A8B2E7] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Call Us
                    </h4>
                    <p className="text-black text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      +44 (0) 20 1234 5678
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <motion.div
                  className="bg-[#F3F1EB] rounded-2xl p-6"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h4 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Why Choose Scalixity?
                  </h4>
                  <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-600 font-bold">&gt;</span>
                      UK-registered company with local expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-600 font-bold">&gt;</span>
                      Transparent GBP pricing, no hidden fees
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-600 font-bold">&gt;</span>
                      24/7 support and dedicated account management
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
