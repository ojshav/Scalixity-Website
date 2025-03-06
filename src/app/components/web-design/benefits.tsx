"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Rocket, Eye, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Responsive & Mobile-Friendly",
    description: "We create web designs that adapt seamlessly across all devices, ensuring a smooth user experience on desktops, tablets, and smartphones.",
    icon: <LayoutGrid className="w-10 h-10 text-primary" />,
  },
  {
    title: "Faster Load Times",
    description: "Our optimized designs improve website performance, ensuring quick load times that enhance user engagement and SEO rankings.",
    icon: <Rocket className="w-10 h-10 text-primary" />,
  },
  {
    title: "Visually Stunning UI/UX",
    description: "We focus on creating aesthetically pleasing and user-friendly interfaces that keep visitors engaged and improve conversions.",
    icon: <Eye className="w-10 h-10 text-primary" />,
  },
  {
    title: "SEO & Conversion Optimized",
    description: "Our designs are built with SEO best practices and conversion strategies to help your website rank higher and drive more sales.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">BENEFITS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Our Web Design Services?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our web design solutions offer speed, aesthetics, and performance, ensuring your business stands out in the digital space.
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
