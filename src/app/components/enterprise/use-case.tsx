"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const enterpriseUseCases = [
  {
    title: "Scalable Enterprise Applications",
    description: "Develop and deploy robust, scalable enterprise applications tailored to complex business operations.",
    image: "/tech/enterprise-app.svg",
    stats: [
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "5x", label: "Improved Operational Efficiency" }
    ]
  },
  {
    title: "AI & Automation for Enterprises",
    description: "Leverage AI-driven automation to enhance workflows, reduce costs, and improve decision-making.",
    image: "/tech/ai-enterprise.svg",
    stats: [
      { value: "70%", label: "Faster Business Processes" },
      { value: "50%", label: "Reduction in Manual Tasks" }
    ]
  },
  {
    title: "Enterprise Data Analytics & Insights",
    description: "Utilize data analytics solutions for real-time insights, predictive analytics, and better business intelligence.",
    image: "/tech/enterprise-analytics.svg",
    stats: [
      { value: "10x", label: "Faster Report Generation" },
      { value: "40%", label: "Increase in Data Accuracy" }
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
            Discover how our enterprise solutions drive efficiency, innovation, and business growth.
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
