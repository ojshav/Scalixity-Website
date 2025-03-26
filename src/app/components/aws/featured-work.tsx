"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "FinCloud",
    title: "Scalable and Secure Financial Services with AWS",
    description: "Using AWS, we helped FinCloud build a robust, scalable, and compliant financial platform, ensuring high availability and security.",
    image: "/images/FinTech Mobile App.svg",
    features: [
      "AWS Lambda for serverless architecture",
      "Amazon RDS for secure and scalable database management",
      "CloudWatch for real-time monitoring and logging",
      "AWS WAF for enhanced security"
    ]
  },
  {
    company: "MediStream",
    title: "Transforming Healthcare with AWS-Powered Telemedicine",
    description: "We developed a HIPAA-compliant telemedicine solution using AWS, allowing seamless virtual consultations and patient data security.",
    image: "/images/ai-patient-monitoring.svg",
    features: [
      "Amazon Chime for real-time communication",
      "AWS Fargate for scalable container management",
      "Amazon S3 for secure patient data storage",
      "AWS Shield for DDoS protection"
    ]
  },
  {
    company: "Retail360",
    title: "Enhancing E-commerce with AI-Powered AWS Solutions",
    description: "Leveraging AWS AI and analytics, we optimized customer experience and inventory management for an e-commerce business.",
    image: "/images/ai.svg",
    features: [
      "Amazon Personalize for AI-driven recommendations",
      "AWS Glue for efficient data integration",
      "Amazon Lex for chatbot customer support",
      "AWS Auto Scaling for seamless performance"
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
              Our AWS-Powered Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-black/80 transition-colors"
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
              className="flex gap-8 items-center"
            >
              <div className="bg-white p-6 rounded-xl border-2 border-black w-full flex items-center">
                <div className="relative h-[400px] w-[50%] rounded-xl overflow-hidden mr-8 border-2 border-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col w-[50%]">
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
                    className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors mt-6"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
