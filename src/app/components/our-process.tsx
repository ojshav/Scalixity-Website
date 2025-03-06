import Link from 'next/link'

const processSteps = [
  {
    title: "Executive Briefing",
    duration: "2 Hours",
    description: "Initial consultation and requirements gathering"
  },
  {
    title: "Technology Assessment",
    duration: "2-3 Days",
    description: "Technical evaluation and solution planning"
  },
  {
    title: "Proof of Concept (POC)",
    duration: "8-12 Weeks",
    description: "Development and validation of initial solution"
  },
  {
    title: "AI Application Deployment in Production",
    duration: "3-4 Months",
    description: "Full implementation and deployment to production"
  }
]

const stats = [
  { value: "300+", label: "Innovative Solutions Deployed" },
  { value: "50+", label: "Certified AI Engineers & Developers" },
  { value: "15+", label: "Years of Proven Industry Experience" }
]

export function OurProcess() {
  return (
    <section className="bg-[#9FA8DA] py-32">
      <div className="container mx-auto px-4">
        <span className="block text-center text-lg text-blue-600 uppercase tracking-wider mb-4">
          OUR PROCESS
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 max-w-5xl mx-auto">
          Start improving your efficiency and reducing your operational costs with Generative AI
          in just a few weeks, not years.
        </h2>
        <div className="flex justify-center mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#7B3FE4] text-white font-medium text-lg hover:bg-[#6E38CC] transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="relative max-w-4xl mx-auto mb-32">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-400 transform -translate-x-1/2" />
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-2" />
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-4 bottom-0 w-px bg-blue-400 transform -translate-x-1/2" />
                )}
                <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{step.duration}</p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Helping startups to large-sized organizations with tailored solutions since 2014
          </h3>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            As industry leaders, we bring a deep understanding of AI, Generative AI, Agentic AI, Chatbots, and
            Cloud technologies. Our skilled team of data scientists, engineers, developers, and MLOps specialists
            build scalable, end-to-end solutions tailored to your needs. We ensure measurable impacts, prioritize
            data security, and support you fully from pre-processing data to technology evaluation, delivering
            solutions that grow with your business.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

