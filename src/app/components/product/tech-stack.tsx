"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const productTechStack = {
  "Frontend Development": [
    { name: "React", logo: "/images/tech/react-native.svg" },
    { name: "Next.js", logo: "/images/tech/nextjs.svg" },
    { name: "Tailwind CSS", logo: "/images/tech/tailwind.svg" }
  ],
  "Backend & API": [
    { name: "Node.js", logo: "/images/tech/nodejs.svg" },
    { name: "NestJS", logo: "/images/tech/nestjs.svg" },
    { name: "GraphQL", logo: "/images/tech/graphql.svg" }
  ],
  "Databases & Storage": [
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    { name: "Redis", logo: "/images/tech/redis.svg" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" }
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "OpenAI API", logo: "/images/tech/openai.svg" },
    { name: "LangChain", logo: "/images/tech/langchain.svg" }
  ]
}

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PRODUCT DEVELOPMENT TECH STACK</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Our Technology Stack for Product Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies to build scalable, high-performance, and secure products for enterprises.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(productTechStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Array.isArray(items) ? (
                  items.map((item: TechItem, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center">
                      {typeof item === 'object' && item.logo ? (
                        <>
                          <div className="w-16 h-16 relative mb-2">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-muted-foreground text-center">{item.name}</span>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground text-center px-3 py-2 bg-muted rounded-full">
                          {typeof item === 'string' ? item : item.name}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-wrap gap-2">
                    {(items as TechItem[]).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-muted-foreground px-3 py-2 bg-muted rounded-full"
                      >
                        {typeof item === 'string' ? item : item.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
