"use client";

import { motion } from 'framer-motion';
import { Database, BarChart, Users, Settings, MonitorSmartphone, Cloud } from 'lucide-react';

const applications = [
  {
    icon: Database,
    title: "Intelligent Data Analytics",
    description: "Empower SaaS platforms with AI-driven data analytics, extracting actionable insights to boost decision-making and business growth."
  },
  {
    icon: BarChart,
    title: "Predictive Customer Insights",
    description: "Leverage AI models to predict user behavior, optimize customer retention strategies, and enhance user satisfaction."
  },
  {
    icon: Users,
    title: "AI-Powered Personalization",
    description: "Deliver personalized experiences by tailoring product recommendations, content, and services to individual user preferences."
  },
  {
    icon: Settings,
    title: "Automation & Workflow Optimization",
    description: "Implement AI to automate repetitive tasks, streamline workflows, and improve operational efficiency for SaaS platforms."
  },
  {
    icon: MonitorSmartphone,
    title: "Real-Time Anomaly Detection",
    description: "Use AI algorithms to detect system anomalies, security threats, and performance issues in real-time, ensuring app stability."
  },
  {
    icon: Cloud,
    title: "Intelligent Cloud Management",
    description: "Optimize cloud resource allocation and usage through AI models, reducing costs and enhancing system performance."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming SaaS with AI Solutions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI empowers SaaS businesses by driving automation, personalizing user experiences, and providing real-time data insights. Our AI solutions enhance operational efficiency, predict customer trends, and optimize cloud infrastructure, giving your SaaS platform a competitive edge.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
