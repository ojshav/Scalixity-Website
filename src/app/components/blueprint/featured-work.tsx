"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "BlueprintX",
    title: "AI-Powered App Prototyping",
    description: "We developed a rapid AI-driven app blueprinting tool that helps businesses visualize and plan their applications efficiently.",
    image: "/images/ai-prototype.svg",
    features: [
      "Automated feature suggestion based on AI",
      "User-friendly drag-and-drop interface",
      "Cloud-based collaboration for teams",
      "Real-time updates and feedback"
    ]
  },
  {
    company: "BlueprintFlow",
    title: "Streamlined Workflow Automation",
    description: "A scalable automation tool that optimizes business processes, reducing manual work and enhancing productivity.",
    image: "/images/workflow-automation.svg",
    features: [
      "AI-driven process optimization",
      "Seamless third-party integrations",
      "Secure and compliant data handling",
      "Real-time analytics and insights"
    ]
  },
  {
    company: "BlueprintUX",
    title: "Next-Gen UI/UX Design Framework",
    description: "An intelligent UI/UX blueprinting platform that enables rapid prototyping with intuitive design elements.",
    image: "/images/ui-ux-framework.svg",
    features: [
      "Drag-and-drop interface design",
      "Pre-built component libraries",
      "AI-assisted user experience enhancements",
      "Instant preview and feedback system"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our App Blueprint Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-700 transition-colors px-4 py-2 rounded-lg"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center border border-black p-6 rounded-lg"
              style={{ backgroundColor: '#F3F1EB' }}
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <span className="text-black text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors px-4 py-2 rounded-lg mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors px-4 py-2 rounded-lg"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
