import Image from "next/image";

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
  ];

  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <p className="text-center text-black mb-16 text-sm uppercase tracking-wider font-bold">
          Trusted by data-driven companies
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
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
          Empowering Businesses with Custom Generative AI Solutions
        </h2>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Our AI engineers specialize in developing tailored Generative AI solutions that automate processes, optimize costs, and unlock new revenue opportunities for businesses.
        </p>
      </div>
    </section>
  );
}

export default TrustedBy;
