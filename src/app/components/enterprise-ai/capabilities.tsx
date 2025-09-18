"use client";

const capabilities = [
  {
    title: "Intelligent Process Automation",
    description: "Automate complex workflows with AI-driven decision-making and optimization."
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI to forecast trends, detect anomalies, and drive data-driven strategies."
  },
  {
    title: "Natural Language Understanding",
    description: "Enhance interactions with AI-powered NLP for chatbots, voice assistants, and document analysis."
  },
  {
    title: "Computer Vision",
    description: "Analyze and interpret images, videos, and real-world data for enterprise applications."
  },
  {
    title: "Adaptive AI Systems",
    description: "Continuously learn and improve based on real-time data and user feedback."
  },
  {
    title: "Enterprise AI Integration",
    description: "Seamlessly integrate AI solutions with your existing business systems and data pipelines."
  }
];

export function Capabilities() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Enterprise AI Capabilities
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI solutions empower enterprises with advanced automation, analytics, and intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-6 rounded-2xl border border-black shadow-md transition-transform transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-black mb-4">{capability.title}</h3>
              <p className="text-black">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
