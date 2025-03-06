"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    company: "UI Masters",
    title: "Modern React Dashboards",
    description: "We collaborated with UI Masters to create responsive and dynamic dashboards using React.js. These dashboards deliver real-time data visualization and seamless user experiences.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Interactive charts and graphs with Chart.js",
      "Custom hooks for state management",
      "Optimized performance using React.memo",
      "Seamless API integration with Axios"
    ]
  },
  {
    company: "DevStack",
    title: "Scalable E-Commerce Platform",
    description: "For DevStack, we built a feature-rich e-commerce platform with React.js, ensuring fast loading times, dynamic routing, and smooth animations.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Server-side rendering with Next.js",
      "Component-based architecture",
      "State management using Redux",
      "Enhanced user experience with Framer Motion"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#6510A9] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our React.js Development Showcase</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">Explore how we've crafted modern web applications using React.js, delivering outstanding UI/UX and robust functionality.</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <span className="text-lg text-white/70">— {project.company}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="mb-6 text-white/80">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;