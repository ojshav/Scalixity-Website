"use client";

import { motion } from "framer-motion";
import { PencilRuler, Target, Layers, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Clear Project Roadmap",
    description: "Get a well-structured plan that outlines every phase of your project, ensuring clarity and alignment before execution.",
    icon: <PencilRuler className="w-10 h-10 text-primary" />,
  },
  {
    title: "Minimized Risks",
    description: "Identify potential roadblocks early with strategic planning, reducing costly errors and ensuring smooth development.",
    icon: <Target className="w-10 h-10 text-primary" />,
  },
  {
    title: "Scalable & Flexible Designs",
    description: "Blueprints are created with future scalability in mind, ensuring seamless adaptability as your business grows.",
    icon: <Layers className="w-10 h-10 text-primary" />,
  },
  {
    title: "Cost & Time Efficiency",
    description: "With a structured blueprint, development becomes faster and more cost-effective, saving valuable resources.",
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">BENEFITS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Our Blueprint Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blueprint service provides a structured foundation, ensuring a clear vision, risk reduction, and efficient execution for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
