"use client"
const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Streamline operations and automate repetitive tasks with Generative AI solutions."
  },
  {
    title: "Innovation Acceleration",
    description: "Speed up product development and creative processes with AI-powered ideation and generation."
  },
  {
    title: "Cost Reduction",
    description: "Optimize resource allocation and reduce operational costs through intelligent automation."
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the curve by leveraging cutting-edge Generative AI technologies."
  },
  {
    title: "Scalable Solutions",
    description: "Implement AI solutions that grow with your business and adapt to changing needs."
  },
  {
    title: "Risk Mitigation",
    description: "Ensure compliance and reduce risks with properly implemented AI solutions."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Benefits of Our Consulting Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-2xl shadow-lg border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
