"use client"

import { motion } from 'framer-motion'
import { Brain, Code, Users, Shield, Zap, BarChart } from 'lucide-react'

const reasons = [
  {
    icon: Brain,
    title: "AI Expertise & Innovation",
    description: "Our team specializes in cutting-edge AI technologies, bringing unmatched expertise to drive impactful Generative AI solutions for your enterprise."
  },
  {
    icon: Code,
    title: "Tailored AI Solutions",
    description: "We craft custom AI solutions designed specifically for your business needs, addressing your unique challenges and ensuring a perfect fit with your goals."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We believe in a strong partnership with your team, ensuring that our AI solutions align perfectly with your enterprise's objectives and future vision."
  },
  {
    icon: Shield,
    title: "Data Security & Compliance",
    description: "Your data's security and privacy are our top priority. We implement strict security measures and adhere to all relevant regulations to ensure compliance."
  },
  {
    icon: Zap,
    title: "State-of-the-Art Technology",
    description: "Leveraging the latest advancements in AI, we provide innovative solutions that keep your enterprise ahead of the curve in a fast-evolving technological landscape."
  },
  {
    icon: BarChart,
    title: "Results-Driven Approach",
    description: "Our AI solutions are designed to deliver measurable business value, improving efficiency, optimizing processes, and ensuring a high return on investment (ROI)."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Us for Enterprise Generative AI Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to leverage our expertise and drive innovation in your enterprise through powerful Generative AI solutions.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
