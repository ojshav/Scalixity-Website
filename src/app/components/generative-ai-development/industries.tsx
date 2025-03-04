import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Retail", icon: "/icons/retail.svg" },
  { name: "Fintech", icon: "/icons/fintech.svg" },
  { name: "SaaS", icon: "/icons/saas.svg" },
  { name: "Travel", icon: "/icons/travel.svg" },
  { name: "Fitness", icon: "/icons/fitness.svg" },
  { name: "Insurance", icon: "/icons/insurance.svg" },
  { name: "Construction", icon: "/icons/construction.svg" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg" }
]

export function Industries() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Developing effective Generative AI solutions for every industry</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center">
              <div className="bg-[#0F1629] p-4 rounded-lg mb-4 inline-block">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} />
              </div>
              <p className="text-sm text-gray-400">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

