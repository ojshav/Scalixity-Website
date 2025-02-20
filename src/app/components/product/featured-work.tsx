"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "InnoTech",
    title: "Revolutionizing SaaS with Scalable Solutions",
    description: "We developed a cloud-native SaaS platform that offers seamless integrations, real-time analytics, and AI-powered automation for enterprises.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Microservices architecture for scalability",
      "AI-driven automation for enhanced efficiency",
      "Real-time analytics for data-driven insights",
      "Secure API integrations for seamless connectivity"
    ]
  },
  {
    company: "HealthSync",
    title: "Transforming Healthcare with a Digital Patient Platform",
    description: "We built a HIPAA-compliant digital health platform that streamlines patient management, telemedicine, and predictive diagnostics.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Telemedicine support with secure video calls",
      "AI-based diagnostics for early disease detection",
      "Cloud-based medical records management",
      "Integrated wearable data tracking"
    ]
  },
  {
    company: "RetailBoost",
    title: "Enhancing E-commerce with AI-Powered Personalization",
    description: "Using machine learning and big data, we created a recommendation engine that boosts customer engagement and sales conversions.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "AI-driven product recommendations",
      "Personalized user experience with behavioral analytics",
      "Dynamic pricing strategies based on market trends",
      "Seamless omnichannel integration"
    ]
  }
]

export function FeaturedWorkProductDev() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-foreground mt-4">
              Our Product Development Success Stories
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

export default FeaturedWorkProductDev;
