"use client";

const capabilities = [
  {
    title: "Custom AI Chatbot Development",
    description: "Design and build intelligent chatbots tailored to your business needs."
  },
  {
    title: "Multichannel Chatbot Integration",
    description: "Deploy chatbots across websites, messaging apps, and customer support platforms."
  },
  {
    title: "Conversational AI & NLP",
    description: "Enhance chatbot interactions with advanced natural language processing capabilities."
  },
  {
    title: "AI-Powered Customer Support",
    description: "Automate responses and improve customer engagement with AI-driven chatbots."
  },
  {
    title: "Chatbot Analytics & Insights",
    description: "Track chatbot performance and gain actionable insights through AI analytics."
  },
  {
    title: "Secure & Scalable AI Chatbots",
    description: "Ensure data security and scalability with robust AI chatbot solutions."
  }
];

export function Capabilities() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            AI Chatbot Development Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We specialize in building advanced AI-powered chatbots to enhance customer interactions and business automation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
