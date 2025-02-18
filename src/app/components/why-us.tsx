import { Layers, Target, Cpu, Cog } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Layers,
    title: "Unmatched Expertise",
    description: "With over 15 years of industry leadership, Scalixity brings unparalleled experience and knowledge to every project. Our team of seasoned professionals leverages cutting-edge advancements and best practices to deliver innovative solutions tailored to your business needs."
  },
  {
    icon: Target,
    title: "Tailored Strategic Solutions",
    description: "We understand that each business has unique challenges and opportunities. Our bespoke approach ensures that our solutions align with your specific goals and strategic vision, driving meaningful and measurable outcomes"
  },
  {
    icon: Cpu,
    title: "Leading-Edge Technology",
    description: "At Scalixity, we harness the latest advancements in AI, ML, and data science to empower your business. Our commitment to technological innovation ensures you stay ahead of the curve, leveraging powerful tools to transform your operations and achieve a competitive advantage."
  },
  {
    icon: Cog,
    title: "Comprehensive End-to-End Support",
    description: "From initial strategy to full implementation and ongoing optimization, Scalixity offers comprehensive support at every stage of our client's digital journey. Our dedicated team works closely with the client to ensure seamless execution and maximize the value of the technology investments."
  }
]

export function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-[#080B16] to-[#0F1629] py-32">
      <div className="container mx-auto px-4">
        <span className="block text-center text-sm text-gray-400 uppercase tracking-wider mb-4">
          WHY US
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Building technology solutions for digital businesses since 2014
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-20">
          We blend strategic insight, advanced technology, and a commitment to excellence to drive
          transformative results for your business. Discover why leading organizations partner with us
          for their digital transformation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#7B3FE4]/10 mb-6">
                <feature.icon className="h-8 w-8 text-[#7B3FE4]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#7B3FE4] text-white hover:bg-[#6E38CC] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

