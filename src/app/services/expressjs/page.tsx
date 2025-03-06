import {Hero} from "@/src/app/components/expressjs/hero"
import {WhatWeOffer} from "@/src/app/components/expressjs/what-we-offer"
import { Benefits }  from "@/src/app/components/expressjs/benefits"
import {CTA } from "@/src/app/components/expressjs/CTA"
import {Process} from "@/src/app/components/expressjs/process"
import{TechStack }from "@/src/app/components/expressjs/tech-stack"
import {Industries } from "@/src/app/components/expressjs/industries"
import {FAQ}  from "@/src/app/components/expressjs/faq"
 
export default function WebDevelopmentPage() {
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