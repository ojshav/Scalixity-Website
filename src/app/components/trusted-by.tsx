import Image from "next/image"

export function TrustedBy() {
  const clients = [
    { name: "Aisle24", logo: "/placeholder.svg?height=48&width=120" },
    { name: "CodmanAI", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Sixfold", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Trapeze", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Synervoz", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Mavex", logo: "/placeholder.svg?height=48&width=120" },
    { name: "NVMS", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Nown", logo: "/placeholder.svg?height=48&width=120" },
    { name: "Landmark", logo: "/placeholder.svg?height=48&width=120" }
  ]

  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-16 text-sm uppercase tracking-wider">
          Trusted by data driven companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-[120px] h-12 relative grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          We help businesses build custom Generative AI solutions that drive measurable growth
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our team of AI engineers and developers specializes in building custom Generative AI solutions that help businesses automate processes, reduce costs, and create new revenue streams.
        </p>
      </div>
    </section>
  )
}

