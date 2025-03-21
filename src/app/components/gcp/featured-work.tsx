"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "GCPFinance",
    title: "Empowering FinTech with Google Cloud Solutions",
    description: "Using Google Cloud Platform, we helped GCPFinance build a resilient and scalable financial ecosystem with AI-driven insights and robust security features.",
    image: "/images/Data Analysis.svg",
    features: [
      "BigQuery for real-time analytics",
      "Cloud Functions for serverless computing",
      "Vertex AI for financial forecasting",
      "Cloud IAM for enterprise-grade security"
    ]
  },
  {
    company: "MediGCP",
    title: "Transforming Healthcare with GCP-Powered Solutions",
    description: "We built a HIPAA-compliant telehealth platform leveraging Google Cloud services to ensure seamless patient care and data security.",
    image: "/images/Transforming SaaS Product Development.svg",
    features: [
      "Google Meet API for virtual consultations",
      "Kubernetes Engine for scalable infrastructure",
      "Cloud Storage for secure medical data",
      "Security Command Center for proactive threat management"
    ]
  },
  {
    company: "RetailGCP",
    title: "Enhancing E-commerce with Google Cloud AI and Analytics",
    description: "Using GCP’s AI and data analytics solutions, we helped RetailGCP enhance customer experiences and optimize supply chain operations.",
    image: "/images/tech/Enhancing E-commerce with AI-Powered Personalization.svg",
    features: [
      "Recommendations AI for personalized shopping",
      "Dataflow for real-time data processing",
      "Dialogflow for intelligent customer interactions",
      "Compute Engine for high-performance applications"
    ]
  }
]

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Google Cloud-Powered Projects
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
              {/* Text Card with Black Border */}
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="border border-black p-8 bg-[#F3F1EB] rounded-xl">
                  <span className="text-black text-sm">— {project.company}</span>
                  <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                  <p className="text-black mb-6">{project.description}</p>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
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
              </div>

              {/* Image Card with Black Border */}
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="border border-black relative h-[400px] rounded-xl overflow-hidden">
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
