"use client"

import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Retail", icon: "/images/icons/retail.svg" },
  { name: "Fintech", icon: "/images/icons/fintech.svg" },
  { name: "SaaS", icon: "/images/icons/saas.svg" },
  { name: "Travel", icon: "/images/icons/travel.svg" },
  { name: "Fitness", icon: "/images/icons/fitness.svg" },
  { name: "Insurance", icon: "/images/icons/insurance.svg" },
  { name: "Construction", icon: "/images/icons/construction.svg" },
  { name: "Manufacturing", icon: "/images/icons/manufacturing.svg" }
]

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Developing effective Generative AI solutions for every industry
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center">
              <div className="bg-[#F3F1EB] border border-black p-4 rounded-lg mb-4 inline-block"> {/* Beige box with black border */}
                <Image src={industry.icon} alt={industry.name} width={48} height={48} />
              </div>
              <p className="text-sm text-black">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries;
