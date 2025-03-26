"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "Trapeze",
    title:
      "Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution",
    description:
      "Using geospatial technology, we supported Trapeze in innovating their existing paratransit transportation system. Our forward-thinking solutions have reduced customer wait times and improved safety features.",
    image: "/images/Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution.svg",
    features: [
      "Real-time vehicle tracking",
      "Advanced algorithms for efficient route planning"
    ]
  },
  {
    company: "LegalAlly",
    title: "Reimagine Legal Support Driven by in-Depth Legal Research",
    description:
      "We leveraged Generative AI to fasten legal document analysis and drafting for a medium-sized law firm in Chicago.",
    image: "/images/Reimagine Legal Support Driven by in-Depth Legal Research.svg",
    features: [
      "Legal Chatbot Assistant",
      "Improved Communication Efficiency"
    ]
  },
  {
    company: "DeVoice",
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
    description:
      "We built DeVoice, which is an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">
              OUR FEATURED WORK
            </span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Generative AI-powered projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
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
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F1EB] p-6 rounded-xl border border-black" /* Soft warm beige box with border */
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <span className="text-black text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">
                  {project.title}
                </h3>
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
                  className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-black"> {/* Image container with border */}
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
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
