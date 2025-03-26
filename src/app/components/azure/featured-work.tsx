"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "AzureFinTech",
    title: "Secure and Scalable Financial Solutions with Azure",
    description: "Using Microsoft Azure, we helped AzureFinTech build a high-performance financial platform with top-tier security and compliance.",
    image: "/images/icons/finance.svg",
    features: [
      "Azure Functions for serverless computing",
      "Azure SQL Database for scalable and secure data management",
      "Azure Monitor for real-time insights",
      "Azure Security Center for threat protection"
    ]
  },
  {
    company: "MediCloud",
    title: "Revolutionizing Healthcare with Azure-Powered Solutions",
    description: "We created a HIPAA-compliant telemedicine platform leveraging Azure services for seamless patient interactions and data security.",
    image: "/images/icons/healthcare.svg",
    features: [
      "Azure Communication Services for real-time consultations",
      "Azure Kubernetes Service for scalable infrastructure",
      "Azure Blob Storage for secure medical data",
      "Azure DDoS Protection for enhanced security"
    ]
  },
  {
    company: "RetailSync",
    title: "Optimizing E-commerce with Azure AI and Analytics",
    description: "Using Azure AI and big data solutions, we helped RetailSync enhance customer engagement and streamline inventory management.",
    image: "/images/icons/retail.svg",
    features: [
      "Azure Machine Learning for personalized recommendations",
      "Azure Synapse Analytics for data integration",
      "Azure Bot Services for automated customer support",
      "Azure Virtual Machines for scalable performance"
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
              Our Azure-Powered Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
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
              className="flex flex-col md:flex-row bg-[#F3F1EB] border border-black rounded-xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover border-2 border-black rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
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
                  className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
