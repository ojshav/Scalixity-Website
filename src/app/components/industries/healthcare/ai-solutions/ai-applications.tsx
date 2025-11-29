"use client"

import { motion } from 'framer-motion'
import { Stethoscope, Brain, FileText, Activity, Users, Microscope } from 'lucide-react'

const applications = [
  {
    icon: Stethoscope,
    title: "AI-Powered Diagnosis",
    description: "Harness AI algorithms for swift and precise disease detection, empowering healthcare providers."
  },
  {
    icon: Brain,
    title: "Smart Treatment Plans",
    description: "Tailor treatment strategies using AI insights, optimizing care based on patient history and data."
  },
  {
    icon: FileText,
    title: "Intelligent Medical Imaging",
    description: "Utilize AI models to analyze X-rays, MRIs, and CT scans with high accuracy and efficiency."
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    description: "Deploy AI systems to track vitals and predict potential health risks, ensuring proactive care."
  },
  {
    icon: Users,
    title: "AI-Driven Healthcare Management",
    description: "Streamline hospital operations, optimize resources, and enhance patient flow using AI solutions."
  },
  {
    icon: Microscope,
    title: "Accelerated Drug Discovery",
    description: "Leverage AI to speed up drug research and development through predictive modeling and data analysis."
  }
]

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">OUR AI SOLUTIONS</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Revolutionizing Healthcare with AI
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore how Scalixity&apos;s AI-driven solutions are transforming healthcare by enhancing precision, efficiency, and patient outcomes.
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
              className="bg-[#FFF2D5] p-8 rounded-xl border border-black hover:border-[#3D3D3D] transition-colors"
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
