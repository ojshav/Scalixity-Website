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
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Benefits of AI Consulting
        </h2>
        <p className="text-xl text-white text-center mb-8">
          Unlock the full potential of AI with our expert consulting services designed to drive business growth and efficiency.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
