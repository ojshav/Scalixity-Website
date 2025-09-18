"use client";

import { motion } from 'framer-motion';
import { FileText, BrainCircuit, ClipboardCheck, ShieldCheck, Layers } from 'lucide-react';

const aiApplications = [
  {
    icon: FileText,
    title: "Automated Clinical Documentation",
    description: "AI-powered tools that capture, transcribe, and organize patient-doctor interactions in real-time."
  },
  {
    icon: BrainCircuit,
    title: "Smart Data Extraction",
    description: "AI models extract critical data from medical records, simplifying information retrieval and processing."
  },
  {
    icon: ClipboardCheck,
    title: "Medical Report Summarization",
    description: "Summarize lengthy clinical notes and patient histories into concise, actionable insights for healthcare providers."
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy & Security",
    description: "AI ensures compliance with healthcare regulations by safeguarding sensitive medical documentation."
  },
  {
    icon: Layers,
    title: "Seamless EHR Integration",
    description: "Integrate AI with Electronic Health Records (EHR) systems for real-time updates and streamlined workflows."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            AI APPLICATIONS IN HEALTHCARE
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming Healthcare with AI-Driven Documentation Intelligence
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AI enhances healthcare documentation by automating data capture, improving accuracy, and ensuring security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiApplications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-[#5B1DAF] transition-colors"
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
