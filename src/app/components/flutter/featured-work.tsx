"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "HealthSync",
    title: "Revolutionizing Healthcare with Flutter Apps",
    description: "Developed a HIPAA-compliant telemedicine app with real-time consultations, appointment scheduling, and secure medical record management.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Cross-platform support for iOS & Android",
      "Secure video consultations",
      "Integrated cloud-based medical records",
      "Push notifications for reminders"
    ]
  },
  {
    company: "ShopEase",
    title: "Elevating E-Commerce with Flutter",
    description: "Built a dynamic e-commerce platform with a seamless UI, personalized recommendations, and real-time order tracking.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Flutter UI for smooth navigation",
      "AI-powered personalized shopping",
      "Secure payment gateway integration",
      "Live order tracking system"
    ]
  },
  {
    company: "EduConnect",
    title: "Empowering Education with Flutter Apps",
    description: "Developed an e-learning platform with interactive courses, live video sessions, and AI-driven performance tracking for students.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Real-time classroom sessions",
      "AI-driven learning analytics",
      "Seamless student-teacher interaction",
      "Offline course access"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Flutter-Powered Mobile App Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
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
                  className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-black bg-[#F3F1EB]"> {/* Beige Box */}
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
            className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
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
