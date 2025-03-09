"use client";

import { motion } from 'framer-motion';
import { ShieldAlert, LockKeyhole, Radar, Eye, BarChart3, AlarmCheck } from 'lucide-react';

const benefits = [
  {
    icon: ShieldAlert,
    title: "Real-Time Threat Detection",
    description: "Identify and neutralize fraudulent activities instantly using AI-powered detection algorithms."
  },
  {
    icon: LockKeyhole,
    title: "Advanced Data Encryption",
    description: "Protect sensitive information with AI-enhanced encryption protocols and security layers."
  },
  {
    icon: Radar,
    title: "Anomaly Detection",
    description: "Detect suspicious patterns and unusual behaviors to prevent potential security breaches."
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "AI agents provide 24/7 surveillance of networks, flagging risks as they emerge."
  },
  {
    icon: BarChart3,
    title: "Predictive Risk Analysis",
    description: "Leverage AI models to forecast fraud attempts, enabling proactive defense strategies."
  },
  {
    icon: AlarmCheck,
    title: "Automated Incident Response",
    description: "Trigger instant security protocols when threats are detected, minimizing damage."
  }
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI in Fraud Detection & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strengthen your security framework with AI — detecting, predicting, and responding to threats faster than ever.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
