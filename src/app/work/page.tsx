'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { CTA } from "@/src/app/components/cta";
import { CaseStudies } from "@/src/app/components/case-studies";

interface Project {
  id: string;
  title: string;
  description: string;
  live_url: string;
  image: string;
}

export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://kea.mywire.org:5000/api/work/projects')
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        
        const data = await response.json()
        setProjects(data)
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12 text-sky-50">Our Work</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Discover how we&apos;ve helped businesses transform with AI</p>
      </div>
      
      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <span className="block text-sm text-black uppercase tracking-wider mb-4">
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
            AI Solutions we have built for our clients
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          ) : (
            projects.map((project, index) => (
              <motion.div 
                key={project.id || index} 
                className="relative bg-[#9FA8DA] border border-black rounded-xl overflow-hidden mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-black mb-6">
                      {project.title}
                    </h3>
                    <p className="text-black mb-8 text-lg">
                      {project.description}
                    </p>
                    <div>
                      <a 
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                      >
                        View Live Project <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
      <CaseStudies />
      <CTA />
    </div>
  )
}