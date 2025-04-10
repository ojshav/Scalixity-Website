import { Hero } from "@/src/app/components/hero"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { WhyUs } from "@/src/app/components/why-us"
import { CaseStudies } from "@/src/app/components/case-studies"
import { ProjectShowcase } from "@/src/app/components/project-showcase"
import { OurProcess } from "@/src/app/components/our-process"
import { Testimonials } from "@/src/app/components/testimonials"
import { BlogPosts } from "@/src/app/components/blog-posts"
import { CTA } from "@/src/app/components/cta"
import { YouTubeProjects } from "@/src/app/components/youtube-projects";
import Work from "@/src/app/components/work"

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <WhyUs />
      <ProjectShowcase />
      <Work />
      <YouTubeProjects />
      <CaseStudies />
      <OurProcess />
      <Testimonials />
      <BlogPosts />
      <CTA />  
    </main>
  )
}

