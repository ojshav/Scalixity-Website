'use client'

import { motion } from 'framer-motion'

interface YouTubeProject {
  title: string;
  description: string;
  videoId: string;
  projectUrl: string;
}

const projects: YouTubeProject[] = [
  {
    title: "Scalixity-Ecommerce Website",
    description: "Scalixity is a powerful e-commerce platform with a built-in CRM, designed to help you launch and manage your online store effortlessly.",
    videoId: "EZhu3rh-LB4", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity-dev/Scalixity_ecommerce"
  },
  {
    title: "Scalixity AI Chatbot",
    description: "At Scalixity, we don’t just build chatbots.We build tools that help you scale smarter and grow faster.",
    videoId: "cMpIZsZROAc", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity/smart-commerce"
  },
  {
    title: "Scalixity's AI-Driven CRM Solution",
    description: "An intelligent customer relationship management system designed to streamline operations, enhance customer engagement, and drive business growth.",
    videoId: "gtBVvFeRm-4", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity/smart-commerce"
  },
  {
    title: "Scalixity-GPS Tracker",
    description: "Scalixity-GPS Tracker is an advanced GPS tracking website designed to keep your vehicle secure and monitored at all times.",
    videoId: "JpRnWuI4aLU", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity-dev/GSP_DEVICE"
  }
];

export function YouTubeProjects() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Project Showcases
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Watch our projects in action and see how we transform ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl border border-black transition-colors"
              style={{ backgroundColor: '#F3F1EB' }}
            >
              <div className="aspect-video mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>
              <p className="text-black mb-4">{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 