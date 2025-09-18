"use client"

import { motion } from 'framer-motion'
import { Stethoscope, Brain, FileText, Activity, Users, Microscope } from 'lucide-react'

const applications = [
  {
    icon: Stethoscope,
    title: "Diagnosis Assistance",
    description: "AI-powered tools to assist in accurate and timely diagnosis of diseases and conditions."
  },
  {
    icon: Brain,
    title: "Personalized Treatment Plans",
    description: "Develop AI models that create tailored treatment plans based on patient data and medical history."
  },
  {
    icon: FileText,
    title: "Medical Imaging Analysis",
    description: "Advanced AI algorithms for analyzing and interpreting medical images like X-rays, MRIs, and CT scans."
  },
  {
    icon: Activity,
    title: "Patient Monitoring",
    description: "Real-time AI systems for monitoring patient vital signs and predicting potential health issues."
  },
  {
    icon: Users,
    title: "Healthcare Management",
    description: "AI solutions for optimizing hospital operations, resource allocation, and patient flow."
  },
  {
    icon: Microscope,
    title: "Drug Discovery",
    description: "Accelerate the drug discovery process using AI-driven predictive models and data analysis."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Transforming Healthcare with AI
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how our AI solutions are revolutionizing various aspects of the healthcare industry.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
