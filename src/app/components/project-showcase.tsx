"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  liveUrl?: string;
  category?: string;
  year?: string;
  color?: string;
}

interface ApiProject {
  id: number;
  title: string;
  description?: string | null;
  image: string;
  liveUrl?: string | null;
  live_url?: string | null;
  category?: string | null;
  year?: string | null;
  color?: string | null;
  createdAt?: string | null;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <div
      ref={ref}
      className={`relative h-[80vh] w-screen flex-shrink-0 flex flex-col justify-between p-2 md:p-3 lg:p-4 `}
    >
      <div className={`w-full h-full ${project.color || "bg-[#590178]"} rounded-2xl md:rounded-3xl flex flex-col justify-between relative overflow-hidden`}>
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
              className="object-contain lg:object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={project.id === 1}
            />
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="flex items-end p-4 md:p-6 lg:p-10 justify-between text-white ">
          <div className="flex flex-col gap-1 md:gap-2">
            {project.category && (
              <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-medium uppercase tracking-wider opacity-80">
                <span>{project.category}</span>
              </div>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
              {project.title}
            </h2>
          </div>

          <Link href="/work" className="group rounded-full border border-current p-2 md:p-3 lg:p-4 transition-colors hover:bg-white hover:text-black">
            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the end position based on number of projects
  // For n projects, we need to scroll -(n-1)/n * 100% to show all cards
  const scrollEndPercentage = projects.length > 0 
    ? -((projects.length - 1) / projects.length) * 100 
    : -75;
  
  const x = useTransform(scrollYProgress, [0, 1], ["1%", `${scrollEndPercentage}%`]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${baseURL}/api/work/projects`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        
        // Map backend data to component format
        const mappedProjects: Project[] = data.map((project: ApiProject) => ({
          id: project.id,
          title: project.title,
          description: project.description || undefined,
          image: project.image,
          liveUrl: project.liveUrl || project.live_url || undefined,
          category: project.category || undefined,
          year: project.year || new Date(project.createdAt || Date.now()).getFullYear().toString(),
          color: project.color || "bg-[#590178]"
        }));

        // Reverse the array to show first project entered first (oldest first)
        setProjects(mappedProjects.reverse());
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section ref={targetRef} className=" py-10 h-[500vh] bg-[#FFF2D5]">
      <div className="sticky -top-6 flex h-screen flex-col overflow-hidden">

        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-4 md:pt-6 lg:pt-8 pb-3 md:pb-4 z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0D0C0C] mb-1 md:mb-2">
            Featured Projects
          </h2>
          <p className="text-[#590178] text-xs md:text-sm lg:text-base max-w-xl text-center px-4">
            Explore our portfolio of successful projects that have transformed businesses
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex-1 flex items-center ">
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <p className="text-[#4A0E78] text-base md:text-lg">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="w-full flex items-center justify-center">
              <p className="text-red-600 text-base md:text-lg">Error: {error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="w-full flex items-center justify-center">
              <p className="text-[#4A0E78] text-base md:text-lg">No projects found</p>
            </div>
          ) : (
            <motion.div style={{ x }} className="flex gap-0">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}