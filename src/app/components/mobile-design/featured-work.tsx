"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredProjects = [
  {
    title: "E-Commerce App",
    description: "A seamless shopping experience with an intuitive UI, personalized recommendations, and a smooth checkout process.",
    image: "/images/icons/marketing.svg",
  },
  {
    title: "Healthcare App",
    description: "A telemedicine platform with real-time consultations, appointment scheduling, and secure medical records access.",
    image: "/images/icons/healthcare.svg",
  },
  {
    title: "Finance & Banking App",
    description: "A secure banking app with AI-powered insights, budgeting tools, and biometric authentication for enhanced security.",
    image: "/images/icons/finance.svg",
  },
  {
    title: "Fitness & Wellness App",
    description: "A fitness tracker with AI-driven workout plans, activity monitoring, and nutrition recommendations.",
    image: "/images/icons/fitness.svg",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-gradient-to-b from-[#080B16] to-[#121826] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-primary/70 uppercase tracking-wider">FEATURED WORK</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">Our Mobile App Designs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our latest mobile app designs that combine aesthetics, functionality, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-primary/20 bg-gradient-to-r from-[#1e293b] to-[#334155] hover:from-primary/30 hover:to-primary/50 transition-all duration-500 shadow-lg hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;



