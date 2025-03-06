"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "24/7 Virtual Health Assistants",
    description: "Deploy AI-powered agents to provide instant medical advice, appointment scheduling, and patient support — anytime, anywhere."
  },
  {
    title: "Symptom Checkers & Diagnostics",
    description: "AI agents equipped with symptom-checking algorithms help patients understand their health concerns and guide them towards the right care."
  },
  {
    title: "Personalized Patient Engagement",
    description: "Enable AI agents to deliver personalized health tips, medication reminders, and lifestyle recommendations based on patient data."
  },
  {
    title: "Clinical Workflow Automation",
    description: "Streamline hospital operations by using AI agents to handle patient intake, data entry, and follow-up processes efficiently."
  },
  {
    title: "Real-time Health Monitoring",
    description: "Integrate AI agents with wearable devices to monitor vital signs, detect anomalies, and alert healthcare providers instantly."
  },
  {
    title: "Medical Data Analysis & Insights",
    description: "Leverage AI agents to analyze complex medical data, assisting doctors with diagnosis, treatment planning, and predictive analytics."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI Agent Solutions for Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform patient care and hospital efficiency with AI-driven virtual agents. From diagnostics to real-time health monitoring, empower your healthcare practice with smart automation.
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
