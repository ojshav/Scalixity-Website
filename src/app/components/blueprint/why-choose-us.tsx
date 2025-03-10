"use client";

import { motion } from "framer-motion";
import { Map, PencilRuler, Code, Layers, ShieldCheck, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Map,
    title: "Strategic Planning",
    description: "We craft detailed app blueprints that align with your business goals and ensure long-term success."
  },
  {
    icon: PencilRuler,
    title: "Wireframing & Prototyping",
    description: "Our design-first approach creates intuitive wireframes and interactive prototypes for a seamless user experience."
  },
  {
    icon: Code,
    title: "Technical Architecture",
    description: "We define the right tech stack and infrastructure to support scalability and performance."
  },
  {
    icon: Layers,
    title: "End-to-End Documentation",
    description: "Comprehensive documentation ensures smooth development with clear specifications and guidelines."
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment & Security",
    description: "We identify potential risks early and incorporate security best practices into the blueprint."
  },
  {
    icon: Rocket,
    title: "Faster Development & Deployment",
    description: "A well-structured blueprint accelerates the development process and ensures a successful launch."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Us for App Blueprint Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach to app blueprinting ensures your project is built on a solid foundation, reducing risks and enhancing efficiency.
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
              className="p-8 rounded-xl border border-black transition-colors"
              style={{ backgroundColor: '#F3F1EB' }}
            >
              <reason.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
              <p className="text-black">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

