"use client"

import { motion } from 'framer-motion'
import { ScanLine, BrainCircuit, Eye, ImagePlus, ShieldCheck, FileText } from 'lucide-react'

const applications = [
  {
    icon: ScanLine,
    title: "AI-Powered Image Analysis",
    description: "Advanced AI models that detect anomalies in X-rays, MRIs, and CT scans with high accuracy."
  },
  {
    icon: BrainCircuit,
    title: "Disease Prediction & Classification",
    description: "Machine learning algorithms that classify medical images and predict potential health risks."
  },
  {
    icon: Eye,
    title: "Real-time Diagnostics",
    description: "Instant AI-driven analysis to support doctors in diagnosing critical conditions faster."
  },
  {
    icon: ImagePlus,
    title: "Image Enhancement & Restoration",
    description: "AI techniques to enhance image quality, remove noise, and highlight crucial details."
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description: "Ensure secure handling of medical images, adhering to HIPAA and GDPR standards."
  },
  {
    icon: FileText,
    title: "Automated Report Generation",
    description: "AI-powered systems that generate comprehensive diagnostic reports based on imaging data."
  }
]

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI APPLICATIONS IN MEDICAL IMAGING</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Medical Imaging with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI revolutionizes medical imaging — from enhanced diagnostics to automated reporting and secure data handling.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIApplications;
