"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Smartphone, PenTool } from "lucide-react";

const expertiseList = [
  {
    title: "User-Centered UI/UX Design",
    description: "We craft intuitive and engaging user experiences by focusing on seamless navigation and accessibility.",
    icon: <Smartphone className="w-10 h-10 text-primary" />
  },
  {
    title: "Wireframing & Prototyping",
    description: "Our interactive wireframes and high-fidelity prototypes help visualize the app flow before development begins.",
    icon: <Layers className="w-10 h-10 text-primary" />
  },
  {
    title: "Brand-Driven Visual Identity",
    description: "We create aesthetically pleasing designs that align with your brand identity for a consistent user experience.",
    icon: <PenTool className="w-10 h-10 text-primary" />
  },
  {
    title: "Innovative & Modern Aesthetics",
    description: "We stay ahead of design trends to deliver visually appealing and forward-thinking mobile app designs.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />
  }
];

export function MobileAppDesignExpertise() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Expertise in Mobile App Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in crafting visually stunning and user-friendly mobile app designs that
            deliver seamless digital experiences.
          </p>
        </div>

        {/* Expertise List */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MobileAppDesignExpertise;
