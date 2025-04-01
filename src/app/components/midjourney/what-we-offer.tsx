"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom AI-Generated Artwork",
    description:
      "Our MidJourney experts can create high-quality AI-generated images tailored to your brand or creative needs. Whether you need digital artwork, concept designs, or unique illustrations, we can fine-tune MidJourney's capabilities to deliver visually stunning results.",
  },
  {
    title: "MidJourney API Integration",
    description:
      "We can seamlessly integrate MidJourney's AI-powered image generation into your applications, websites, or workflows. This enables businesses to generate custom images dynamically based on user inputs or predefined parameters.",
  },
  {
    title: "AI-Powered Branding & Marketing Assets",
    description:
      "Our team can use MidJourney to generate compelling visuals for branding, advertising, and marketing campaigns. From social media graphics to promotional materials, we ensure that AI-generated content aligns with your brand identity.",
  },
  {
    title: "Creative Concept & Ideation Assistance",
    description:
      "Leverage MidJourney's AI to explore creative ideas, visual styles, and design variations effortlessly. Our experts help artists, designers, and businesses brainstorm and visualize concepts with AI-assisted creativity.",
  },
  {
    title: "Fine-Tuning & Customization",
    description:
      "We offer customization and prompt engineering services to refine MidJourney’s output according to specific artistic preferences. This includes adjusting styles, compositions, and detailing to meet unique creative goals.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="py-24" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className="text-sm uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            WHAT WE OFFER
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ color: "#000000" }}
          >
            Our MidJourney AI Services
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "#000000" }}
          >
            Unlock the power of AI-driven creativity with our MidJourney services. From
            custom AI-generated visuals to seamless API integrations, we help businesses
            and creators harness the full potential of AI-powered design and artwork
            generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl hover:border-black transition-colors border-2 border-black" // Added black border here
              style={{
                backgroundColor: "#F3F1EB",
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: "#000000" }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "#000000" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
