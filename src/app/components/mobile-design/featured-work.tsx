"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredProjects = [
  {
    title: "E-Commerce App",
    description: "A seamless shopping experience with an intuitive UI, personalized recommendations, and a smooth checkout process.",
    image: "/projects/ecommerce-app.jpg",
  },
  {
    title: "Healthcare App",
    description: "A telemedicine platform with real-time consultations, appointment scheduling, and secure medical records access.",
    image: "/projects/healthcare-app.jpg",
  },
  {
    title: "Finance & Banking App",
    description: "A secure banking app with AI-powered insights, budgeting tools, and biometric authentication for enhanced security.",
    image: "/projects/finance-app.jpg",
  },
  {
    title: "Fitness & Wellness App",
    description: "A fitness tracker with AI-driven workout plans, activity monitoring, and nutrition recommendations.",
    image: "/projects/fitness-app.jpg",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FEATURED WORK</span>
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
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
