"use client";

const benefits = [
  {
    title: "Strategic AI Implementation",
    description: "Leverage AI to align with your business goals and drive innovation."
  },
  {
    title: "Cost Optimization",
    description: "Reduce operational costs by automating repetitive tasks and improving efficiency."
  },
  {
    title: "Enhanced Decision Making",
    description: "Utilize AI-driven insights to make informed business decisions faster."
  },
  {
    title: "Scalability & Flexibility",
    description: "Deploy AI solutions that scale with your business needs and market demands."
  },
  {
    title: "Improved Customer Experience",
    description: "Implement AI-powered personalization and automation for superior customer engagement."
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead in the market with cutting-edge AI solutions tailored to your industry."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of AI Consulting
        </h2>
        <p className="text-xl text-black text-center mb-8">
          Unlock the full potential of AI with our expert consulting services designed to drive business growth and efficiency.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black shadow-sm">
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
