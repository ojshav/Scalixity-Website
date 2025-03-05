"use client"

import { motion } from 'framer-motion'
import { Bot, BrainCircuit, Server, Settings2, ShieldCheck, BarChart3 } from 'lucide-react'

const applications = [
  {
    icon: Bot,
    title: "AI Customer Support Agents",
    description: "Automating customer interactions with intelligent chatbots that enhance user experience and efficiency."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Workflow Automation",
    description: "AI-driven process automation optimizing SaaS operations, reducing manual effort, and improving productivity."
  },
  {
    icon: Server,
    title: "AI-Powered Cloud Optimization",
    description: "Dynamically managing cloud resources to ensure cost-effective and performance-driven SaaS applications."
  },
  {
    icon: Settings2,
    title: "Predictive Maintenance & Issue Resolution",
    description: "AI predicting system failures and automating issue resolution for seamless SaaS service delivery."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced SaaS Security & Compliance",
    description: "AI-driven threat detection and compliance monitoring ensuring robust security for SaaS platforms."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Business Intelligence",
    description: "Leveraging AI to analyze SaaS metrics, optimize decision-making, and drive business growth."
  }
]

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI APPLICATIONS IN SAAS INDUSTRY</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming SaaS with AI-Driven Automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI-powered agents are revolutionizing the SaaS industry — automating support, optimizing workflows, and enhancing security.
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