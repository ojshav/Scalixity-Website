import Image from "next/image";

const industries = [
  { name: "Healthcare", icon: "/images/icons/healthcare.svg" },
  { name: "Finance", icon: "/images/icons/finance.svg" },
  { name: "E-commerce", icon: "/images/icons/ecommerce.svg" },
  { name: "Education", icon: "/images/icons/education.svg" },
  { name: "Legal", icon: "/images/icons/legal.svg" },
  { name: "Manufacturing", icon: "/images/icons/manufacturing.svg" },
  { name: "Customer Service", icon: "/images/icons/Customer Service.svg" },
  { name: "Media & Entertainment", icon: "/images/icons/media.svg" },
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center">
              <div className="bg-[#F3F1EB] p-4 rounded-lg mb-4 inline-block border border-black">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="filter invert"
                />
              </div>
              <p className="text-black">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
