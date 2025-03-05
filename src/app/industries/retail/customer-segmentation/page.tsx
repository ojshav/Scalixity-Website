import {Hero} from "@/src/app/components/industries/retail/customer-segmentation/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/customer-segmentation/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/customer-segmentation/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/customer-segmentation/benefits"
import {CTA } from "@/src/app/components/industries/retail/customer-segmentation/CTA"
import {Process} from "@/src/app/components/industries/retail/customer-segmentation/process"
import {FAQ}  from "@/src/app/components/industries/retail/customer-segmentation/faq"
 
export default function HealthcarePage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIApplications/>
        <Benefits />
       <Process />
       <CTA />
       <FAQ />
       
      </main>
    )}