"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    company: "ArtVisions",
    title: "Revolutionizing Digital Art Creation with MidJourney AI",
    description: "We assisted ArtVisions in integrating MidJourney AI to automate and enhance their creative workflows, enabling artists to generate high-quality visuals with minimal effort.",
    image: "/midjourney/artvisions.webp",
    features: [
      "AI-assisted artwork generation",
      "Customizable artistic styles",
      "High-resolution image rendering",
      "Seamless API integration for automation"
    ]
  },
  {
    company: "AdCreativePro",
    title: "Enhancing Ad Creativity with MidJourney AI-Generated Visuals",
    description: "Using MidJourney AI, we empowered AdCreativePro to generate stunning, campaign-ready visual assets, reducing design turnaround time and improving ad performance.",
    image: "/midjourney/adcreativepro.webp",
    features: [
      "Automated ad image generation",
      "Adaptive creative suggestions",
      "Enhanced visual storytelling",
      "Faster campaign launch times"
    ]
  },
  {
    company: "BookCoverGen",
    title: "Transforming Book Cover Designs with AI-Generated Art",
    description: "We leveraged MidJourney AI to help BookCoverGen create unique, eye-catching book covers tailored to different genres, saving authors time and money.",
    image: "/midjourney/bookcovergen.webp",
    features: [
      "Genre-specific AI-generated covers",
      "High-resolution and print-ready designs",
      "Customizable style and theme options",
      "Streamlined publishing workflow"
    ]
  }
]

export function FeaturedWork() {
  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Soft warm beige */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our MidJourney AI-Powered Projects
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
              className="grid md:grid-cols-2 gap-8 items-center bg-[#A8B2E7] p-8 rounded-xl border border-black shadow-lg"
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
                  href={`/work/${project.company.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden hover:scale-105 transition-transform">
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
  )
}

export default FeaturedWork;

