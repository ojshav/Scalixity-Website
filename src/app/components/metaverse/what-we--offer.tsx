"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Metaverse Strategy & Consultation",
    description: "We provide expert guidance on leveraging the Metaverse for business growth, helping organizations navigate opportunities, risks, and best practices."
  },
  {
    title: "Virtual World Development",
    description: "Our team builds immersive virtual environments using advanced 3D technologies, enabling businesses to establish a strong presence in the Metaverse."
  },
  {
    title: "Blockchain & NFT Integration",
    description: "We incorporate blockchain technology and NFTs into Metaverse applications, ensuring digital ownership, security, and decentralization."
  },
  {
    title: "AI-Powered Avatars & Interactions",
    description: "We develop AI-driven avatars and conversational agents that enhance user engagement through intelligent interactions and personalized experiences."
  },
  {
    title: "Metaverse Commerce & Economy",
    description: "We create virtual marketplaces, digital goods, and token-based economies, helping businesses monetize their presence in the Metaverse."
  },
  {
    title: "Security & Compliance in the Metaverse",
    description: "We ensure compliance with global regulations and implement robust security measures to protect user data and digital assets within the Metaverse."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Metaverse Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help businesses harness the full potential of the Metaverse, from strategy to execution, ensuring innovation and success in virtual worlds.
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

export default WhatWeOffer;
