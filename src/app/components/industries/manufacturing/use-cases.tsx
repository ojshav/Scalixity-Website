"use client";

import { motion } from 'framer-motion';

const useCases = [
  {
    number: "01",
    title: "Predictive Maintenance",
    description: "Leverage AI algorithms to foresee equipment failures, minimizing downtime and reducing maintenance costs."
  },
  {
    number: "02",
    title: "Quality Control Automation",
    description: "Use AI-powered image recognition to detect defects and ensure high product quality in real-time."
  },
  {
    number: "03",
    title: "Supply Chain Optimization",
    description: "Employ AI to predict demand, optimize inventory levels, and streamline logistics for better efficiency."
  },
  {
    number: "04",
    title: "Production Line Automation",
    description: "Integrate AI and robotics to automate repetitive tasks, boosting speed and precision."
  },
  {
    number: "05",
    title: "Energy Management",
    description: "Utilize AI to monitor and optimize energy consumption, reducing operational costs and environmental impact."
  },
  {
    number: "06",
    title: "Custom Product Design",
    description: "Implement AI-driven design tools to create personalized products based on customer preferences and data insights."
  }
];

export function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Use Cases in Manufacturing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI transforms manufacturing processes, enhancing efficiency and innovation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
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
                      <div className="text-primary text-sm font-bold mb-2">USE CASE {useCase.number}</div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
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

export default UseCases;


