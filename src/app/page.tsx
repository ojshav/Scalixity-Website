import { LandingHero } from "./components/landing-hero"
import { TrustedCompanies } from "./components/trusted-companies"
import { SuccessStories } from "./components/success-stories"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { Process } from "@/src/app/components/process"
import { GrowthPartner } from "@/src/app/components/growth-partner"
import { ProjectShowcase } from "@/src/app/components/project-showcase"
//import { OurService } from "@/src/app/components/our-service"
import { YouTubeProjects } from "@/src/app/components/youtube-projects"
import { GrowthPartnerBanner } from "@/src/app/components/growth-partner-banner"
import { ScalixityBlends } from "@/src/app/components/scalixity-blends"
import { Testimonials } from "@/src/app/components/testimonials"
import { ResultsSpeak } from "@/src/app/components/results-speak"
import GlobalImpact from "./components/About-us/globalimpact"
import { CTA } from "./components/cta"


export default function Home() {
  return (
    <main>
      <div className="w-full">

      </div>
      <LandingHero />
      <TrustedCompanies />
      <SuccessStories />
      {/*  <OurService /> */}
      <ScalixityBlends />
      <GrowthPartnerBanner />
      <GlobalImpact />
      <WhatWeOffer />
      <GrowthPartner />
      <Process />
      <ProjectShowcase />

      <YouTubeProjects />
      <Testimonials />
      <ResultsSpeak />
      <CTA />
    </main>
  )
}

