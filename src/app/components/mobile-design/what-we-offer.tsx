"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const offerings = [
  {
    title: "UI/UX Design",
    description: "We create visually stunning and user-friendly interfaces that enhance engagement and usability."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Transform your ideas into interactive prototypes, ensuring a seamless user experience before development."
  },
  {
    title: "Custom App Design",
    description: "Tailored mobile app designs that align with your brand identity and user needs."
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Designs optimized for both iOS and Android platforms, ensuring a consistent experience."
  },
  {
    title: "Usability Testing",
    description: "Thorough testing to refine user flows and maximize app efficiency and accessibility."
  },
  {
    title: "Design System & Branding",
    description: "We build scalable design systems and branding elements that maintain consistency across all screens."
  }
];

export function MobileAppDesignOfferings() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Mobile App Design Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From conceptualization to execution, we design seamless and engaging mobile experiences 
            that captivate users and drive business success.
          </p>
        </div>

        {/* Offerings List */}
        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:shadow-black/50 shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{offer.title}</h3>
                  <p className="text-black">{offer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MobileAppDesignOfferings;
