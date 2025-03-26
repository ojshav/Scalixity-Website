"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "EnterpriseX",
    title: "Modernizing Enterprise Operations with Scalable Solutions",
    description: "We developed a cloud-based enterprise platform that enhances operational efficiency, security, and scalability for large businesses.",
    image: "/images/ai-powered-maintenance.svg",
    features: [
      "Cloud-native architecture for scalability",
      "AI-powered automation for workflow optimization",
      "Advanced security measures for data protection",
      "Seamless integration with existing enterprise systems",
    ],
  },
  {
    company: "HealthCorp",
    title: "Enterprise Healthcare Management System",
    description: "We built a secure, HIPAA-compliant enterprise solution that streamlines hospital operations, patient management, and data analytics.",
    image: "/images/healthcare-analytics.svg",
    features: [
      "Cloud-based patient record management",
      "AI-driven diagnostics and predictive analytics",
      "Secure telemedicine integrations",
      "Enterprise-grade compliance and security",
    ],
  },
  {
    company: "RetailEnterprise",
    title: "Enhancing Retail Operations with AI and Data Analytics",
    description: "Using AI and data analytics, we built a smart retail management platform that optimizes inventory, sales, and customer engagement.",
    image: "/images/Data Analysis.svg",
    features: [
      "AI-powered demand forecasting",
      "Personalized customer engagement tools",
      "Real-time inventory and sales analytics",
      "Seamless omnichannel retail experience",
    ],
  },
];

export function FeaturedWorkEnterprise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">
              OUR FEATURED WORK
            </span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Enterprise App Development Success Stories
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-black/80 transition-colors"
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
              className="bg-[#F3F1EB] border border-black rounded-xl p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-black text-sm">— {project.company}</span>
                  <h3 className="text-2xl font-bold text-black mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-black/80 mb-6">{project.description}</p>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-black/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work/${project.company.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors mt-6"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkEnterprise;
