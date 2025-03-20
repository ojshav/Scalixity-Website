"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "CreativeWave",
    title: "Modern Portfolio Websites",
    description: "We crafted stunning portfolio websites with seamless UI/UX to help professionals showcase their work effortlessly.",
    image: "/images/portfolio-web.svg",
    features: [
      "Custom-built, responsive design",
      "SEO-optimized structure",
      "Interactive elements & animations",
      "Fast-loading & mobile-friendly"
    ]
  },
  {
    company: "CommerceCraft",
    title: "E-Commerce Web Solutions",
    description: "A dynamic and scalable e-commerce platform designed to provide a seamless shopping experience.",
    image: "/images/ecommerce-web.svg",
    features: [
      "User-friendly product pages",
      "Secure payment gateways",
      "AI-powered recommendations",
      "Optimized for high-speed performance"
    ]
  },
  {
    company: "BrandElevate",
    title: "Corporate Website Redesign",
    description: "Revamped corporate websites with sleek and intuitive designs that enhance brand presence.",
    image: "/images/corporate-web.svg",
    features: [
      "Elegant and modern layouts",
      "SEO & accessibility enhancements",
      "Lightning-fast page speeds",
      "Custom integrations & CMS support"
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
              Stunning Web Design Projects We’ve Delivered
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
