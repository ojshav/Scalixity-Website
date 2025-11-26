'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Phone, Mail, MapPin, Twitter, MessageCircle } from 'lucide-react'
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import CoreValue from "@/src/app/components/About-us/corevalue"
import { CTA } from '../components/cta'
import { InlineWidget } from "react-calendly";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: { target: { name: string; value: number | string | boolean } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      await response.json(); // Process response without assigning to unused variable
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-[#FFF2D5] font-poppins">
      <div className="container mx-auto px-4 py-20">
        {/* top content */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-poppins text-black mb-8 md:mb-0"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#590178] text-lg md:text-xl max-w-md font-poppins leading-relaxed"
          >
            At Scalixity, we deliver cutting-edge digital solutions tailored to your business needs. From web applications to AI-powered chatbots, we&apos;ve got you covered.
          </motion.p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-4 mt-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Panel - 40% - Contact Information */}
            <motion.div
              className="lg:w-[40%] bg-[#590178] rounded-xl p-8 md:p-12 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-poppins">Contact Information</h2>
              <p className="text-white/90 text-sm md:text-base mb-8 font-poppins">Say something to start a live chat!</p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">+1012 3456 789</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">demo@gmail.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </div>
              </div>

              {/* Calendar Widget */}
              <div 
                className="bg-white rounded-lg overflow-auto mb-8 h-[400px]"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth',
                  overscrollBehavior: 'contain'
                }}
              >
                <InlineWidget
                  url="https://calendly.com/awasthirishabh56/30min"
                  styles={{
                    height: "100%",
                    width: "100%",
                    minHeight: "400px"
                  }}
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Right Panel - 60% - Contact Form */}
            <motion.div
              className="lg:w-[60%] bg-white py-8 pr-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center text-green-700 font-poppins">
                  <Check className="h-8 w-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Thank you for contacting us!</h3>
                    <p>We&apos;ve received your message and will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two Column Layout for First Name/Last Name */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2 hover:text-[#590178] decoration-[#590178]  transition-colors font-poppins">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.name.split(' ')[0] || ''}
                        onChange={(e) => {
                          const lastName = formData.name.split(' ').slice(1).join(' ') || '';
                          setFormData({ ...formData, name: `${e.target.value} ${lastName}`.trim() });
                        }}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2 hover:text-[#590178]  decoration-[#590178]  transition-colors font-poppins">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.name.split(' ').slice(1).join(' ') || ''}
                        onChange={(e) => {
                          const firstName = formData.name.split(' ')[0] || '';
                          const lastName = e.target.value;
                          setFormData({ ...formData, name: lastName ? `${firstName} ${lastName}`.trim() : firstName });
                        }}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Two Column Layout for Email/Phone */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 font-poppins">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2 font-poppins">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Subject Selection - Horizontal Layout */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 font-poppins">
                      Select Subject?
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[0, 1, 2, 3].map((index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="subject"
                            value="General Inquiry"
                            defaultChecked={index === 0}
                            className="w-5 h-5 text-[#590178] border-gray-300 focus:ring-[#590178] focus:ring-2 accent-[#590178]"
                          />
                          <span className="text-sm text-gray-700 font-poppins">General Inquiry</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2 font-poppins">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={1}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent resize-none rounded-none shadow-none overflow-y-auto max-h-[8rem] transition-colors font-poppins"
                      placeholder="Write your message.."
                      required
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#590178] text-white rounded-lg font-medium hover:bg-[#4a0166] transition-colors focus:outline-none focus:ring-2 focus:ring-[#590178] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <CoreValue />
      <CTA />
    </div>
  )
}