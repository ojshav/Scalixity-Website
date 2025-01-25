import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServicePageProps {
  title: string
  description: string
  benefits: string[]
  features: {
    title: string
    description: string
    icon: string
  }[]
  process: {
    title: string
    description: string
  }[]
  technologies: {
    name: string
    icon: string
  }[]
  caseStudies: {
    title: string
    description: string
    image: string
    results: {
      metric: string
      value: string
    }[]
  }[]
}

export function ServicePage({
  title,
  description,
  benefits,
  features,
  process,
  technologies,
  caseStudies
}: ServicePageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#080B16] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-400 mb-12">{description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#7B3FE4] text-white font-medium text-lg hover:bg-[#6E38CC] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0F1629]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#7B3FE4] mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#080B16]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#1A1B26] p-8 rounded-xl">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0F1629]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-[#1A1B26] p-8 rounded-xl">
                <div className="text-[#7B3FE4] text-4xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#080B16]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-[#1A1B26] p-6 rounded-xl text-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#0F1629]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-[#1A1B26] rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 mb-6">{study.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-[#7B3FE4] mb-1">{result.value}</div>
                        <div className="text-sm text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

