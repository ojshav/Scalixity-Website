"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "OpenAI Consulting",
    description: "We evaluate your requirements, identify issues that can be addressed using OpenAI models, and consult you on AI model use cases specific to your industry. Our AI specialists help you develop and integrate AI models seamlessly."
  },
  {
    title: "Custom OpenAI Development",
    description: "We specialize in developing custom AI models and solutions using OpenAI's latest models, such as GPT-3.5 Turbo, DALL-E, and CLIP. Our team ensures a smooth and efficient development process tailored to your needs."
  },
  {
    title: "Model Integration",
    description: "Our AI team provides comprehensive assessments and strategic integration of AI models into your existing system, ensuring a secure, scalable, and efficient deployment process."
  },
  {
    title: "Fine-Tuning Models",
    description: "We optimize OpenAI models for specific tasks using techniques like transfer learning, hyperparameter tuning, and data augmentation to enhance accuracy and performance."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            OpenAI-powered Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise in OpenAI models like GPT-3.5 Turbo, DALL-E, and CLIP allows us to build powerful, customized AI solutions for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
