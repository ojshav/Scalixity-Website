"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Label } from "@/src/app/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@scalixity.co.uk",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+44 (0) 20 1234 5678",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "London, United Kingdom",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact-form" className="py-16 sm:py-20 lg:py-24 xl:py-32" style={{ backgroundColor: "#FFFFFF" }}>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Playfair Display, serif' }}>
              Book Your Free Strategy Call
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to transform your business? Let&apos;s discuss your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Send us a message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                        style={{ height: '60px' }}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                        style={{ height: '60px' }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                      style={{ height: '60px' }}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-700 font-medium mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Ltd"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
                      style={{ height: '60px' }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-700 font-medium mb-2 block">
                      Service Interested In
                    </Label>
                    <select
                      id="service"
                      className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white text-lg"
                      style={{ height: '60px' }}
                    >
                      <option value="">Select a service</option>
                      <option value="crm">CRM & Automation</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="gps">GPS Tracking</option>
                      <option value="ai">AI Development</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="callDate" className="text-gray-700 font-medium mb-2 block">
                      Preferred Date for Call
                    </Label>
                    <Input
                      id="callDate"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-12 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 cursor-pointer text-xl"
                      style={{ minWidth: '400px', height: '60px' }}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none text-lg"
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
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
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
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                      whileHover={{ 
                        y: -4,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {info.title}
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {info.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-2xl p-6 border border-amber-200"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h4 className="text-xl font-bold text-amber-600 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Why Choose Scalixity?
                  </h4>
                  <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      UK-registered company with local expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      Transparent GBP pricing, no hidden fees
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
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
