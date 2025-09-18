import { TeamMember } from "@/src/app/components/team-member"
import { CTA } from "@/src/app/components/cta"

export default function CompanyPage() {
  const teamMembers = [
    { name: "Ashendra Sharma", role: "CEO & Founder", image: "/placeholder.svg" },
    { name: "Aryan Yadav", role: "CTO", image: "/placeholder.svg" },
  ]

  return (
    <div className="pt-20 bg-[#F3F1EB] text-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12">About Scalixity</h1>
        <div className="space-y-6 max-w-3xl mx-auto mb-12">
          <p className="text-xl">
            Scalixity is a leading AI solutions provider, dedicated to helping businesses harness the power of generative AI and data-driven technologies.
          </p>
          <p>
            Founded in 2024, we&apos;ve been at the forefront of the AI revolution, constantly innovating and adapting to the rapidly evolving landscape of artificial intelligence. Our mission is to democratize AI technology, making it accessible and beneficial for businesses of all sizes across various industries.
          </p>
          <p>
            At Scalixity, we believe in the transformative power of AI to solve complex business challenges and create new opportunities. We&apos;re committed to ethical AI practices and sustainable solutions that not only benefit our clients but also contribute positively to society and the environment.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        {/* Changed from md:grid-cols-3 to md:grid-cols-2 and added max-w-2xl and mx-auto for centering */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      <CTA />
    </div>
  )
}
