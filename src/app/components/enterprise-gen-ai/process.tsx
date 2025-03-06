"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Define the Problem",
    description: "We start by understanding the problem we want to solve using a Generative AI product. We engage in conversations with our clients to gather specific requirements, identify the type of content to be generated, target audience, and content use cases."
  },
  {
    number: "02",
    title: "Gather Data",
    description: "We collect and prepare the data necessary for training the AI model, ensuring its quality and relevance to the problem being solved."
  },
  {
    number: "03",
    title: "Design the Model",
    description: "We design the most suitable AI model tailored to the defined problem, considering factors like the type of AI techniques required."
  },
  {
    number: "04",
    title: "Train & Evaluate the Model",
    description: "We train the AI model using the gathered data, applying industry best practices and evaluating its performance to ensure it meets the desired outcomes."
  },
  {
    number: "05",
    title: "Deploy the Model",
    description: "After successful training and evaluation, we deploy the AI model, ensuring it is integrated into your existing systems for effective use."
  },
  {
    number: "06",
    title: "Monitor and Optimize",
    description: "We continuously monitor the deployed model, optimize its performance, and address any issues or defects, ensuring long-term success."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Enterprise Generative AI Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Generative AI developers follow a meticulous approach to understand your company’s objectives and create engaging, user-friendly AI solutions for your target audience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <div className="text-primary text-sm font-bold mb-2">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
