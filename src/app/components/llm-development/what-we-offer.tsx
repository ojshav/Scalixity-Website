'use client'
const services = [
  {
    title: "Custom LLM Development",
    description:
      "We develop tailored LLMs that align with your specific business needs, ensuring optimal performance and relevance to your industry.",
  },
  {
    title: "LLM Fine-tuning",
    description:
      "Our experts fine-tune pre-existing LLMs to enhance their performance for your specific use cases, improving accuracy and efficiency.",
  },
  {
    title: "LLM Integration",
    description:
      "We seamlessly integrate LLMs into your existing systems and workflows, ensuring smooth adoption and maximum value from your AI investment.",
  },
  {
    title: "LLM-powered Applications",
    description:
      "We build innovative applications leveraging the power of LLMs, from chatbots and virtual assistants to content generation tools and more.",
  },
  {
    title: "LLM Optimization",
    description:
      "Our team optimizes LLMs for improved performance, reduced computational requirements, and enhanced scalability to meet your business demands.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our LLM Development Services
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-lg border border-black"
            >
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-black mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
