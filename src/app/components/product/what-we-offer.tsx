"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Product Strategy & Roadmap",
    description: "We help businesses define product strategies, ensuring alignment with market demands, user needs, and business objectives."
  },
  {
    title: "Custom Product Development",
    description: "From ideation to deployment, we build scalable and high-performance digital products tailored to your business."
  },
  {
    title: "Cloud-Native Product Solutions",
    description: "We develop cloud-first applications with microservices, serverless, and containerized architectures for seamless scalability."
  },
  {
    title: "AI & Data-Driven Product Innovation",
    description: "Leverage AI, machine learning, and big data analytics to create intelligent and data-driven digital products."
  },
  {
    title: "Security & Compliance in Product Development",
    description: "We integrate security best practices and compliance frameworks to protect your product and user data from threats."
  },
  {
    title: "Product Modernization & Scaling",
    description: "Revamp legacy products with modern technologies, enhance performance, and scale to meet growing user demands."
  }
]

export function ProductDevelopmentServices() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Product Development Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build innovative, scalable, and secure digital products designed for success in today&apos;scompetitive market.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
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

export default ProductDevelopmentServices;
