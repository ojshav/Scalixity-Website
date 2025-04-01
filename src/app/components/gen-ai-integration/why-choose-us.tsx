"use client"

import { motion } from 'framer-motion'
import { Brain, Code, Users, Shield, Zap, BarChart } from 'lucide-react'

const reasons = [
  {
    icon: Brain,
    title: "Generative AI Expertise & Innovation",
    description: "Our team of experts is at the forefront of Generative AI technologies, ensuring your enterprise receives solutions that are innovative, scalable, and capable of transforming your operations."
  },
  {
    icon: Code,
    title: "Custom AI Solutions for Seamless Integration",
    description: "We design Generative AI solutions tailored specifically to integrate with your business processes, enabling smooth deployment and maximizing impact from day one."
  },
  {
    icon: Users,
    title: "Collaborative Approach to AI Integration",
    description: "We work closely with your team, ensuring our Generative AI solutions align perfectly with your company’s vision and objectives, fostering a true partnership throughout the development journey."
  },
  {
    icon: Shield,
    title: "Data Privacy, Security & Compliance",
    description: "We prioritize data privacy and security, following industry-leading practices and ensuring full compliance with relevant regulations to safeguard your business and customer data."
  },
  {
    icon: Zap,
    title: "Cutting-Edge AI Technology Stack",
    description: "We leverage the latest advancements in Generative AI technologies to provide state-of-the-art solutions that future-proof your enterprise and ensure a competitive edge."
  },
  {
    icon: BarChart,
    title: "ROI-Focused AI Solutions",
    description: "Our Generative AI solutions are designed with a focus on delivering measurable results, optimizing processes, increasing operational efficiency, and generating a high return on investment."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Us for Generative AI Integration
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Partner with us to seamlessly integrate Generative AI into your enterprise and unlock new potential with customized, innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-primary/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
              <p className="text-black">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
