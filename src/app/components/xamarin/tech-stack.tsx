"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Cloud } from "lucide-react";

const techStack = [
  {
    title: "Xamarin.Forms & .NET MAUI",
    description: "Cross-platform UI framework for building native apps on iOS, Android, and Windows with shared code.",
    icon: <Smartphone className="w-10 h-10 text-black" />,
  },
  {
    title: "C# & .NET",
    description: "Robust backend and application logic using C# and the .NET ecosystem for seamless performance.",
    icon: <Code className="w-10 h-10 text-black" />,
  },
  {
    title: "Azure & Cloud Services",
    description: "Leverage Microsoft Azure for hosting, authentication, notifications, and scalable backend solutions.",
    icon: <Cloud className="w-10 h-10 text-black" />,
  },
  {
    title: "SQLite & Entity Framework",
    description: "Lightweight, embedded database solutions for offline data storage and efficient management.",
    icon: <Database className="w-10 h-10 text-black" />,
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Xamarin App Development Technologies
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We use cutting-edge tools and frameworks to build high-performance, cross-platform mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{tech.title}</h3>
                  <p className="text-black">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
