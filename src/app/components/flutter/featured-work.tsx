"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "HealthSync",
    title: "Revolutionizing Healthcare with Flutter Apps",
    description:
      "Developed a HIPAA-compliant telemedicine app with real-time consultations, appointment scheduling, and secure medical record management.",
    image: "/images/Revolutionizing Healthcare with Flutter Apps.svg",
    features: [
      "Cross-platform support for iOS & Android",
      "Secure video consultations",
      "Integrated cloud-based medical records",
      "Push notifications for reminders",
    ],
  },
  {
    company: "ShopEase",
    title: "Elevating E-Commerce with Flutter",
    description:
      "Built a dynamic e-commerce platform with a seamless UI, personalized recommendations, and real-time order tracking.",
    image: "/images/Elevating E-Commerce with Flutter.svg",
    features: [
      "Flutter UI for smooth navigation",
      "AI-powered personalized shopping",
      "Secure payment gateway integration",
      "Live order tracking system",
    ],
  },
  {
    company: "EduConnect",
    title: "Empowering Education with Flutter Apps",
    description:
      "Developed an e-learning platform with interactive courses, live video sessions, and AI-driven performance tracking for students.",
    image: "/images/Empowering Education with Flutter Apps.svg",
    features: [
      "Real-time classroom sessions",
      "AI-driven learning analytics",
      "Seamless student-teacher interaction",
      "Offline course access",
    ],
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">
              OUR FEATURED WORK
            </span>
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
              className="relative bg-[#F3F1EB] border-2 border-black rounded-xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8">
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
                    className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors mt-6"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative h-[400px] md:h-full flex justify-center items-center p-4">
                  <div className="border-2 border-black rounded-xl overflow-hidden w-full h-full">
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
