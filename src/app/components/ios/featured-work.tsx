"use client";
import { motion } from "framer-motion";

const projects = [
  {
    company: "SwiftTech Solutions",
    title: "FinTech Mobile App",
    description:
      "We developed a high-performance iOS FinTech application using Swift and SwiftUI, ensuring smooth transactions and real-time financial insights.",
    image: "/images/FinTech Mobile App.svg",
    features: [
      "Seamless Apple Pay integration",
      "Face ID & Touch ID authentication",
      "Live financial data visualization",
      "Optimized for iOS 17+ with SwiftUI",
    ],
  },
  {
    company: "HealthSync",
    title: "AI-Powered Fitness App",
    description:
      "A feature-rich iOS fitness app leveraging AI to provide personalized workout plans and health tracking, enhancing user engagement.",
    image: "/images/AI-Powered Fitness App.svg",
    features: [
      "Real-time motion tracking with Core Motion",
      "AI-driven workout recommendations",
      "HealthKit integration for fitness tracking",
      "Gamified UI for better user engagement",
    ],
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our iOS App Development Showcase</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Explore our innovative iOS applications, built with Swift and SwiftUI, delivering seamless performance and an exceptional user experience.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex-1">
                <span className="text-lg text-black/70">— {project.company}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="mb-6 text-black/80">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto border-2 border-black"
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
