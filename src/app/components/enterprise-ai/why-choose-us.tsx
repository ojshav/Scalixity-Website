"use client";

import { motion } from 'framer-motion';
import { Cpu, Settings, Database, TrendingUp, Lock, Users } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: "Enterprise-Grade AI",
    description: "We specialize in robust, scalable AI solutions tailored for large-scale business operations."
  },
  {
    icon: Settings,
    title: "End-to-End Development",
    description: "From strategy to deployment, we handle every aspect of AI implementation for seamless integration."
  },
  {
    icon: Database,
    title: "Data-Driven Insights",
    description: "We leverage advanced AI models to extract actionable insights and optimize business processes."
  },
  {
    icon: TrendingUp,
    title: "Scalability & Performance",
    description: "Our AI solutions are designed to grow with your business and handle complex enterprise needs."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "We ensure strict adherence to security standards and industry regulations like GDPR and HIPAA."
  },
  {
    icon: Users,
    title: "AI Strategy Consulting",
    description: "We help enterprises build AI roadmaps that align with long-term business objectives."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Us for Enterprise AI Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the full potential of AI with our enterprise-grade solutions designed for impact and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
