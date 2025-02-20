"use client";

import { motion } from "framer-motion";
import { Layout, Code, Smartphone, Brush } from "lucide-react";

const offerings = [
  {
    title: "Custom Website Design",
    description: "We create tailor-made website designs that align with your brand identity and business goals, ensuring a unique and engaging user experience.",
    icon: <Brush className="w-10 h-10 text-primary" />,
  },
  {
    title: "Responsive & Mobile-First Design",
    description: "Our websites are optimized for all screen sizes, providing a seamless experience across desktops, tablets, and mobile devices.",
    icon: <Smartphone className="w-10 h-10 text-primary" />,
  },
  {
    title: "UI/UX Design & Wireframing",
    description: "We focus on intuitive user experiences with wireframes and high-fidelity UI designs that enhance usability and customer engagement.",
    icon: <Layout className="w-10 h-10 text-primary" />,
  },
  {
    title: "SEO & Performance Optimization",
    description: "Our designs are not only visually stunning but also optimized for speed, SEO, and conversions to drive better online visibility and results.",
    icon: <Code className="w-10 h-10 text-primary" />,
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR SERVICES</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            What We Offer in Web Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver high-quality, user-centric web design solutions that enhance brand presence and improve engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{offer.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground">{offer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
