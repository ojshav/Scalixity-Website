"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Real-time Fraud Detection",
    description: "Leverage AI algorithms to instantly identify suspicious activities, unauthorized transactions, and data breaches before they escalate."
  },
  {
    title: "Anomaly Detection & Pattern Recognition",
    description: "Detect unusual patterns in data streams using AI-driven anomaly detection models, ensuring proactive security measures."
  },
  {
    title: "Risk Scoring & Threat Analysis",
    description: "Implement AI-based risk scoring systems to assess the severity of threats and prioritize responses for effective fraud mitigation."
  },
  {
    title: "Automated Incident Response",
    description: "Streamline threat responses with AI agents that trigger automated workflows, minimizing downtime and reducing manual intervention."
  },
  {
    title: "Transaction Monitoring & Alerts",
    description: "Continuously monitor financial transactions, flagging suspicious behavior and sending real-time alerts to security teams."
  },
  {
    title: "Predictive Security Analytics",
    description: "Utilize predictive models to forecast potential fraud attempts, enabling proactive strategies to safeguard critical systems."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI-Powered Fraud Detection & Security
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Secure your business with cutting-edge AI solutions. Detect anomalies, mitigate threats, and stay ahead of fraud with real-time, intelligent security systems.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
