"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered Predictive Maintenance System",
    description: "Developed an AI solution for a manufacturing company to predict equipment failures and optimize maintenance schedules, resulting in a 30% reduction in downtime.",
    image: "/images/ai-powered-maintenance.svg",
    link: "/case-studies/predictive-maintenance"
  },
  {
    title: "Natural Language Processing for Customer Service",
    description: "Implemented an NLP-based chatbot for a large e-commerce platform, improving response times by 50% and increasing customer satisfaction scores.",
    image: "/images/nlp-customer-service.svg",
    link: "/case-studies/nlp-customer-service"
  },
  {
    title: "Computer Vision for Quality Control",
    description: "Created a computer vision system for a food processing plant to detect defects in products, increasing quality control efficiency by 40% and reducing waste.",
    image: "/images/computer-vision-quality-control.svg",
    link: "/case-studies/computer-vision-quality-control"
  }
]

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Featured AI Projects
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore some of our successful AI implementations across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-black hover:text-gray-800 transition-colors font-medium"
                >
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
