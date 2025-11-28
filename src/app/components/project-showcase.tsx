"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prink",
    category: "HEALTH AND WELLNESS",
    year: "2025",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2940&auto=format&fit=crop",
    color: "bg-[#4A0E78]", // Purple
  },
  {
    id: 2,
    title: "Cars Daily",
    category: "TRANSPORTATION",
    year: "2025",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2883&auto=format&fit=crop",
    color: "bg-[#4A0E78]", // Purple
  },
  {
    id: 3,
    title: "Lumina",
    category: "TECHNOLOGY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
    color: "bg-[#4A0E78]", // Purple
  },
  {
    id: 4,
    title: "Elevate",
    category: "FINANCE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2940&auto=format&fit=crop",
    color: "bg-[#4A0E78]", // Purple
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <div
      ref={ref}
      className={`relative h-[80vh] w-screen flex-shrink-0 flex flex-col justify-between p-2 md:p-4 `}
    >
      <div className={`w-full h-full ${project.color} rounded-3xl flex flex-col justify-between relative overflow-hidden`}>
        {/* Project Image Area */}
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800/20">
          <motion.div
            className="relative h-full w-full"
            initial={{ y: "100%" }}
            animate={isInView ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={project.id === 1}
            />
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="flex items-end p-10 justify-between text-white ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider opacity-80">
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
            <h2 className="text-4xl font-bold md:text-7xl tracking-tighter">
              {project.title}
            </h2>
          </div>

          <Link href="/work" className="group rounded-full border border-current p-3 md:p-4 transition-colors hover:bg-white hover:text-black">
            <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className=" py-10 h-[500vh] bg-[#FFF2D5]">
      <div className="sticky -top-6 flex h-screen flex-col overflow-hidden">

        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-8 pb-4 z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D0C0C] mb-2">
            Featured Projects
          </h2>
          <p className="text-[#4A0E78] text-sm md:text-base max-w-xl text-center px-4">
            Explore our portfolio of successful projects that have transformed businesses
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex-1 flex items-center ">
          <motion.div style={{ x }} className="flex gap-0">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}