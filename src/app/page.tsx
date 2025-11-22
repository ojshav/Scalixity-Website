import { Hero } from "@/src/app/components/hero"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { WhyUs } from "@/src/app/components/why-us"
import { Process } from "@/src/app/components/process"
import { ProjectShowcase } from "@/src/app/components/project-showcase"
import { OurService } from "@/src/app/components/our-service"
import { YouTubeProjects } from "@/src/app/components/youtube-projects";
import Work from "@/src/app/components/work"


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

