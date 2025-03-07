"use client";

const capabilities = [
  {
    title: "AI Strategy & Consulting",
    description: "Develop a tailored AI strategy to align with business goals and maximize ROI."
  },
  {
    title: "Generative AI Solutions",
    description: "Leverage cutting-edge AI models for content generation, automation, and innovation."
  },
  {
    title: "Custom AI Model Development",
    description: "Build and train AI models tailored to your business needs for maximum impact."
  },
  {
    title: "AI-Powered Data Analytics",
    description: "Extract actionable insights from large datasets using AI-driven analytics and forecasting."
  },
  {
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI solutions into existing workflows and technology stacks."
  },
  {
    title: "Ethical AI & Compliance",
    description: "Ensure AI solutions are transparent, fair, and compliant with industry regulations."
  }
];

export function Capabilities() {
  return (
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI Consulting Capabilities
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide expert AI consulting services to help businesses implement and scale AI solutions effectively.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-[#A8B2E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
              <p className="text-gray-800">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
