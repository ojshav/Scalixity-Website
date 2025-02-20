"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const enterpriseTechStack = {
  "Enterprise Frontend": [
    { name: "React", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg" },
    { name: "Angular", logo: "/tech/angular.svg" }
  ],
  "Enterprise Backend & API": [
    { name: "Node.js", logo: "/tech/nodejs.svg" },
    { name: "Spring Boot", logo: "/tech/springboot.svg" },
    { name: "GraphQL", logo: "/tech/graphql.svg" }
  ],
  "Enterprise Databases": [
    { name: "Oracle DB", logo: "/tech/oracle.svg" },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" }
  ],
  "Enterprise Cloud & DevOps": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Azure", logo: "/tech/azure.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" }
  ],
  "Enterprise AI & ML": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "IBM Watson", logo: "/tech/ibm-watson.svg" },
    { name: "OpenAI API", logo: "/tech/openai.svg" }
  ]
}

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">ENTERPRISE TECH STACK</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Our Enterprise Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest enterprise-grade technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(enterpriseTechStack).map(([category, items], index) => (
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
