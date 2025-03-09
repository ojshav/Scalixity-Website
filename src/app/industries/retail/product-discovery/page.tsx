import {Hero} from "@/src/app/components/industries/retail/product-discovery/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/product-discovery/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/product-discovery/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/product-discovery/benefits"
import {CTA } from "@/src/app/components/industries/retail/product-discovery/CTA"
import {Process} from "@/src/app/components/industries/retail/product-discovery/process"
import {FAQ}  from "@/src/app/components/industries/retail/product-discovery/faq"
 
export default function RetailPage() {
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