"use client"

import { motion } from 'framer-motion'
import { ScanLine, BrainCircuit, Eye, ImagePlus, ShieldCheck, FileText } from 'lucide-react'

const benefits = [
  {
    icon: ScanLine,
    title: "Enhanced Diagnostic Accuracy",
    description: "AI models analyze medical images with precision, reducing human error and improving diagnostic confidence."
  },
  {
    icon: BrainCircuit,
    title: "Faster Image Processing",
    description: "Real-time AI algorithms process X-rays, MRIs, and CT scans instantly, accelerating medical decisions."
  },
  {
    icon: Eye,
    title: "Early Disease Detection",
    description: "Identify patterns and anomalies in medical images to detect diseases at their earliest stages."
  },
  {
    icon: ImagePlus,
    title: "Improved Image Quality",
    description: "AI-powered image enhancement clarifies visuals, reducing noise and highlighting critical details."
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description: "Ensure secure storage and transfer of medical images, adhering to HIPAA and GDPR standards."
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "AI generates comprehensive diagnostic reports, saving time and streamlining clinical workflows."
  }
]

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI in Medical Imaging
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock AI&apos;s potential in medical imaging — from accurate diagnostics to faster processing and secure data management.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-[#5B1DAF]/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-gray-500 mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits;
