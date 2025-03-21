import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

export function TrustedBy() {
  const clients: Client[] = [
    { name: 'Client A', logo: '/path/to/logoA.png' },
    { name: 'Client B', logo: '/path/to/logoB.png' },
    // Add more clients here as needed
  ];

  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <p className="text-center text-black mb-16 text-sm uppercase tracking-wider font-bold">
          Trusted by
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
                width={120} // Set a specific width for the image
                height={48} // Set a specific height for the image
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
