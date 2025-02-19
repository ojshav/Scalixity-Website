"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const capabilities = [
  {
    title: "User-Centered UI/UX Design",
    description: "We create intuitive and visually appealing app interfaces that enhance user engagement and satisfaction.",
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Our designs ensure seamless experiences across iOS, Android, and other mobile platforms.",
  },
  {
    title: "Wireframing & Prototyping",
    description: "We provide detailed wireframes and interactive prototypes to validate concepts before development.",
  },
  {
    title: "Brand Consistency",
    description: "We align mobile app designs with your brand identity, ensuring consistency across all touchpoints.",
  },
  {
    title: "Accessibility & Inclusivity",
    description: "Our designs follow accessibility guidelines, making apps user-friendly for everyone, including people with disabilities.",
  },
  {
    title: "Performance-Optimized UI",
    description: "We design lightweight, high-performance interfaces that offer fast load times and smooth interactions.",
  },
];

export function Capabilities() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">CAPABILITIES</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">Our Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From wireframing to final UI, our expertise ensures a seamless, engaging mobile app experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
