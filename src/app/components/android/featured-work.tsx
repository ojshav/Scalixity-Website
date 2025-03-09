"use client"

import { motion } from 'framer-motion';

const projects = [
  {
    company: "AppFlow Solutions",
    title: "E-Commerce Android App",
    description: "We developed a seamless, high-performance Android app for AppFlow Solutions, offering intuitive navigation, real-time tracking, and secure payment integrations.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Kotlin-powered native development",
      "Firebase integration for real-time database",
      "Secure payment gateways with Stripe",
      "Optimized UI for various screen sizes"
    ]
  },
  {
    company: "HealthTrack",
    title: "Fitness & Wellness App",
    description: "For HealthTrack, we built a feature-rich Android app to monitor health metrics, provide personalized fitness plans, and sync with wearables.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Bluetooth connectivity with fitness devices",
      "Real-time health data visualization",
      "Push notifications for workout reminders",
      "Interactive user dashboards"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-gradient-to-r from-[#6a0dad] to-[#4c1d95] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Android App Development Showcase</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">Explore how we&apos;ve crafted cutting-edge Android applications, delivering outstanding performance, design, and user engagement.</p>
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
