"use client";

import { motion } from "framer-motion";
import { Smartphone, Palette, Layers, Star, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: Smartphone,
    title: "User-Centric Design",
    description: "We create intuitive and engaging mobile app experiences tailored for seamless user interaction."
  },
  {
    icon: Palette,
    title: "Custom UI/UX Solutions",
    description: "Our designs are aesthetically pleasing, brand-aligned, and optimized for maximum usability."
  },
  {
    icon: Layers,
    title: "End-to-End Development",
    description: "From wireframing to prototyping, we handle the full design journey for your mobile app."
  },
  {
    icon: Star,
    title: "Industry-Leading Expertise",
    description: "Our team has extensive experience in designing top-tier mobile applications across industries."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "We ensure our designs adhere to security best practices and industry standards."
  },
  {
    icon: Users,
    title: "User Testing & Iteration",
    description: "We refine designs through continuous feedback, ensuring optimal user experience."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Us for Mobile App Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert design team delivers innovative and visually stunning mobile experiences, ensuring user engagement and business success.
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
