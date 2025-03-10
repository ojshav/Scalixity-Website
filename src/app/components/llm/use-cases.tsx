"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const useCases = [
{
  title: "Content Generation",
  description: "Create high-quality, contextually relevant content at scale for various business needs.",
  image: "/placeholder.svg?height=300&width=400"
},
{
  title: "Customer Support",
  description: "Implement intelligent chatbots and virtual assistants for 24/7 customer service.",
  image: "/placeholder.svg?height=300&width=400"
},
{
  title: "Data Analysis",
  description: "Extract valuable insights from large volumes of unstructured text data.",
  image: "/placeholder.svg?height=300&width=400"
},
{
  title: "Code Generation",
  description: "Accelerate development with AI-powered code suggestions and automation.",
  image: "/placeholder.svg?height=300&width=400"
},
{
  title: "Document Processing",
  description: "Automate the analysis and processing of complex documents and contracts.",
  image: "/placeholder.svg?height=300&width=400"
},
{
  title: "Knowledge Management",
  description: "Build intelligent knowledge bases and information retrieval systems.",
  image: "/placeholder.svg?height=300&width=400"
}
]

export function UseCases() {
return (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm text-muted-foreground uppercase tracking-wider">USE CASES</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
          LLM Applications Across Industries
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how our LLM solutions can transform different aspects of your business
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
          >
            <div className="relative h-[200px]">
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
}

