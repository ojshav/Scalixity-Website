import Image from "next/image";

const featuredProjects = [
  {
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
<<<<<<< HEAD
    description: "We built DeVoice, which is an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
=======
    description:
      "We built DeVoice, an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/devoice-project.jpg",
>>>>>>> cf22335b95972e647b0e9b14c04c6071b2cdcc49
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
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Generative AI-powered projects
        </h2>
        {featuredProjects.map((project, index) => (
          <div key={index} className="bg-[#A8B2E7] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-800 mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span className="text-gray-900">{feature}</span>
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

