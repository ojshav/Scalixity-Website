"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Data Collection & Analysis",
    description: "We begin by gathering manufacturing data — from machine performance to supply chain metrics — ensuring AI models are well-informed."
  },
  {
    number: "02",
    title: "Model Development",
    description: "Our team designs AI algorithms tailored for predictive maintenance, quality control, and process optimization."
  },
  {
    number: "03",
    title: "Testing & Validation",
    description: "We rigorously test AI models against real-time data to ensure accuracy, reliability, and efficiency."
  },
  {
    number: "04",
    title: "Integration",
    description: "Seamlessly embed AI systems into your existing manufacturing workflows with minimal disruption."
  },
  {
    number: "05",
    title: "Monitoring & Optimization",
    description: "Continuously monitor AI performance, refining models to adapt to changing processes and demands."
  },
  {
    number: "06",
    title: "Training & Support",
    description: "Empower your team with AI knowledge through training sessions, ensuring smooth adoption and usage."
  }
];

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our AI Development Process for Manufacturing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined process to design, develop, and deploy AI solutions tailored for manufacturing excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
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
  );
}

export default Process;
