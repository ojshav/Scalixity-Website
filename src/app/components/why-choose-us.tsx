import { CheckCircle } from 'lucide-react'

const reasons = [
  "Expertise in cutting-edge AI and blockchain technologies",
  "Tailored solutions for your specific business needs",
  "Proven track record of successful implementations",
  "Dedicated team of skilled developers and consultants",
  "Commitment to innovation and staying ahead of industry trends",
  "Transparent communication and project management"
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#080B16] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            <span className="text-black">Building technology solutions for digital businesses since 2014</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start border-2 border-black p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{reason}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1A1B26] p-8 rounded-xl border-2 border-black">
            <h3 className="text-2xl font-bold text-white mb-6">Our Commitment</h3>
            <p className="text-gray-400 mb-6">
              At Scalixity, we&apos;re committed to delivering exceptional AI and blockchain solutions that drive real business value. Our team of experts combines deep technical knowledge with industry insights to create innovative, scalable, and secure solutions tailored to your unique needs.
            </p>
            <p className="text-gray-400">
              We believe in building long-term partnerships with our clients, providing ongoing support and guidance to ensure the continued success of your AI and blockchain initiatives.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#590178] text-white py-3 px-8 rounded-lg font-semibold border-2 border-black">Contact Us</button>
        </div>
      </div>
    </section>
  )
}

