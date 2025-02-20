import { ProductDevelopmentHero } from "@/src/app/components/product/hero"
import { ProductDevelopmentServices } from "@/src/app/components/product/what-we-offer"
import { ProductDevelopmentBenefits } from "@/src/app/components/product/benefits"
import { WhyChooseUs } from "@/src/app/components/product/why-choose-us"
import { UseCases } from "@/src/app/components/product/use-case"
import { ProductDevelopmentProcess } from "@/src/app/components/product/process"
import { FeaturedWorkProductDev }from "@/src/app/components/product/featured-work"
import { TechStack} from "@/src/app/components/product/tech-stack"
import { ProductDevelopmentExpertise } from "@/src/app/components/product/expertise"
import { IndustriesProductDevelopment } from "@/src/app/components/product/industries"
import { SuccessStories } from "@/src/app/components/product/success-stories"
import { ProductDevelopmentFAQ } from "@/src/app/components/product/faq"

export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <ProductDevelopmentHero />
      <ProductDevelopmentServices />
      < ProductDevelopmentBenefits  />
      < WhyChooseUs />
      < UseCases />
      < ProductDevelopmentProcess />
      < FeaturedWorkProductDev />
      < TechStack />
      < ProductDevelopmentExpertise />
     < IndustriesProductDevelopment />
     < SuccessStories />
     <  ProductDevelopmentFAQ />

        
          </main>
        )
      }
      