import Image from "next/image"

export function ClientLogos() {
  const clients = [
    { name: "Aisle24", logo: "/placeholder.svg" },
    { name: "CodmanAI", logo: "/placeholder.svg" },
    { name: "Sixfold", logo: "/placeholder.svg" },
    { name: "Trapeze", logo: "/placeholder.svg" },
    { name: "Synervoz", logo: "/placeholder.svg" },
    { name: "Mavex", logo: "/placeholder.svg" },
    { name: "NVMS", logo: "/placeholder.svg" },
    { name: "Nown", logo: "/placeholder.svg" },
  ]

  return (
    <div className="py-12">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by data driven companies
      </p>
      <div className="container flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {clients.map((client) => (
          <div key={client.name} className="w-24 h-12 relative grayscale opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

