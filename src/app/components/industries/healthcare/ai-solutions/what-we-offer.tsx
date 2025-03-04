"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Predictive Analytics for Patient Care",
    description: "Harness AI to predict patient deterioration, optimize treatment plans, and enhance clinical decision-making through data-driven insights."
  },
  {
    title: "AI-Powered Virtual Health Assistants",
    description: "Develop intelligent chatbots and virtual agents that provide instant medical advice, schedule appointments, and streamline patient interactions."
  },
  {
    title: "Medical Image Analysis",
    description: "Utilize AI algorithms to detect anomalies in medical images, assisting radiologists and doctors in accurate and timely diagnoses."
  },
  {
    title: "Drug Discovery & Development",
    description: "Accelerate drug research by leveraging AI to identify potential compounds, predict their effectiveness, and reduce time-to-market."
  },
  {
    title: "Personalized Treatment Recommendations",
    description: "Implement AI models to tailor treatment plans based on individual patient data, ensuring targeted and effective therapies."
  },
  {
    title: "Healthcare Data Security & Compliance",
    description: "Ensure patient data privacy with AI-driven security solutions that comply with healthcare regulations like HIPAA and GDPR."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Healthcare AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your healthcare practice with cutting-edge AI solutions, revolutionizing patient care, medical research, and operational efficiency.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
