"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Real-time Clinical Recommendations",
    description: "Provide AI-driven, evidence-based treatment suggestions and diagnostic support tailored to patient data and clinical guidelines."
  },
  {
    title: "Predictive Analytics for Patient Outcomes",
    description: "Utilize AI to forecast disease progression, identify at-risk patients, and recommend proactive interventions."
  },
  {
    title: "Intelligent Risk Stratification",
    description: "Analyze patient records to classify risk levels, helping healthcare providers prioritize care and optimize resources."
  },
  {
    title: "Medication Error Prevention",
    description: "AI algorithms cross-check prescriptions against medical histories to detect potential drug interactions and dosage errors."
  },
  {
    title: "Clinical Workflow Optimization",
    description: "Streamline hospital operations by automating data entry, patient triage, and follow-up scheduling."
  },
  {
    title: "Explainable AI Insights",
    description: "Ensure transparency in AI decisions with explainable models, helping clinicians trust and understand AI-powered recommendations."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI-Powered Clinical Decision Support Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance clinical decision-making with AI. From predictive analytics to risk stratification, our AI solutions empower healthcare professionals to deliver precise, data-driven patient care.
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
