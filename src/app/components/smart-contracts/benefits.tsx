"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Trust & Transparency",
    description: "Smart contracts ensure immutable and transparent transactions, eliminating the need for intermediaries."
  },
  {
    title: "Automation & Efficiency",
    description: "Automate complex processes and agreements, reducing manual effort and increasing operational efficiency."
  },
  {
    title: "Security & Fraud Prevention",
    description: "Built on blockchain technology, smart contracts offer high security, preventing fraud and unauthorized alterations."
  },
  {
    title: "Cost Reduction",
    description: "Eliminate third-party involvement, lowering costs associated with transaction verification and contract execution."
  },
  {
    title: "Speed & Accuracy",
    description: "Execute agreements instantly and precisely, minimizing errors and ensuring seamless transactions."
  },
  {
    title: "Interoperability & Flexibility",
    description: "Integrate smart contracts with multiple blockchain platforms for diverse business applications."
  }
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            SMART CONTRACT BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Smart Contract Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance business security, automation, and efficiency with our cutting-edge smart contract solutions.
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
