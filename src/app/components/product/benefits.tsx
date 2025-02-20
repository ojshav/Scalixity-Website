"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Accelerated Time-to-Market",
    description: "Efficient development processes ensure your product reaches the market faster, giving you a competitive edge."
  },
  {
    title: "Cost Efficiency",
    description: "Optimized workflows and best practices reduce development costs while maintaining high quality."
  },
  {
    title: "Scalability & Flexibility",
    description: "Our solutions are designed to grow with your business, ensuring adaptability to future needs."
  },
  {
    title: "User-Centric Approach",
    description: "We prioritize intuitive UI/UX design, ensuring seamless user experiences and higher engagement."
  },
  {
    title: "Robust Security & Compliance",
    description: "Our development adheres to the latest security standards, protecting your data and ensuring compliance."
  },
  {
    title: "Innovative & Cutting-Edge Solutions",
    description: "We leverage the latest technologies and industry trends to create forward-thinking software products."
  }
];

export function ProductDevelopmentBenefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            PRODUCT DEVELOPMENT BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Invest in Product Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, secure, and innovative software solutions help businesses stay ahead of the curve and drive success.
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

export default ProductDevelopmentBenefits;
