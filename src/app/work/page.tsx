'use client'
import WorkProjects from '@/src/app/components/work'
import { CaseStudies } from "@/src/app/components/case-studies";
import { CTA } from "@/src/app/components/cta";
import { YouTubeProjects } from "@/src/app/components/youtube-projects";

export default function WorkPage() {
  return (
    <div className="bg-[#F3F1EB] pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12 text-black">Our Work</h1>
        <p className="text-xl text-center text-gray-900 mb-12">Discover how we&apos;ve helped businesses transform with AI</p>
      </div>
      
      <WorkProjects />
      <YouTubeProjects />
      <CaseStudies />
      <CTA />
    </div>
  )
}