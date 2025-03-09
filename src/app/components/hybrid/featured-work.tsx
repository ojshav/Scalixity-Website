"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    company: "AppFusion",
    title: "Cross-Platform E-Commerce App",
    description: "We partnered with AppFusion to build a hybrid e-commerce app that seamlessly works on both iOS and Android. The app delivers a native-like experience while leveraging a single codebase.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Unified codebase with React Native",
      "Fast load times with optimized APIs",
      "Push notifications for real-time updates",
      "Offline functionality using local storage"
    ]
  },
  {
    company: "TechWave",
    title: "Hybrid Healthcare App",
    description: "For TechWave, we developed a hybrid healthcare app that allows patients to book appointments, chat with doctors, and receive real-time notifications—all from one platform.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Cross-platform compatibility",
      "Integrated live chat using WebSockets",
      "Secure data storage with encryption",
      "Smooth UI animations with Framer Motion"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#6510A9] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Hybrid App Development Showcase</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">Explore how we&apos;ve built powerful cross-platform applications, delivering seamless experiences across iOS and Android.</p>
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
