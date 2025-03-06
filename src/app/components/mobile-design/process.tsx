"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Research",
    description:
      "We start by understanding your goals, target audience, and competitors to create a strong foundation for the design process."
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Our team creates low and high-fidelity wireframes to define the structure and user flow before moving to the design stage."
  },
  {
    title: "UI/UX Design",
    description:
      "We craft visually stunning and intuitive user interfaces, ensuring an engaging experience that aligns with your brand identity."
  },
  {
    title: "User Testing & Feedback",
    description:
      "We conduct usability testing to gather insights, refine designs, and enhance user experience based on real-world feedback."
  },
  {
    title: "Design Handoff & Support",
    description:
      "Once finalized, we provide design assets, style guides, and ongoing support to ensure a seamless development handoff."
  }
];

export function MobileAppDesignProcess() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Our Mobile App Design Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a structured approach to ensure your mobile app design is intuitive, engaging, and user-friendly.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
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
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MobileAppDesignProcess;
