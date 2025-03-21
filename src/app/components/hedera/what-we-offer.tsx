"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Generative AI Solutions",
    description: "Hedra crafts AI solutions that generate new ideas, designs, and content. We push the boundaries of creativity and innovation with advanced generative models tailored to your business."
  },
  {
    title: "Custom AI Model Development",
    description: "Our team develops AI models from scratch, fine-tuning them to your specific needs. From neural networks to transformers, we build the core intelligence behind your AI-powered solutions."
  },
  {
    title: "Real-time AI Integration",
    description: "Seamlessly embed AI into your workflows. Hedra ensures smooth integration of AI models into your systems, enabling real-time data analysis and instant decision-making."
  },
  {
    title: "Model Training & Optimization",
    description: "We don’t just build AI models — we train and optimize them. By leveraging the latest AI algorithms, we enhance accuracy, speed, and efficiency to maximize business impact."
  },
  {
    title: "AI Monitoring & Maintenance",
    description: "AI needs constant care. Hedra offers ongoing monitoring and maintenance, ensuring your AI systems perform at their peak with regular updates and improvements."
  },
  {
    title: "AI Education & Empowerment",
    description: "Empower your team with AI expertise. We provide hands-on training and workshops, equipping your staff with the skills to utilize AI technologies effectively."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-900 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mt-4 mb-6">
          Hedra&apos;s  AI Solutions & Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock the potential of AI with Hedra. Our cutting-edge solutions empower businesses to innovate, optimize, and grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer;
