import { Hero } from "@/src/app/components/hero"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { Process } from "@/src/app/components/process"
import { ProjectShowcase } from "@/src/app/components/project-showcase"
import { OurService } from "@/src/app/components/our-service"
import { YouTubeProjects } from "@/src/app/components/youtube-projects"


export default function Home() {
  return (
    <main>
      <div className="w-full">

      </div>
      <Hero />
      <OurService />
      <WhatWeOffer />
      <ProjectShowcase />
      <YouTubeProjects />

      <Process />


    </main>
  )
}

