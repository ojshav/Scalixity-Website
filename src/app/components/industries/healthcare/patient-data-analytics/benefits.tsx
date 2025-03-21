"use client";

import { motion } from 'framer-motion';
import { BarChart, BrainCircuit, ShieldCheck, ActivitySquare, LineChart, Users } from 'lucide-react';

const benefits = [
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "Harness AI-powered analytics to uncover trends, patterns, and correlations within patient data."
  },
  {
    icon: BrainCircuit,
    title: "Predictive Healthcare",
    description: "Forecast disease progression and patient outcomes, enabling proactive treatment plans."
  },
  {
    icon: LineChart,
    title: "Real-Time Monitoring",
    description: "Track patient vitals and receive instant alerts for critical health events."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Data Security",
    description: "Ensure patient data privacy with AI algorithms designed for regulatory compliance."
  },
  {
    icon: ActivitySquare,
    title: "Operational Efficiency",
    description: "Automate data processing tasks, reducing manual errors and accelerating clinical workflows."
  },
  {
    icon: Users,
    title: "Personalized Patient Care",
    description: "Tailor treatment plans using AI insights, improving patient engagement and satisfaction."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI-Powered Patient Data Analytics
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock actionable insights, enhance patient care, and streamline healthcare processes with AI-driven patient data analytics.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
