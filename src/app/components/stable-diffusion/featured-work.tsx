"use client";

import Image from "next/image";

const featuredWorks = [
  {
    title: "AI-Generated Artwork for Marketing",
    description: "Developed high-quality AI-generated visuals for branding and digital marketing campaigns, enhancing engagement and user experience.",
    image: "/work/marketing-ai-art.jpg",
  },
  {
    title: "Custom AI Portrait Generator",
    description: "Built a Stable Diffusion-powered platform allowing users to create personalized AI-generated portraits with various artistic styles.",
    image: "/work/ai-portrait-generator.jpg",
  },
  {
    title: "Concept Art for Game Development",
    description: "Generated dynamic AI-assisted concept art for game studios, expediting the design process and improving creative workflows.",
    image: "/work/game-concept-art.jpg",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Featured Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover some of our most innovative Stable Diffusion projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border">
              <Image src={work.image} alt={work.title} width={400} height={300} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-white">{work.title}</h3>
              <p className="text-gray-400 mt-2">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
