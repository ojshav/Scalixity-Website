import Image from 'next/image'

interface IndustryDetailProps {
  title: string
  description: string
  image: string
  benefits: string[]
  caseStudy: {
    title: string
    description: string
  }
}

export function IndustryDetail({ title, description, image, benefits, caseStudy }: IndustryDetailProps) {
  return (
    <div className="bg-[#0F1019] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">{title}</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">{description}</p>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Image src={image} alt={title} width={600} height={400} className="rounded-lg" />
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">How AI Transforms {title}</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#1A1B26]
p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Case Study: {caseStudy.title}</h2>
          <p className="text-gray-300">{caseStudy.description}</p>
        </div>
      </div>
    </div>
  )
}

