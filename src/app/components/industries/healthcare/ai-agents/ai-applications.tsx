"use client"

import { motion } from "framer-motion";
import { Bot, MessageCircle, FileText, ShieldCheck, BrainCircuit, Globe } from "lucide-react";

const applications = [
  {
    icon: Bot,
    title: "Virtual Health Assistants",
    description: "AI agents that provide instant medical advice, appointment scheduling, and symptom checks."
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Chatbots",
    description: "Smart chatbots designed for patient support, answering queries, and guiding users through health processes."
  },
  {
    icon: FileText,
    title: "Automated Medical Documentation",
    description: "Streamline clinical documentation by transcribing and summarizing doctor-patient interactions."
  },
  {
    icon: ShieldCheck,
    title: "Health Data Security",
    description: "AI agents ensuring real-time monitoring and protection of sensitive medical data."
  },
  {
    icon: BrainCircuit,
    title: "Predictive Patient Insights",
    description: "AI models that analyze data to predict patient risks, enhancing preventative care strategies."
  },
  {
    icon: Globe,
    title: "Global Telemedicine Support",
    description: "Empower remote healthcare services by integrating AI agents for virtual consultations worldwide."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI AGENT APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Revolutionizing Healthcare with AI Agents
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore how AI agents are transforming healthcare by automating processes, enhancing patient care, and securing medical data.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black hover:border-[#3D3D3D] transition-colors"
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
