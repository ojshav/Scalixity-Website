'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, Phone, Mail, MapPin, Twitter, Instagram, Linkedin, X } from 'lucide-react'
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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState('General Inquiry')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    document.body.style.overflow = isCalendarOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCalendarOpen])

  // Reset textarea height when form is submitted
  useEffect(() => {
    if (isSubmitted && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [isSubmitted])

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleInputChange = (e: { target: { name: string; value: number | string | boolean } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Auto-resize textarea for message field
    if (name === 'message') {
      autoResizeTextarea()
    }
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* top content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-black mb-4 sm:mb-6 md:mb-0"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#590178] text-base sm:text-lg md:text-xl max-w-full md:max-w-md font-poppins leading-relaxed"
          >
            At Scalixity, we deliver cutting-edge digital solutions tailored to your business needs. From web applications to AI-powered chatbots, we&apos;ve got you covered.
          </motion.p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-4 mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            {/* Left Panel - 40% - Contact Information */}
            <motion.div
              className="w-full lg:w-[40%] bg-[#590178] rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-poppins">Contact Information</h2>
              <p className="text-white/90 text-sm md:text-base mb-6 sm:mb-8 font-poppins">Say something to start a live chat!</p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">+91 9424710030</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base break-all">info@scalixity.com</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-1 flex-shrink-0" />
                    <span className="text-white text-sm md:text-base">
                      66, House, Lashkar, Block A<br />
                      Sindhi Colony<br />
                      Gwalior, Madhya Pradesh<br />
                      474001, India
                    </span>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-1 flex-shrink-0" />
                    <span className="text-white text-sm md:text-base">
                      71-75 Shelton Street<br />
                      Covent Garden<br />
                      London<br />
                      WC2H 9JQ<br />
                      United Kingdom
                    </span>
                  </div>
                </div>
              </div>

              {/* Calendar Widget */}
              <div className="bg-white rounded-lg mb-6 sm:mb-8 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#590178] uppercase tracking-wide font-poppins">Book a Call</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-poppins mt-1">Schedule a 30 min chat</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 font-poppins">
                    Pick a time that works for you and we&apos;ll meet over a quick video call.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(true)}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#590178] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#4a0166] transition-colors focus:outline-none focus:ring-2 focus:ring-[#590178] focus:ring-offset-2 font-poppins"
                >
                  Open Calendar
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 sm:gap-4 mt-auto pt-4">
                <a href="https://twitter.com/scalixity" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
                <a href="https://www.instagram.com/scalixity?igsh=MTZjYTh4eWE1YTlyZA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
                <a href="https://linkedin.com/company/Scalixity" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Right Panel - 60% - Contact Form */}
            <motion.div
              className="w-full lg:w-[60%] bg-white py-4 sm:py-6 md:py-8 pr-0 lg:pr-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center text-green-700 font-poppins">
                  <Check className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-0 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">Thank you for contacting us!</h3>
                    <p className="text-sm sm:text-base">We&apos;ve received your message and will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Two Column Layout for First Name/Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1.5 sm:mb-2 hover:text-[#590178] decoration-[#590178]  transition-colors font-poppins">
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
                        className="w-full px-0 py-1.5 sm:py-2 text-sm sm:text-base border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1.5 sm:mb-2 hover:text-[#590178]  decoration-[#590178]  transition-colors font-poppins">
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
                        className="w-full px-0 py-1.5 sm:py-2 text-sm sm:text-base border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Two Column Layout for Email/Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1.5 sm:mb-2 font-poppins">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-0 py-1.5 sm:py-2 text-sm sm:text-base border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1.5 sm:mb-2 font-poppins">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-0 py-1.5 sm:py-2 text-sm sm:text-base border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent rounded-none shadow-none transition-colors font-poppins"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Subject Selection - Horizontal Layout */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3 font-poppins">
                      Select Subject?
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {[
                        { value: "General Inquiry", label: "General Inquiry" },
                        { value: "Service Inquiry", label: "Service Inquiry" },
                        { value: "Pricing Inquiry", label: "Pricing Inquiry" },
                        { value: "Feedback", label: "Feedback" }
                      ].map((subject) => (
                        <button
                          key={subject.value}
                          type="button"
                          onClick={() => setSelectedSubject(subject.value)}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 font-poppins ${
                            selectedSubject === subject.value
                              ? 'bg-[#590178] text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {subject.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1.5 sm:mb-2 font-poppins">
                      Message
                    </label>
                    <textarea
                      ref={textareaRef}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={1}
                      data-lenis-prevent
                      className="w-full px-0 py-1.5 sm:py-2 text-sm sm:text-base border-0 border-b-2 border-gray-300 hover:border-[#590178] focus:outline-none focus:ring-0 focus:border-[#590178] bg-transparent resize-none rounded-none shadow-none overflow-y-auto max-h-[8rem] transition-colors font-poppins"
                      placeholder="Write your message.."
                      required
                      onInput={autoResizeTextarea}
                    />
                  </div>

                  <div className="flex justify-end pt-2 sm:pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#590178] text-white rounded-lg font-medium hover:bg-[#4a0166] transition-colors focus:outline-none focus:ring-2 focus:ring-[#590178] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      {isCalendarOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl bg-white rounded-xl sm:rounded-2xl shadow-2xl relative h-[95vh] sm:h-[90vh] flex flex-col"
          >
            <button
              type="button"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition-colors z-10"
              onClick={() => setIsCalendarOpen(false)}
              aria-label="Close calendar"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>
            <div className="flex-1 mt-8 sm:mt-12 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 shadow-inner">
              <InlineWidget
                url="https://calendly.com/scalixitydevops/meet"
                styles={{
                  height: "100%",
                  width: "100%",
                  minHeight: "100%"
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
      <WhatWeOffer />
      <CoreValue />
      <CTA />
    </div>
  )
}