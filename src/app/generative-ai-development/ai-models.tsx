export function AIModels() {
  const models = [
    { name: "GPT-3", description: "A powerful language model capable of generating human-like text." },
    { name: "Davinci", description: "A variant of GPT-3 with enhanced performance and larger capacity." },
    { name: "Curie", description: "A variant of GPT-3 optimized for generating creative and engaging text." },
    { name: "Babbage", description: "This smaller variant of GPT-3 is suitable for apps with limited computational resources." },
    { name: "Ada", description: "A variant of GPT-3 designed for generating conversational responses." },
    { name: "GPT-3.5", description: "An improved version of GPT-3, offering enhanced language generation capabilities and performance." },
    { name: "GPT-4", description: "The next iteration of the GPT series, providing even more advanced language generation abilities." },
    { name: "DALL-E", description: "An AI model capable of generating original images from textual descriptions, enabling creative image synthesis." }
  ];

  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Rich Expertise Across Diverse AI Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
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
