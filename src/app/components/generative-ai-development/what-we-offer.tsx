"use client"

const services = [
  {
    title: "Experiment with Generative AI",
    description: "Scalixity offers Generative AI development services to help you boost innovation and creativity within your business. By automating the creation of text, video, graphics, and other media, Generative AI can streamline production processes and enhance the quality and innovation of the outputs."
  },
  {
    title: "Chatbots and Virtual Assistance",
    description: "Our Generative AI-powered chatbots and virtual AI agents are equipped with guardrails and mechanisms to prevent hallucinations, ensuring accurate and contextually appropriate interactions. By building a robust internal knowledge base, we enhance the quality of customer interactions and overall service."
  },
  {
    title: "Data-Driven Decision Making",
    description: "We help businesses utilize Generative AI capabilities to forecast outcomes based on internal data lakes, customer behaviors and potential business outcomes. We can help in quickly generating insightful reports from extensive datasets."
  },
  {
    title: "Product Development Enhancements",
    description: "Generative AI offers significant opportunities for product development, focusing on improving the quality of the product by analyzing the code 10x faster. Our team can provide tailored Generative AI solutions that can help with code completion, generation, bug fixing, and code optimization."
  },
  {
    title: "Automation of Routine Operations",
    description: "Generative AI streamlines administrative tasks by automating the drafting, reviewing, and summarization of large documents, providing reasoning and comparing the historical data. By building a tailor-made solution, we can improve your team's overall productivity and efficiency with Generative AI."
  }
]

export function WhatWeOffer() {
  return (
    <section className="bg-[#F3F1EB] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Generative AI development services
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We leverage our proficiency in various AI technologies, such as deep learning, machine
            learning, computer vision, reinforcement learning, and natural language processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#A8B2E7] p-8 rounded-lg border border-black"
            >
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black mb-6 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

