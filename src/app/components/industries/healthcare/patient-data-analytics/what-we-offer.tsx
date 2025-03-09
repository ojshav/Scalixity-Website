"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Real-time Patient Data Monitoring",
    description: "Track patient vitals and health data in real-time, providing healthcare providers with instant insights for timely interventions."
  },
  {
    title: "Predictive Health Analytics",
    description: "Use AI models to forecast disease progression, readmission risks, and potential health issues based on historical and real-time data."
  },
  {
    title: "Personalized Treatment Insights",
    description: "Analyze patient data to create tailored treatment plans, aligning therapies with individual health profiles for optimal outcomes."
  },
  {
    title: "Medical Data Visualization",
    description: "Transform complex medical data into interactive dashboards, helping doctors and administrators make data-driven decisions quickly."
  },
  {
    title: "Anomaly Detection in Patient Records",
    description: "Identify inconsistencies, errors, or abnormal patterns in patient data to prevent medical fraud, misdiagnoses, and data breaches."
  },
  {
    title: "Automated Reporting & Compliance",
    description: "Generate accurate, real-time reports for regulatory compliance and internal audits, streamlining hospital workflows."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI-Powered Patient Data Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unleash the power of AI to unlock critical insights from patient data. From predictive analytics to real-time monitoring, drive better clinical decisions and enhance patient care.
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
