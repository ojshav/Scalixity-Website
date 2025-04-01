"use client"

const processSteps = [
  {
    title: "Stellar Strategy & Planning",
    description: "We analyze your business objectives and blockchain requirements to define a clear roadmap for developing a secure, scalable, and high-performance Stellar-based solution."
  },
  {
    title: "Smart Contract & Asset Issuance",
    description: "We design and implement Stellar smart contracts and tokenized assets, ensuring secure, efficient, and compliant transactions on the Stellar network."
  },
  {
    title: "Decentralized Application Development",
    description: "Our team builds Stellar-based decentralized applications (DApps) with seamless integrations, leveraging Stellar’s fast transaction capabilities for optimal performance."
  },
  {
    title: "Security & Compliance Audits",
    description: "We conduct thorough security assessments, optimizing performance and ensuring adherence to Stellar blockchain security best practices and regulatory standards."
  },
  {
    title: "Deployment & Network Integration",
    description: "We deploy your Stellar-based applications on the network, ensuring a smooth and scalable launch with seamless integration into existing financial ecosystems."
  },
  {
    title: "Ongoing Support & Scaling",
    description: "Post-launch, we continuously monitor, optimize, and scale your Stellar solutions, adapting to new business needs and evolving market conditions."
  }
]

export function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Stellar App Development Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our structured approach ensures secure, scalable, and efficient Stellar blockchain solutions tailored to your needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>
                
                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;
