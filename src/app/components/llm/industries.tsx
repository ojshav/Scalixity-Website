import Image from 'next/image'

const industries = [
  { name: "Healthcare", icon: "/icons/healthcare.svg" },
  { name: "Finance", icon: "/icons/finance.svg" },
  { name: "E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Education", icon: "/icons/education.svg" },
  { name: "Legal", icon: "/icons/legal.svg" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg" },
  { name: "Customer Service", icon: "/icons/customer-service.svg" },
  { name: "Media & Entertainment", icon: "/icons/media.svg" }
]

export function Industries() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center">
              <div className="bg-[#0F1629] p-4 rounded-lg mb-4 inline-block">
                <Image src={industry.icon} alt={industry.name} width={48} height={48} />
              </div>
              <p className="text-gray-400">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

