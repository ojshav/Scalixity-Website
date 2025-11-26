'use client'

import { CTA } from "@/src/app/components/cta";
import { WorkHero } from "@/src/app/components/our work/workhero";
import { WorkProjects as WorkProjectCards } from "@/src/app/components/our work/workproject";

export default function WorkPage() {
  return (
    <div className="w-full">
      <WorkHero />
      <WorkProjectCards />
    
      <CTA />
    </div>
  )
}