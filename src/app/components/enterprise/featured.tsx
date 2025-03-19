"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "EnterpriseX",
    title: "Modernizing Enterprise Operations with Scalable Solutions",
    description: "We developed a cloud-based enterprise platform that enhances operational efficiency, security, and scalability for large businesses.",
    image: "/images/ai-powered-maintenance.svg",
    features: [
      "Cloud-native architecture for scalability",
      "AI-powered automation for workflow optimization",
      "Advanced security measures for data protection",
      "Seamless integration with existing enterprise systems"
    ]
  },
  {
    company: "HealthCorp",
    title: "Enterprise Healthcare Management System",
    description: "We built a secure, HIPAA-compliant enterprise solution that streamlines hospital operations, patient management, and data analytics.",
    image: "/images/healthcare-analytics.svg",
    features: [
      "Cloud-based patient record management",
      "AI-driven diagnostics and predictive analytics",
      "Secure telemedicine integrations",
      "Enterprise-grade compliance and security"
    ]
  },
  {
    company: "RetailEnterprise",
    title: "Enhancing Retail Operations with AI and Data Analytics",
    description: "Using AI and data analytics, we built a smart retail management platform that optimizes inventory, sales, and customer engagement.",
    image: "/images/Data Analysis.svg",
    features: [
      "AI-powered demand forecasting",
      "Personalized customer engagement tools",
      "Real-time inventory and sales analytics",
      "Seamless omnichannel retail experience"
    ]
  }
]

export function FeaturedWorkEnterprise() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-foreground mt-4">
              Our Enterprise App Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <span className="text-primary text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorkEnterprise;
