"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Market Research & Menu Planning", description: "Analyze food trends, customer preferences, and ingredient sourcing to craft a menu that stands out." },
  { number: "02", title: "Recipe Development & Testing", description: "Perfect flavors, textures, and nutritional balance through rigorous testing and refinement." },
  { number: "03", title: "Sourcing & Supply Chain Optimization", description: "Partner with quality suppliers and streamline logistics for freshness, efficiency, and cost-effectiveness." },
  { number: "04", title: "Kitchen Setup & Automation", description: "Design a workflow with smart kitchen equipment and automation tools to enhance efficiency and consistency." },
  { number: "05", title: "Quality Assurance & Compliance", description: "Implement strict quality control measures, adhere to food safety regulations, and ensure top-tier hygiene standards." },
  { number: "06", title: "Marketing & Launch Strategy", description: "Develop branding, digital presence, and launch campaigns to attract customers and drive engagement." }
];

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-black mb-4">Transforming the Food Industry</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            From concept to execution, follow a structured approach to launching and scaling your food business.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-8 p-6 rounded-xl border border-black bg-[#F3F1EB] shadow-lg max-w-3xl w-full hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-[#F3F1EB] text-2xl font-bold shadow-md">{step.number}</div>
              <div>
                <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                <p className="text-black mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
