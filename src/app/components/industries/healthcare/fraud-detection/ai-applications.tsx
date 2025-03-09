"use client";

import { motion } from 'framer-motion';
import { ShieldAlert, LockKeyhole, Fingerprint, SearchCheck, Eye, BarChart3 } from 'lucide-react';

const applications = [
  {
    icon: ShieldAlert,
    title: "Real-time Fraud Detection",
    description: "Leverage AI algorithms to identify suspicious patterns and prevent fraudulent transactions instantly."
  },
  {
    icon: LockKeyhole,
    title: "Anomaly Detection Systems",
    description: "Detect unusual behaviors across networks and databases, ensuring proactive threat mitigation."
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Implement AI-powered facial recognition and fingerprint scans for secure user verification."
  },
  {
    icon: SearchCheck,
    title: "AI-Driven Risk Scoring",
    description: "Analyze user activities to assign risk scores, helping businesses prioritize high-risk cases."
  },
  {
    icon: Eye,
    title: "Behavioral Analytics",
    description: "Track user behavior in real-time, uncovering hidden threats through AI pattern recognition."
  },
  {
    icon: BarChart3,
    title: "Predictive Security Insights",
    description: "Utilize AI to forecast security breaches, allowing preemptive action against potential attacks."
  }
];

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            AI Solutions for Fraud Detection & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your security systems with AI technology — detecting threats, preventing fraud, and safeguarding your data with precision.
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
