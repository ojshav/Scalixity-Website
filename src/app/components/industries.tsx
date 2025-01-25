import Link from 'next/link'
import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg", link: "/industries/healthcare" },
  { name: "Finance", icon: "/icons/finance.svg", link: "/industries/finance" },
  { name: "Retail", icon: "/icons/retail.svg", link: "/industries/retail" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg", link: "/industries/manufacturing" },
  { name: "Logistics", icon: "/icons/logistics.svg", link: "/industries/logistics" },
  { name: "Energy", icon: "/icons/energy.svg", link: "/industries/energy" }
]

export function Industries() {
  return (
    <div className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.link} className="group">
              <div className="bg-[#1A1B26] p-6 rounded-lg text-center transition-all duration-300 group-hover:bg-purple-600">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

