"use client"

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Clock, ShieldCheck, ActivitySquare, Users } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "24/7 Virtual Health Assistance",
    description: "AI agents provide round-the-clock support for patient inquiries, appointments, and health advice."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Diagnostics",
    description: "AI models enhance diagnostic accuracy by analyzing complex medical data instantly."
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Continuous patient monitoring with AI-driven insights for proactive healthcare interventions."
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description: "AI agents ensure the highest level of data encryption and regulatory compliance."
  },
  {
    icon: ActivitySquare,
    title: "Workflow Automation",
    description: "Streamline administrative tasks and optimize hospital workflows for efficiency."
  },
  {
    icon: Users,
    title: "Enhanced Patient Engagement",
    description: "AI-powered chatbots foster better communication between patients and healthcare providers."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Benefits of AI Agents in Healthcare
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Unlock the potential of AI agents — delivering smarter, faster, and more secure healthcare solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-[#3D3D3D] transition-colors"
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
