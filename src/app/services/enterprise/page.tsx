import { EnterpriseAppDevelopmentHero} from "@/src/app/components/enterprise/hero"
import { WhatWeOfferEnterprise } from "@/src/app/components/enterprise/what-we-offer"
import { EnterpriseAppBenefits } from "@/src/app/components/enterprise/benefits"
import { WhyChooseUs } from "@/src/app/components/enterprise/why-choose-us"
import { UseCases } from "@/src/app/components/enterprise/use-case"
import { EnterpriseAppDevelopmentProcess } from "@/src/app/components/enterprise/process"
import { FeaturedWorkEnterprise }from "@/src/app/components/enterprise/featured"
import { TechStack} from "@/src/app/components/enterprise/tech-stack"
import { EnterpriseAppExpertise } from "@/src/app/components/enterprise/expertise"
import { IndustriesEnterpriseAppDevelopment } from "@/src/app/components/enterprise/industries"
import { SuccessStories } from "@/src/app/components/enterprise/success-stories"
import { EnterpriseAppDevelopmentFAQ } from "@/src/app/components/enterprise/faq"
import { CTA } from "@/src/app/components/enterprise/CTA"
export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <EnterpriseAppDevelopmentHero />
      <WhatWeOfferEnterprise />
      <EnterpriseAppBenefits />
      <WhyChooseUs />
      <UseCases />
      <EnterpriseAppDevelopmentProcess />
      < FeaturedWorkEnterprise />
      <TechStack />
      < EnterpriseAppExpertise />
      < IndustriesEnterpriseAppDevelopment />
      < SuccessStories />
      <EnterpriseAppDevelopmentFAQ />
      < CTA/> 
      
    </main>
  )}