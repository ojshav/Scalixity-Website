"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "ERP AI Agent",
    title: "Revolutionized ERP System with an AI Agent for Streamlined Order Management",
    description:
      "For a leading American manufacturer, we developed an ERP AI agent to manage customer orders, inventory, and order tracking, improving accuracy and efficiency.",
    image: "/erp-ai-work.jpg",
    features: [
      "Automated order placement and real-time tracking",
      "95% order accuracy with reduced response times",
      "Seamless ERP integration for inventory and pricing updates",
      "Enhanced operational productivity across departments",
    ],
  },
  {
    company: "DeVoice",
    title: "Redefining Restaurant Ordering with a Voice Ordering Agent",
    description:
      "We built DeVoice, an AI-based voice agent designed for restaurants and businesses, integrating advanced voice recognition and natural language processing.",
    image: "/devoice-work-v3.jpg",
    features: [
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses",
      "Multi-language support for diverse customers",
      "Dynamic interaction for enhanced engagement",
    ],
  },
  {
    company: "LegalAlly",
    title: "Reimagine Legal Support Driven by In-Depth Legal Research",
    description:
      "We leveraged Generative AI to speed up legal document analysis and drafting for a medium-sized law firm in Chicago.",
    image: "/legalally-work-v3.jpg",
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
    image: "/nvms-work.jpg",
    features: [
      "Deep learning and computer vision-driven image data extraction",
      "GPT-based NLP chatbot for enhanced customer experience",
      "Improved work efficiency by 80%",
      "Image classification for detecting anomalies",
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
              Our AI-Powered Projects
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
