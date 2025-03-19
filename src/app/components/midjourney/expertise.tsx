import { Image, Brush, Palette, Sparkles, Layers } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Image,
    title: "AI-Generated Art",
    description: "We specialize in creating high-quality AI-generated images using MidJourney, leveraging advanced deep learning models to produce stunning visuals."
  },
  {
    icon: Brush,
    title: "Creative Concept Design",
    description: "Our expertise in AI-driven concept design allows us to generate unique and compelling visuals for branding, marketing, and artistic projects."
  },
  {
    icon: Palette,
    title: "Style Customization",
    description: "We fine-tune AI models to match specific artistic styles, ensuring that each generated image aligns perfectly with client needs and aesthetic preferences."
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description: "We craft highly optimized prompts to maximize MidJourney’s potential, ensuring detailed, high-resolution, and contextually accurate image outputs."
  },
  {
    icon: Layers,
    title: "Image Enhancement & Refinement",
    description: "Beyond AI generation, we enhance and refine images using advanced tools, making adjustments to resolution, lighting, and composition for perfect final outputs."
  }
]

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Swapped to lavender background for the section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            MidJourney Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our core expertise in AI-driven image generation and creative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg transition-transform hover:scale-105"  /* Swapped to beige background for the cards */
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise;
