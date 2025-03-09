"use client";

import { motion } from 'framer-motion';
import { Activity, BarChart, FileSearch, ShieldCheck, Stethoscope, BrainCircuit } from 'lucide-react';

const applications = [
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    description: "AI models that continuously track vital signs and detect early health risks for proactive care."
  },
  {
    icon: BarChart,
    title: "Predictive Health Analytics",
    description: "Leverage AI to forecast patient outcomes, helping clinicians design personalized treatment plans."
  },
  {
    icon: FileSearch,
    title: "Medical Record Analysis",
    description: "Automate the extraction and summarization of patient data to streamline clinical workflows."
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy & Security",
    description: "Ensure HIPAA-compliant AI algorithms safeguard patient data through real-time anomaly detection."
  },
  {
    icon: Stethoscope,
    title: "Disease Progression Tracking",
    description: "Monitor disease evolution using AI insights, allowing for timely interventions and therapy adjustments."
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Clinical Decision Support",
    description: "Assist doctors with AI-powered recommendations by analyzing patient history and medical research."
  }
];

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            AI APPLICATIONS IN PATIENT DATA ANALYTICS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Healthcare with AI-Powered Patient Data Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI revolutionizes patient data analytics by enabling predictive insights, automating processes, and enhancing clinical decisions.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
