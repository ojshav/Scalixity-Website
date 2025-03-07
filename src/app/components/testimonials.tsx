import Image from 'next/image'

const testimonials = [
  {
    quote: "Scalixity's AI solutions have transformed our business operations, leading to a 30% increase in efficiency.",
    author: "John Doe",
    position: "CEO, TechCorp",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "The team at Scalixity delivered beyond our expectations. Their AI-powered analytics have given us invaluable insights.",
    author: "Jane Smith",
    position: "CTO, DataDrive",
    image: "/images/testimonial-2.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="bg-[#F3F1EB] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from businesses we&apos;ve helped transform with our AI and blockchain solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#A8B2E7] p-8 rounded-xl border border-black">
              <p className="text-black text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.author} width={64} height={64} className="rounded-full mr-4" />
                <div>
                  <p className="text-black font-semibold">{testimonial.author}</p>
                  <p className="text-gray-800">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
