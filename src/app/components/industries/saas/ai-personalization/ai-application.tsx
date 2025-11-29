"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, BarChart, Users, RefreshCcw, Layers, Settings2 } from 'lucide-react';

const applications = [
  {
    icon: BrainCircuit,
    title: "Real-Time User Behavior Analysis",
    description: "Leverage AI to track and analyze user interactions instantly, adapting experiences to individual preferences."
  },
  {
    icon: BarChart,
    title: "Dynamic Content Personalization",
    description: "Deliver hyper-relevant content recommendations by analyzing user data patterns and predicting needs."
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "Use AI to segment users based on behavior, demographics, and engagement levels for targeted experiences."
  },
  {
    icon: RefreshCcw,
    title: "Adaptive User Journeys",
    description: "Create fluid user journeys that evolve in real-time using AI-driven insights and behavior triggers."
  },
  {
    icon: Layers,
    title: "Automated A/B Testing",
    description: "Optimize UI/UX by running AI-powered A/B tests, instantly identifying the most effective variations."
  },
  {
    icon: Settings2,
    title: "Predictive Analytics",
    description: "Utilize AI to forecast user actions and trends, empowering proactive decision-making."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#590178] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-white">AI APPLICATIONS FOR SAAS PERSONALIZATION</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            AI-Powered Solutions for Next-Level SaaS Personalization
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore how AI transforms your SaaS platform — from dynamic user experiences to predictive insights, ensuring every interaction is tailored and impactful.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black text-black"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
