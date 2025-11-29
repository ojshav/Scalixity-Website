"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Computer Vision Consulting",
    description: "We provide expert guidance on implementing AI-driven computer vision solutions tailored to your business needs."
  },
  {
    title: "Image & Video Processing",
    description: "Develop advanced image and video analysis applications using AI to enhance automation and decision-making."
  },
  {
    title: "Object Detection & Recognition",
    description: "Leverage deep learning models to detect, classify, and recognize objects in real-time with high accuracy."
  },
  {
    title: "Facial Recognition & Biometrics",
    description: "Implement secure and scalable facial recognition solutions for identity verification and security applications."
  },
  {
    title: "Optical Character Recognition (OCR)",
    description: "Transform printed or handwritten text into digital formats with AI-powered OCR technology for data extraction."
  },
  {
    title: "Industrial & Medical Vision Systems",
    description: "Deploy AI-driven computer vision solutions for quality control, defect detection, and medical imaging analysis."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Computer Vision Development Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We specialize in AI-powered computer vision solutions that enhance automation, security, and data analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
