import {Hero} from "@/src/app/components/web3/hero"
import {WhatWeOffer} from "@/src/app/components/web3/what-we-offer"
import { Benefits }  from "@/src/app/components/web3/benefits"
import { FeaturedWork } from "@/src/app/components/web3/featured-work"
import {CTA } from "@/src/app/components/web3/CTA"
import {Process} from "@/src/app/components/web3/process"
import { SuccessStories } from "@/src/app/components/web3/success-stories"
import {Industries } from "@/src/app/components/web3/industries"
import {FAQ}  from "@/src/app/components/web3/faq"
 
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <Benefits />
       <FeaturedWork/>
       <Process />
       <SuccessStories/>
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}