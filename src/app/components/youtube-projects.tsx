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
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with Next.js and OpenAI integration, featuring advanced natural language processing capabilities.",
    videoId: "UrsmFxEIp5k", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity/ai-chat"
  },
  {
    title: "Blockchain Analytics Dashboard",
    description: "Interactive dashboard for real-time blockchain data visualization using React and Web3 technologies.",
    videoId: "M7lc1UVf-VE", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity/blockchain-analytics"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AI-powered product recommendations and real-time inventory management.",
    videoId: "rfscVS0vtbw", // Sample YouTube video ID
    projectUrl: "https://github.com/scalixity/smart-commerce"
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
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 