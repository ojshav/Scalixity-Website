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
    image: "/midjourney/artvisions.jpg",
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
    image: "/midjourney/adcreativepro.jpg",
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
    image: "/midjourney/bookcovergen.jpg",
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
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-foreground mt-4">
              Our MidJourney AI-Powered Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <span className="text-primary text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
