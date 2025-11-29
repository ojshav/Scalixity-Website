"use client";

import { motion } from 'framer-motion';
import { FlaskConical, Dna, HeartPulse, Stethoscope, ShieldCheck, TestTube } from 'lucide-react';

const applications = [
  {
    icon: Dna,
    title: "Genomic Data Interpretation",
    description: "AI models analyzing DNA sequences to identify genetic markers and personalize treatment plans."
  },
  {
    icon: HeartPulse,
    title: "Predictive Health Risk Assessment",
    description: "Machine learning algorithms predicting patient risks and recommending proactive interventions."
  },
  {
    icon: Stethoscope,
    title: "AI-Driven Clinical Decision Support",
    description: "Providing data-backed insights for doctors to tailor treatments based on patient data."
  },
  {
    icon: TestTube,
    title: "Drug Response Prediction",
    description: "Simulating drug interactions using AI to foresee patient-specific responses."
  },
  {
    icon: ShieldCheck,
    title: "Health Data Security",
    description: "Ensuring sensitive medical data remains protected with AI-powered encryption and monitoring."
  },
  {
    icon: FlaskConical,
    title: "Biomarker Discovery",
    description: "Uncovering novel biomarkers through AI analysis to enhance disease diagnosis and treatment."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">AI APPLICATIONS IN PERSONALIZED MEDICINE</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Transforming Healthcare with AI-Powered Personalization
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover how AI is advancing personalized medicine — analyzing genomics, predicting risks, and tailoring treatments for individual patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black/80">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
