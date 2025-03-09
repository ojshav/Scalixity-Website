"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "LegalAlly",
    title: "Reimagine Legal Support Driven by in-Depth Legal Research",
    description:
      "We leveraged Generative AI to fasten legal document analysis and drafting for a medium-sized law firm in Chicago.",
    image: "/images/Reimagine Legal Support Driven by in-Depth Legal Research.svg",
    features: [
      "Legal Chatbot Assistant",
      "Improved Communication Efficiency",
      "Research Time Reduction by 64%",
    ],
  },
  {
    company: "NVMS",
    title: "Reduced Inspection Times for Property Inspectors",
    description:
      "We analyzed a large dataset of NVMS property photos to detect anomalies and built a conversational AI chatbot for efficient customer service.",
    image: "/images/Reduced Inspection Times for Property Inspectors.svg",
    features: [
      "Deep learning and computer vision driven image data extraction",
      "GPT-based NLP chatbot for enhanced customer experience",
      "Improved work efficiency by 80%",
      "Image classification for detecting anomalies",
    ],
  },
  {
    company: "Trapeze",
    title: "Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution",
    description:
      "Using geospatial technology, we supported Trapeze in innovating their existing paratransit transportation system. Our forward-thinking solutions have reduced customer wait times and improved safety features.",
    image: "/images/Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution.svg",
    features: [
      "Real-time vehicle tracking",
      "Advanced algorithms for efficient route planning",
      "In-app communication interfaces",
      "Strict adherence to accessibility and privacy laws",
    ],
  },
  {
    company: "DeVoice",
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
    description:
      "We built DeVoice, which is an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses",
      "Multi-language support for diverse customers",
      "Dynamic interaction for enhanced engagement",
    ],
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              OUR FEATURED WORK
            </span>
            <h2 className="text-4xl font-bold text-foreground mt-4">
              Our Generative AI-powered projects
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
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
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
  );
}
