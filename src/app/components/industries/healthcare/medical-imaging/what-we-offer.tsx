"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Image Analysis",
    description: "Harness AI to automatically detect anomalies, tumors, and patterns in medical images with high accuracy."
  },
  {
    title: "Real-time Diagnostic Support",
    description: "Provide instant AI-assisted diagnostic suggestions to medical professionals, enhancing decision-making processes."
  },
  {
    title: "Predictive Analytics for Patient Outcomes",
    description: "Use AI models to forecast patient outcomes based on medical imaging data and historical records."
  },
  {
    title: "Medical Image Segmentation",
    description: "Employ advanced AI techniques like UNet and ResNet to segment organs, tumors, and other regions of interest."
  },
  {
    title: "Automated Reporting & Insights",
    description: "Generate comprehensive reports with AI-analyzed data, streamlining documentation and reducing human error."
  },
  {
    title: "Integration with Medical Databases",
    description: "Seamlessly connect AI models with existing medical databases (DICOM, PACS) for smooth data exchange and processing."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Solutions for Medical Imaging Intelligence
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform healthcare diagnostics with AI-driven solutions — from real-time image analysis to predictive insights and automated reporting.
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
              className="bg-white p-8 rounded-xl border border-white/20 hover:border-white/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{service.title}</h3>
              <p className="text-[#5B1DAF]/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
