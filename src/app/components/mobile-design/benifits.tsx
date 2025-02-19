"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced User Experience",
    description: "A well-designed app ensures smooth navigation and intuitive interactions, leading to higher user satisfaction."
  },
  {
    title: "Increased Engagement & Retention",
    description: "Visually appealing and user-friendly interfaces keep users engaged and encourage long-term usage."
  },
  {
    title: "Brand Consistency",
    description: "We create a cohesive design that aligns with your brand identity, ensuring recognition and trust."
  },
  {
    title: "Faster Development Process",
    description: "Well-structured designs reduce development time, minimizing rework and ensuring seamless implementation."
  },
  {
    title: "Higher Conversion Rates",
    description: "Optimized UI/UX design helps drive conversions, whether it's user sign-ups, purchases, or interactions."
  },
  {
    title: "Competitive Advantage",
    description: "A modern and innovative design sets your app apart from competitors, attracting more users and investors."
  }
];

export function MobileAppDesignBenefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            DESIGN BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Great Mobile App Design Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A well-crafted design isn't just about aesthetics; it enhances usability, boosts engagement, 
            and drives business success.
          </p>
        </div>

        {/* Benefits List */}
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
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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

export default MobileAppDesignBenefits;
