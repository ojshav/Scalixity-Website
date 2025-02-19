const models = [
    {
      name: "GPT-3",
      description: "A powerful language model capable of generating human-like text."
    },
    {
      name: "Davinci",
      description: "It is a variant of GPT-3 with enhanced performance and larger capacity."
    },
    {
      name: "Curie",
      description: "A variant of GPT-3 optimized for generating creative and engaging text."
    },
    {
      name: "Babbage",
      description: "This smaller variant of GPT-3 is suitable for apps with limited computational resources."
    },
    {
      name: "Ada",
      description: "A variant of GPT-3 designed for generating conversational responses."
    },
    {
      name: "GPT-3.5",
      description: "An improved version of GPT-3, offering enhanced language generation capabilities and performance."
    },
    {
      name: "GPT-4",
      description: "The next iteration of the GPT series, expected to provide even more advanced language generation abilities and improved performance."
    },
    {
      name: "DALL-E",
      description: "A unique AI model capable of generating original images from textual descriptions, allowing for creative image synthesis."
    }
  ]
  
  export function AIModels() {
    return (
      <section className="bg-[#080B16] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Rich expertise across diverse AI models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-gray-400">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  