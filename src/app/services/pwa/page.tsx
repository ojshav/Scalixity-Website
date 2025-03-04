import {Hero} from "@/src/app/components/pwa/hero"
import {WhatWeOffer} from "@/src/app/components/pwa/what-we-offer"
import { Benefits }  from "@/src/app/components/pwa/benefits"
import {CTA } from "@/src/app/components/pwa/CTA"
import {Process} from "@/src/app/components/pwa/process"
import{TechStack }from "@/src/app/components/pwa/tech-stack"
import {Industries } from "@/src/app/components/pwa/industries"
import {FAQ}  from "@/src/app/components/pwa/faq"
 
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <Benefits />
       <Process />
       <TechStack />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}