import {Hero} from "@/src/app/components/nodejs/hero"
import {WhatWeOffer} from "@/src/app/components/nodejs/what-we-offer"
import { Benefits }  from "@/src/app/components/nodejs/benefits"
import {CTA } from "@/src/app/components/nodejs/CTA"
import {Process} from "@/src/app/components/nodejs/process"
import{TechStack }from "@/src/app/components/nodejs/tech-stack"
import {Industries } from "@/src/app/components/nodejs/industries"
import {FAQ}  from "@/src/app/components/nodejs/faq"
 
export default function WebDevlopmentPage() {
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