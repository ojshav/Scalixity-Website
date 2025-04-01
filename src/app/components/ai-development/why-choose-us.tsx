"use client"

import { motion } from 'framer-motion'
import { Brain, Code, Users, Shield, Zap, BarChart } from 'lucide-react'

const reasons = [
  {
    icon: Brain,
    title: "Expertise in AI",
    description: "Our team of AI specialists brings years of experience and deep knowledge in various AI technologies."
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "We develop tailored AI solutions that address your specific business challenges and goals."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with your team to ensure the AI solution aligns with your vision and requirements."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "We prioritize the security and privacy of your data throughout the development process."
  },
  {
    icon: Zap,
    title: "Cutting-edge Technology",
    description: "We leverage the latest AI advancements to deliver innovative and effective solutions."
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Our AI solutions are designed to deliver tangible business value and ROI."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Us for AI Development
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Partner with us to leverage our expertise and drive innovation in your business
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
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black shadow-md hover:shadow-lg transition-shadow"
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

export default WhyChooseUs;
