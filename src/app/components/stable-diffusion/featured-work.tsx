"use client";

import Image from "next/image";

const featuredWorks = [
  {
    title: "AI-Generated Artwork for Marketing",
    description:
      "Developed high-quality AI-generated visuals for branding and digital marketing campaigns, enhancing engagement and user experience.",
    image: "/work/marketing-ai-art.svg",
  },
  {
    title: "Custom AI Portrait Generator",
    description:
      "Built a Stable Diffusion-powered platform allowing users to create personalized AI-generated portraits with various artistic styles.",
    image: "/work/ai-portrait-generator.svg",
  },
  {
    title: "Concept Art for Game Development",
    description:
      "Generated dynamic AI-assisted concept art for game studios, expediting the design process and improving creative workflows.",
    image: "/work/game-concept-art.svg",
  },
];

export function FeaturedWork() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#A8B2E7" }} // Lavender Background
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#000000" }} // Black Text
          >
            Featured Work
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "#000000" }} // Black Text
          >
            Discover some of our most innovative Stable Diffusion projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-black" // Border added to the card
              style={{ backgroundColor: "#F3F1EB" }} // Soft Warm Beige Card Background
            >
              <div className="mb-4 border border-black rounded-lg overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "#000000" }} // Black Text
              >
                {work.title}
              </h3>
              <p className="mt-2" style={{ color: "#000000" }}>
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
