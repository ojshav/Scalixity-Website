"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced Business Efficiency",
    description: "Enterprise applications streamline business processes, improving efficiency and reducing operational costs."
  },
  {
    title: "Scalability & Performance",
    description: "Designed to handle large-scale operations, our enterprise solutions grow seamlessly with your business."
  },
  {
    title: "Robust Security & Compliance",
    description: "We implement the latest security measures to protect sensitive enterprise data and ensure regulatory compliance."
  },
  {
    title: "Seamless Integration",
    description: "Our enterprise apps integrate smoothly with existing systems, ensuring interoperability and minimizing disruptions."
  },
  {
    title: "Customizable & Flexible",
    description: "Tailored solutions to fit unique business requirements, providing the flexibility to adapt to changing needs."
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Leverage real-time data analytics and AI-powered insights to make informed business decisions."
  }
];

export function EnterpriseAppBenefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            ENTERPRISE APP BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Why Choose Enterprise Application Development
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Drive operational excellence, security, and innovation with our robust enterprise software solutions.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/80 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-black/80">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAppBenefits;
