"use client"

const benefits = [
  {
    title: "Cutting-Edge Cloud Infrastructure",
    description: "GCP provides a highly reliable and secure infrastructure to power modern applications with global reach."
  },
  {
    title: "Scalability and High Performance",
    description: "Easily scale applications with Google Kubernetes Engine, App Engine, and Cloud Run to handle variable workloads."
  },
  {
    title: "Cost Optimization and Flexible Pricing",
    description: "GCP offers sustained-use discounts, committed-use contracts, and a pay-as-you-go model to optimize cloud costs."
  },
  {
    title: "Seamless Big Data & Analytics Integration",
    description: "Leverage BigQuery, Dataflow, and AI-driven analytics to extract actionable insights from large datasets."
  },
  {
    title: "AI & ML Capabilities for Innovation",
    description: "GCP’s Vertex AI and AutoML services enable businesses to deploy AI models at scale with ease."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of GCP Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-6 rounded-lg border border-black"
            >
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
