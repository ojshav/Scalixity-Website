"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const enterpriseUseCases = [
  {
    title: "Enterprise Cloud Solutions",
    description: "Deploy secure, scalable, and compliant cloud solutions tailored for enterprise needs.",
    image: "/tech/enterprise-cloud.svg",
    stats: [
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "30%", label: "Cost Reduction in IT Infrastructure" }
    ]
  },
  {
    title: "AI-Driven Business Intelligence",
    description: "Leverage AI and machine learning to drive strategic insights and operational efficiency.",
    image: "/tech/enterprise-ai.svg",
    stats: [
      { value: "50%", label: "Increase in Decision-Making Speed" },
      { value: "40%", label: "Reduction in Data Processing Costs" }
    ]
  },
  {
    title: "Enterprise Security & Compliance",
    description: "Implement robust security frameworks to protect sensitive enterprise data and ensure compliance.",
    image: "/tech/enterprise-security.svg",
    stats: [
      { value: "95%", label: "Threat Mitigation Rate" },
      { value: "100%", label: "Regulatory Compliance Assurance" }
    ]
  }
]

export function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Enterprise Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our enterprise solutions drive business transformation and efficiency.
          </p>
        </div>

        <div className="space-y-16">
          {enterpriseUseCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-8">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-8">
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
