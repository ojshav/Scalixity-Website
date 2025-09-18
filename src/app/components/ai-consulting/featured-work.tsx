import Image from "next/image";

const featuredProjects = [
  {
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
    description:
      "We built DeVoice, an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "Futuristic Generative AI Solution for the Food & Beverage industry",
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses",
      "Multi-language support for diverse customers",
      "Dynamic interaction for enhanced engagement"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our Generative AI-powered projects
        </h2>
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#F3F1EB] rounded-lg overflow-hidden border border-[#3D3D3D] hover:border-black transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
