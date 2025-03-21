"use client";

import { motion } from 'framer-motion';
import { FlaskConical, Dna, HeartPulse, Stethoscope, ShieldCheck, TestTube } from 'lucide-react';

const benefits = [
  {
    icon: Dna,
    title: "Tailored Treatment Plans",
    description: "AI-driven insights helping doctors create personalized treatment strategies based on a patient’s genetic profile and medical history."
  },
  {
    icon: HeartPulse,
    title: "Early Disease Detection",
    description: "Predictive algorithms analyzing biomarkers to identify potential health risks before symptoms appear."
  },
  {
    icon: Stethoscope,
    title: "Optimized Drug Therapies",
    description: "AI models forecasting individual drug responses to enhance efficacy and minimize side effects."
  },
  {
    icon: TestTube,
    title: "Accelerated Research & Discovery",
    description: "Machine learning models uncovering novel biomarkers and accelerating drug development cycles."
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy & Security",
    description: "Advanced AI encryption safeguarding patient data and ensuring compliance with healthcare regulations."
  },
  {
    icon: FlaskConical,
    title: "Continuous Health Monitoring",
    description: "Real-time AI monitoring offering proactive health insights and intervention strategies."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI in Personalized Medicine
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Unlock the future of healthcare with AI — delivering precision, proactive care, and personalized treatment for every individual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
