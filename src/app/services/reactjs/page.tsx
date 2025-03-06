import {Hero} from "@/src/app/components/reactjs/hero"
import {WhatWeOffer} from "@/src/app/components/reactjs/what-we-offer"
import { Benefits }  from "@/src/app/components/reactjs/benefits"
import {FeaturedWork} from "@/src/app/components/reactjs/featured-work"
import {CTA } from "@/src/app/components/reactjs/CTA"
import {Process} from "@/src/app/components/reactjs/process"
import{TechStack }from "@/src/app/components/reactjs/tech-stack"
import {Industries } from "@/src/app/components/reactjs/industries"
import {FAQ}  from "@/src/app/components/reactjs/faq"
 
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <Benefits />
       <FeaturedWork/>
       <Process />
       <TechStack />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}