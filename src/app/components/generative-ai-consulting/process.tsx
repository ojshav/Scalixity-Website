"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "In-depth Examination & Intelligent Model Identification",
    description: "Everything commences with an insightful review of the existing datasets, software architectures, and technology foundations. This process unveils potential paths for implementing Generative AI models such as GANs, VAEs, or RNNs into the operational framework. By fully grasping the unique commercial environment, the most relevant AI-based technologies are identified to boost operational proficiency."
  },
  {
    title: "Trial Implementation - Prototype Launch",
    description: "We begin with a controlled pilot program to validate our approach and gather real-world feedback. This phase allows us to fine-tune the solution while minimizing risks."
  },
  {
    title: "Comprehensive AI Deployment",
    description: "Following successful trials, we execute a full-scale implementation with careful attention to integration points and system stability."
  },
  {
    title: "Surveillance and Performance Augmentation",
    description: "We establish continuous monitoring systems and implement regular performance optimizations to ensure sustained excellence."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Generative AI-driven consultation process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  Collaboration between human intuition and AI skills is the foundation of our process. We create strategies that are original, efficient, and effective by fusing your professional understanding with our AI&apos;s extensive data analysis and creativity.
</p>

        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

