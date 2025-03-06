"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Decentralization & Security",
    description: "Stellar's blockchain ensures a secure, decentralized network for fast and reliable transactions."
  },
  {
    title: "Fast & Low-Cost Transactions",
    description: "Stellar enables near-instant transactions with minimal fees, making it ideal for cross-border payments."
  },
  {
    title: "Interoperability & Smart Contracts",
    description: "Stellar facilitates seamless integration with existing financial systems and supports smart contracts."
  },
  {
    title: "Scalability & Efficiency",
    description: "With a high transaction throughput, Stellar is designed to scale efficiently while maintaining network performance."
  },
  {
    title: "Financial Inclusion & Accessibility",
    description: "Stellar focuses on providing accessible financial solutions to unbanked and underbanked populations worldwide."
  },
  {
    title: "Eco-Friendly Consensus Mechanism",
    description: "Using the Stellar Consensus Protocol (SCP), the network achieves consensus efficiently without high energy consumption."
  }
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            STELLAR APP BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Stellar for Blockchain Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enabling borderless transactions with speed, security, and sustainability.
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

export default Benefits;
