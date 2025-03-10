"use client";

const chatbotModels = [
  {
    name: "GPT-4 Turbo",
    description: "An advanced AI model optimized for fast and accurate chatbot responses with lower latency."
  },
  {
    name: "GPT-3.5",
    description: "A reliable and efficient AI model for natural conversations, capable of handling diverse chatbot use cases."
  },
  {
    name: "Claude AI",
    description: "A highly capable language model designed for safe and responsible AI chatbot interactions."
  },
  {
    name: "Gemini AI",
    description: "A powerful chatbot AI model developed to provide human-like conversational experiences."
  },
  {
    name: "Mistral AI",
    description: "An open-weight language model optimized for chatbot responses in multiple domains."
  },
  {
    name: "Llama 2",
    description: "Meta's AI model designed for chatbot applications with a focus on efficiency and accuracy."
  },
  {
    name: "ChatGLM",
    description: "A bilingual chatbot AI model specialized for conversational AI tasks in both English and Chinese."
  },
  {
    name: "Rasa NLU",
    description: "An open-source NLP model designed for chatbot development with strong intent recognition and entity extraction."
  }
];

export function AIModels() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Advanced AI Models for Chatbot Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chatbotModels.map((model, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-2">{model.name}</h3>
              <p className="text-black">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIModels;
