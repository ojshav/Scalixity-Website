import { LandingHero } from "@/src/app/components/landing-hero"
import { TrustedCompanies } from "@/src/app/components/trusted-companies"
import { SuccessStories } from "@/src/app/components/success-stories"
import { GrowthPartner } from "@/src/app/components/growth-partner"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { Process } from "@/src/app/components/process"
import { ProjectShowcase } from "@/src/app/components/project-showcase"
import { OurService } from "@/src/app/components/our-service"
import { YouTubeProjects } from "@/src/app/components/youtube-projects"


export default function Home() {
  return (
    <main>
      <LandingHero />
      <TrustedCompanies />
      <SuccessStories />
      <GrowthPartner />
      <OurService />
      <WhatWeOffer />
      <ProjectShowcase />
      <YouTubeProjects />

      <Process />


    </main>
  )
}

