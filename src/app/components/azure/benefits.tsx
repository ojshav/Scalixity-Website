"use client"

const benefits = [
  {
    title: "Enterprise-Grade Cloud Solutions",
    description: "Azure offers a robust cloud platform with hybrid capabilities, enterprise security, and compliance for mission-critical applications."
  },
  {
    title: "Scalability and Performance",
    description: "Leverage Azure's global infrastructure to scale applications seamlessly and ensure high performance under any workload."
  },
  {
    title: "Cost-Effective and Flexible Pricing",
    description: "Azure provides pay-as-you-go and reserved instance pricing models, allowing businesses to optimize costs effectively."
  },
  {
    title: "Seamless Integration with Microsoft Ecosystem",
    description: "Enhance productivity with deep integration into Microsoft 365, Active Directory, and other enterprise tools."
  },
  {
    title: "AI & ML Capabilities for Innovation",
    description: "Azure AI and ML services empower businesses to build intelligent applications with cognitive APIs, Bot Services, and Azure Machine Learning."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of Azure Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
